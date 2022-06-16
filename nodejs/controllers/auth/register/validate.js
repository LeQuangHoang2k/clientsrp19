const { body, validationResult, check } = require("express-validator");
const { generateError } = require("../../../utils/gennerate-error-code");

exports.registerValidator = async (req, res, next) => {
  await check("email").isEmail().run(req);
  await check("password").isLength({ min: 8, max: 16 }).run(req);

  const result = validationResult(req);

  if (result.isEmpty()) next();

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
