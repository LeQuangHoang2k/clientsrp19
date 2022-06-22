const { checkAccessToken } = require("./validators/header/token");
const { verifyInfor } = require("./verifyInfor");

exports.verifyToken = async (req, res, next) => {
  await checkAccessToken(req, res, next);

  verifyInfor(req, res, next);
};
