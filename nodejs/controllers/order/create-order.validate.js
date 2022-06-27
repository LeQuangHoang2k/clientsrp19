const {
  checkReceiverAddress,
} = require("../../middlewares/validators/body/receiver_address");
const {
  checkReceiverCity,
} = require("../../middlewares/validators/body/receiver_city");
const {
  checkReceiverDistrict,
} = require("../../middlewares/validators/body/receiver_district");
const {
  checkReceiverName,
} = require("../../middlewares/validators/body/receiver_name");
const {
  checkReceiverWard,
} = require("../../middlewares/validators/body/receiver_ward");
const {
  checkUserId,
  checkUserIdNotMatch,
} = require("../../middlewares/validators/body/user_id");

const { verifyInfor } = require("../../middlewares/verifyInfor");

exports.orderValidator = async (req, res, next) => {
  await checkUserId(req, res, next);
  await checkUserIdNotMatch(req, res, next);

  await checkReceiverName(req, res, next);
  await checkReceiverCity(req, res, next);
  await checkReceiverDistrict(req, res, next);
  await checkReceiverWard(req, res, next);
  await checkReceiverAddress(req, res, next);

  // verify
  await verifyInfor(req, res, next);
  // next()
};
