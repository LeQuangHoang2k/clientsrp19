const mongoose = require("mongoose");

const DB_URL = `mongodb+srv://${process.env.USERNAME_DB}:${process.env.PASSWORD_DB}@cluster0.hpke1.mongodb.net/${process.env.DB}`;
console.log("🚀 ~ file: connect.js ~ line 4 ~ DB_URL", DB_URL)

mongoose.connect(
  DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connect mongoose success")
);
