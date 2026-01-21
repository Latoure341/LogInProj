const jwt = require("jsonwebtoken");
const expressAuth = require('@auth/express')
const github = require('@auth/express/providers/github')

export const { handlers, auth } = NextAuth({
  providers: [github],
})

module.exports = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};
