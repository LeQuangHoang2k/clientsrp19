const { verifyInfor } = require("../../../middlewares/verifyInfor");
const { checkUserId, checkUserIdNotMatch } = require("../../middlewares/validators/body/user_id");

exports.orderValidator = async (req, res, next) => {
  await checkUserId(req, res, next);
  await checkUserIdNotMatch(req, res, next);

  await checkReceiverName(req, res, next);
  await checkReceiverCity(req, res, next);
  await checkReceiverDistrict(req, res, next);
  await checkReceiverWard(req, res, next);
  await checkReceiverAddress(req, res, next);

  // await checkCart(req, res, next);

  // verify
  await verifyInfor(req, res, next);
};
