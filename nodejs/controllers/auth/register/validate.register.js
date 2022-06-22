const { verifyInfor } = require("../../../middlewares/verifyInfor");
const {
  checkEmail,
  checkEmailInDB,
} = require("../../../middlewares/validators/body/email");
const { checkPassword } = require("../../../middlewares/validators/body/password");

exports.registerValidator = async (req, res, next) => {
  // check email
  await checkEmail(req, res, next);
  await checkEmailInDB(req, res, next);

  // check password
  await checkPassword(req, res, next);

  // verify
  await verifyInfor(req, res, next);
};
