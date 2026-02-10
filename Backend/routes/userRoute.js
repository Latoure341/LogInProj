const express = require("express");
const router = express.Router();
//import { protect } from "../middleware/auth.js";
const { loginUser, registerUser, getProfile } = require("../controllers/userController");

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get('/me', getProfile);

module.exports = router;
