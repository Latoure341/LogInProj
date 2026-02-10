const express = require('express');
const router = express.Router();
const passport = require('passport')

// 🔐 Start GitHub OAuth
router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

// 🔁 GitHub callback
router.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/login",
    successRedirect: "http://localhost:5137/dashboard",
  })
);

export default router;
