const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {
  generateToken,
  generateRefreshToken,
} = require("../../../middlewares/gennerate-token");

exports.login = async (req, res) => {
  delete req.userDB;

  res.status(200).json({
    access_token: await generateToken(req.userDB),
    refresh_token: await generateRefreshToken(req.userDB),
  });
};
