const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const requireAuth = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(401);
    req.userId = decoded.userId;
    next();
  });
};

module.exports = requireAuth;