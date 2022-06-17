const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {
  generateToken,
  generateRefreshToken,
} = require("../../../middlewares/gennerate-token");

exports.login = async (req, res) => {
  const accessToken = await generateToken(req.resDB);
  const refreshToken = await generateRefreshToken(req.resDB);

  await res.status(200).json({
    access_token: accessToken,
    refresh_token: refreshToken,
    user: req.userDB,
  });

  delete req.userDB;
};
