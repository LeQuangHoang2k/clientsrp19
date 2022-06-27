const { body } = require("express-validator");
const { UsersModel } = require("../../../models/Users/users");
const { verifyInfor } = require("../../verifyInfor");

exports.checkUserId = async (req, res, next) => {
  await body("user_id", "Undefined or null")
    .exists({ checkFalsy: true })
    .run(req);

  await body("user_id", "Length must be 24")
    .isLength({ min: 24, max: 24 })
    .run(req);

  await body("user_id", "Invalid format")
    .matches(/[a-z0-9]/)
    .run(req);
};

exports.checkUserIdNotMatch = async (req, res, next) => {
  await body("user_id")
    .custom(async (value) => {
      const UserFind = await UsersModel.findOne({ _id: value });

      if (!UserFind) return Promise.reject("not match");
    })
    .run(req);
};
