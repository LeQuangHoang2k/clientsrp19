const bcrypt = require("bcrypt");
const { UsersModel } = require("../../../models/Users/users");
const { resetRequest } = require("../../../utils/reset-request");

exports.register = async (req, res) => {
  const { email, password } = req.body;

  const fakePassword = password + process.env.KEY_PASSWORD;
  const hash = bcrypt.hashSync(fakePassword, 10);

  const userSave = new UsersModel({
    email,
    password: hash,
  });

  await userSave.save();

  res.status(200).json({
    message: "ĐĂNG KÍ THÀNH CÔNG",
  });

  resetRequest(req);
};
