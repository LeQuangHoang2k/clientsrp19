const { body, validationResult, check } = require("express-validator");
const { verifyInfor } = require("../verifyInfor");

exports.checkPassword = async (req, res, next) => {
  await check("password", "Undefined or null")
    .exists({ checkFalsy: true })
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
};
