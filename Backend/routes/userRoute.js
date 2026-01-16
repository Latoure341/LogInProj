const express = require('express');
const requireAuth = require('../middleware/auth.js');
const {register, login, userProfile} = require('../controllers/userController.js');
const router = express.Router();

//User registration route
router.post('/signup', register);
//User login route
router.post('/login', requireAuth, login);
//get current user profile
router.get('/me', requireAuth, userProfile);

module.exports = router;