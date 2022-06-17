const { body, validationResult, check } = require("express-validator");
const { generateError } = require("../utils/gennerate-error-code");

exports.verifyInfor = async (req, res, next) => {
  const result = validationResult(req);

  if (result.isEmpty()) return next();

  res.status(400).json({
    errors: result.array().map((item) => {
      item.message = `${item.param}: ${item.msg}`;
      item.code = generateError(item.msg, item.param, item.location);

      delete item.value;
      delete item.msg;
      delete item.param;
      delete item.location;

      return item;
    }),
  });
};
