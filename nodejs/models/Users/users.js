const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  name: { type: String },
  phone: { type: String },
  email: { type: String },
  password: { type: String },
});

exports.UsersModel = mongoose.model("users", UsersSchema);

