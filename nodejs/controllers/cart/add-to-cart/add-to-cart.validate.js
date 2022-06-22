const { verifyInfor } = require("../../../middlewares/verifyInfor");

exports.addToCartValidator = async (req, res, next) => {
  // check cart id

  // check cart array

  // verify
  await verifyInfor(req, res, next);
};
