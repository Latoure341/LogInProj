const express = require('express');
const mongoose = require('mongoose');
const {registerUser, loginUser} = require('../controllers/userController.js');
const router = express.Router();

//User registration route
router.post('/signup', registerUser);
//User login route
router.post('/login', loginUser);

module.exports = router;