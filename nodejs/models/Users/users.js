const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  name: { type: String },
  phone: { type: String },
  email: { type: String },
  password: { type: String },
});

exports.UsersModel = mongoose.model("users", UsersSchema);

// id int [pk, increment] // auto-increment
// email varchar
// password varchar


// first_name varchar
// last_name varchar
// phone varchar
// image varchar

// city varchar
// district varchar
// ward varchar
// apartment_number varchar

// permission_id number
// rank_id number
// state_id number

// created_at timestamp
// updated_at timestamp

// "email": "a1@a.com",
//     "password":"123456789Aa@",
//     "first_name":"hoang",
//     "last_name":"le",
//     "phone":"0123456789",
//     "image":"https://",
//     "city":"",
//     "district":"",
//     "ward":"",
//     "apartment_number":"123 abc",
//     "permission_id":2,
//     "rank_id":5,
//     "state_id":1

