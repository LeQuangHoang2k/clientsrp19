const jwt = require("jsonwebtoken");

exports.generateToken = async (data) => {
  const accessToken = jwt.sign({ data }, process.env.ACCESS_TOKEN_KEY, {
    expiresIn: "7d",
  });

  return accessToken;
};

exports.generateRefreshToken = async (data) => {
  const refreshToken = jwt.sign({ data }, process.env.REFRESH_TOKEN_KEY, {
    expiresIn: "14d",
  });

  return refreshToken;
};
