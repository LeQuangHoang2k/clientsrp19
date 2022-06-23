const {
  checkCartId,
  checkCartIdNotMatch,
} = require("../../../middlewares/validators/body/cartId");
const { verifyInfor } = require("../../../middlewares/verifyInfor");

exports.addToCartValidator = async (req, res, next) => {
  await checkCartId(req, res, next);

  await checkCartIdNotMatch(req, res, next);

  // verify
  await verifyInfor(req, res, next);
};
