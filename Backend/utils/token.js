// utils/token.js
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

// Function to sign an access token
const signAccessToken = (payload) =>
  jwt.sign(payload, process.env.ACCESS_SECRET, {
    expiresIn: "1h",
  });

const signRefreshToken = (payload) =>
  jwt.sign(payload, process.env.REFRESH_SECRET, {
    expiresIn: "7d",
  });

  module.exports = {
    signAccessToken,
    signRefreshToken
  }
