const {
  checkProductId,
  checkProductIdNotMatch,
} = require("../../../middlewares/validators/param/productId");
const { verifyInfor } = require("../../../middlewares/verifyInfor");

exports.getDetailValidator = async (req, res, next) => {
  await checkProductId(req, res, next);
  await checkProductIdNotMatch(req, res, next);

  // verify
  await verifyInfor(req, res, next);
};
