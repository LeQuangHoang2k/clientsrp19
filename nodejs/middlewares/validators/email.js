const { body, validationResult, check, custom } = require("express-validator");
// const { Promise } = require("mongoose");
const { UsersModel } = require("../../models/Users/users");
const { verifyInfor } = require("../verifyInfor");

exports.checkEmail = async (req, res, next) => {
  await check("email", "Undefined or null")
    .exists({ checkFalsy: true })
    .run(req);

  await check("email", "Invalid Value").isEmail().run(req);

  await check("email", "Invalid Format")
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .run(req);
};

exports.checkEmailInDB = async (req, res, next) => {
  await check("email")
    .custom(async (value) => {
      const userFind = await UsersModel.findOne({ email: value });
      if (userFind) return Promise.reject("E-mail already in use");
    })
    .run(req);
};

exports.checkEmailNotInDB = async (req, res, next) => {
  await check("email")
    .custom(async (value) => {
      const userFind = await UsersModel.findOne({ email: value });
      if (!userFind) return Promise.reject("E-mail not in use");
    })
    .run(req);
};
