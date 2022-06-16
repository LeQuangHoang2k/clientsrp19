const { body, validationResult, check } = require("express-validator");
const { generateError } = require("../../../utils/gennerate-error-code");

exports.registerValidator = async (req, res, next) => {
  await check("email", "Invalid Value").isEmail().run(req);

  await check("email", "Invalid Format")
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .run(req);

  await check("password", "Length from 8 to 16")
    .isLength({ min: 8, max: 16 })
    .run(req);

  await check("password", "Missing lowercase character")
    .matches(/[a-z]/)
    .run(req);

  await check("password", "Missing uppercase character")
    .matches(/[A-Z]/)
    .run(req);

  await check("password", "Missing special character")
    .matches(/[@#$%]/)
    .run(req);

  await check(
    "password",
    "Your password must have number, uppercase, lowercase character and 1 special character like @, #, $, %"
  )
    .matches(/^[0-9a-zA-Z@#$%]*$/)
    .run(req);

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
