const bcrypt = require("bcrypt");
const { userModel } = require("../../../models/Users/users");

exports.register = async (req, res) => {
  res.status(200).json({
    message: "ĐĂNG KÍ THÀNH CÔNG",
  });
};
