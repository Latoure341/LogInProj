const jwt = require("jsonwebtoken");
const expressAuth = require('@auth/express')
const github = require('@auth/express/providers/github')

export const { handlers, auth } = NextAuth({
  providers: [github],
})

export const protect = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: "Not authenticated" });
  }
  next();
};
