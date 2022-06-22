const {
  checkId,
  checkIdNotMatch,
} = require("../../../middlewares/validators/param/id");
const { verifyInfor } = require("../../../middlewares/verifyInfor");

exports.getDetailValidator = async (req, res, next) => {
  await checkId(req, res, next);
  await checkIdNotMatch(req, res, next);

  // verify
  await verifyInfor(req, res, next);
};
