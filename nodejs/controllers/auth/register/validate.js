const { body, validationResult, check } = require("express-validator");
const { verifyInfor } = require("../../../middlewares/verifyInfor");
const { generateError } = require("../../../utils/gennerate-error-code");
const { checkEmail, checkEmailInDB } = require("../../../middlewares/validators/email");
const { checkPassword } = require("../../../middlewares/validators/password");

exports.registerValidator = async (req, res, next) => {
  await checkEmail(req, res, next);
  await checkEmailInDB(req, res, next);
  
  await checkPassword(req, res, next);

  await verifyInfor(req, res, next);
};
