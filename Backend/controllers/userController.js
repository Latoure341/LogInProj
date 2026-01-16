const bcrypt = require('bcrypt');
const Users = require('../models/users.js');
const {loginUser} = require('../services/authService.js');

//User registration
const register = async (req, res)=> {
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
const login = async (req, res)=> {
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

        //authenticating and setting cookies
        try {
            const { accessToken, refreshToken } = await loginUser(req.body);
            const cookieOptions = {
              access: {
                httpOnly: true,
                sameSite: "strict",
                secure: process.env.NODE_ENV === "production",
                maxAge: 15 * 60 * 1000,
              },
              refresh: {
                httpOnly: true,
                sameSite: "strict",
                secure: process.env.NODE_ENV === "production",
                maxAge: 7 * 24 * 60 * 60 * 1000,
              },
            };
        
            res
              .cookie("accessToken", accessToken, cookieOptions.access)
              .cookie("refreshToken", refreshToken, cookieOptions.refresh)
              .json({ message: "Logged in" });
          } catch (e) {
            res.status(401).json({ message: 'Loggin failed!'});
          }
        
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

//get profile
const userProfile = async(req, res)=> {
    try {
        const user = await Users.findById(req.user._id).select('-userEmail -userName -userPassword');
        res.status(200).json(user);
    } catch (error){
        res.status(500).json({message: error.message});
    }
}
module.exports = {
    register,
    loginUser,
    userProfile
}