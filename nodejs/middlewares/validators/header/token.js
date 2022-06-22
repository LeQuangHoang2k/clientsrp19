const { body, validationResult, check, header } = require("express-validator");
const bcrypt = require("bcrypt");

const { UsersModel } = require("../../../models/Users/users");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../../../utils/gennerate-token");

exports.checkAccessToken = async (req, res, next) => {
  await header("authorization", "Undefined or null")
    .exists({ checkFalsy: true })
    .run(req);

  await header("authorization", "Invalid value")
    .custom(async (value) => {
      if (!value) return await Promise.reject();

      value = value.split(" ")[1];

      const { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } = process.env;

      // check key AT
      const payloadAT = await matchTokenKey(value, ACCESS_TOKEN_KEY);
      if (payloadAT) return handlePayload(req, payloadAT);

      // check key RT
      var payloadRT = await matchTokenKey(value, REFRESH_TOKEN_KEY);
      if (!payloadRT) return await Promise.reject();

      // check expired
      const payloadActive = await checkActiveToken(payloadRT);
      if (!payloadActive) return await Promise.reject();

      // gen set token
      generateSetToken(req, payloadActive.data);
    })
    .run(req);
};

const matchTokenKey = async (value, key) => {
  try {
    const payload = jwt.verify(value, key);
    return payload;
  } catch (error) {
    return false;
  }
};

const checkActiveToken = async (payload) => {
  if (payload.exp - payload.iat === 0) return false;
  return true;
};

const generateSetToken = async (req, data) => {
  const accessToken = await generateToken(data);
  req.custom = {
    ...req.custom,
    accessToken,
  };
};

const handlePayload = (req, payload) => {
  console.log(
    "🚀 ~ file: token.js ~ line 59 ~ handlePayload ~ payload",
    payload
  );
  req.custom = { ...req.custom, payload };
};