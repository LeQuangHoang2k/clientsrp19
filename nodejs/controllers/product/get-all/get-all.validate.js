const { checkLimit } = require("../../../middlewares/validators/query/limit");
const { checkPage } = require("../../../middlewares/validators/query/page");
const { verifyInfor } = require("../../../middlewares/verifyInfor");

exports.getAllValidator = async (req, res, next) => {
  await checkPage(req, res, next);

  await checkLimit(req, res, next);

  // verify
  await verifyInfor(req, res, next);
};
