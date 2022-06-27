const { checkCart } = require("../../../middlewares/validators/body/cart");
const {
  checkCartId,
  checkCartIdNotMatch,
} = require("../../../middlewares/validators/body/cart_id");
const { verifyInfor } = require("../../../middlewares/verifyInfor");

exports.addToCartValidator = async (req, res, next) => {
  await checkCartId(req, res, next);
  await checkCartIdNotMatch(req, res, next);

  await checkCart(req, res, next);

  // verify
  await verifyInfor(req, res, next);
};
