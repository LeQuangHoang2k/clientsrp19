const { body, validationResult, check } = require("express-validator");
const { verifyInfor } = require("../verifyInfor");

exports.checkEmail = async (req, res, next) => {
  await check("email", "Invalid Value").isEmail().run(req);

  await check("email", "Invalid Format")
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .run(req);
};
