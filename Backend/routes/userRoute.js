const express = require('express');
const {register, login, userProfile} = require('../controllers/userController.js');
const router = express.Router();

//User registration route
router.post('/signup', register);
//User login route
router.post('/login', login);
//get current user profile
router.get('/me', userProfile);

module.exports = router;