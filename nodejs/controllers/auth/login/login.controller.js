const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {
  generateToken,
  generateRefreshToken,
} = require("../../../utils/gennerate-token");
const { resetRequest } = require("../../../utils/reset-request");

exports.login = async (req, res) => {
  res.status(200).json({
    access_token: await generateToken(req.custom.userDB),
    refresh_token: await generateRefreshToken(req.custom.userDB),
  });

  resetRequest(req);
};
