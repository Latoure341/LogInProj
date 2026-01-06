const Users = require('../models/users.js');

//User registration
const registerUser = async (req, res)=> {
    try {
        const {userName, userEmail, UserPassword}= req.body;
        //Validation
        if (!userName || !userEmail || !UserPassword) {
            return  res.status(400).json({message: "All fields are required"});
        }
        
        const user = await Users.create({
            userName,
            userEmail,
            userPassword
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
        if (user.userPassword !== userPassword) {
            return res.status(401).json({ message: "Invalid password" });
        }

        return res.status(200).json({ message: "Login successful", user });
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}
module.exports = {
    registerUser,
    loginUser
}