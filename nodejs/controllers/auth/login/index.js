const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {
  generateToken,
  generateRefreshToken,
} = require("../../../middlewares/gennerate-token");

exports.login = async (req, res) => {
  const accessToken = await generateToken(req.userDB);
  const refreshToken = await generateRefreshToken(req.userDB);

  delete req.userDB;

  res.status(200).json({
    access_token: accessToken,
    refresh_token: refreshToken,
  });
};
