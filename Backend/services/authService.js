const bcrypt = require('bcrypt');
const User = require('../models/users.js');
const { signAccessToken, signRefreshToken } = require('../utils/token.js');

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid credentials");

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) throw new Error("Invalid credentials");

  const payload = { userId: user._id, email: user.email };

  return {
    accessToken: signAccessToken(payload),
    refreshToken: signRefreshToken(payload),
  };
};

module.export = {
    loginUser
}