const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('../models/users.js');

//User registration
const registerUser = async (req, res)=> {
    try {
        // Accept client keys in common shapes and normalize to our model fields
        const { userName, userEmail } = req.body;
        const userPassword = req.body.userPassword || req.body.password || req.body.UserPassword;
        //Validation
        if (!userName || !userEmail || !userPassword) {
            return  res.status(400).json({message: "All fields are required"});
        }
        //Hashing a password before storing for security
        const hashPass = await bcrypt.hash(userPassword, 10);
        //Create user in DB
        const user = await Users.create({
            userName,
            userEmail,
            userPassword : hashPass
        });
        res.status(200).json({
            message: "User registered successfully",
            user: user._id
        });
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}
//User login
const loginUser = async (req, res)=> {
    try {
        const { userEmail, userPassword } = req.body || {};
        if (!userEmail || !userPassword) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        // Find user by email only, then compare password
        const user = await Users.findOne({ userEmail });
        if(!user){
            return res.status(404).json({message: "User not found"});
        }

        const isValid = await bcrypt.compare(userPassword, user.userPassword);
        if (!isValid){
            return res.status(401).json({ message: "Invalid password" });
        }

        // Generate JWT (use environment variable JWT_SECRET)
        const payload = { id: user._id, email: user.userEmail };
        const secret = process.env.JWT_SECRET || 'change_this_secret';
        const token = jwt.sign(payload, secret, { expiresIn: '1h' });

        // Avoid returning password hash
        const userSafe = user.toObject ? user.toObject() : { ...user };
        delete userSafe.userPassword;

        return res.status(200).json({ message: "Login successful", token, user: userSafe });
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}
module.exports = {
    registerUser,
    loginUser
}