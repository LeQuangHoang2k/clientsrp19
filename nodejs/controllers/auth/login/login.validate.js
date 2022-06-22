const { verifyInfor } = require("../../../middlewares/verifyInfor");
const {
  checkEmail,
  checkEmailNotInDB,
} = require("../../../middlewares/validators/body/email");
const {
  checkPassword,
  checkPasswordNotMatch,
} = require("../../../middlewares/validators/body/password");

exports.loginValidator = async (req, res, next) => {
  // check email
  await checkEmail(req, res, next);
  await checkEmailNotInDB(req, res, next);

  // check password
  await checkPassword(req, res, next);
  await checkPasswordNotMatch(req, res, next);

  // verify
  await verifyInfor(req, res, next);
};
