const { body, validationResult, check } = require("express-validator");
const bcrypt = require("bcrypt");

const { UsersModel } = require("../../models/Users/users");
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

exports.checkPasswordNotMatch = async (req, res, next) => {
  await check("password")
    .custom(async (value) => {
      const userFind = await UsersModel.findOne({ email: req.body.email });

      const fakePassword = value + process.env.KEY_PASSWORD;
      const compare = await bcrypt.compare(fakePassword, userFind.password);

      if (!compare) return Promise.reject("Password: not match");
    })
    .run(req);
};
