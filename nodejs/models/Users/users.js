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

// "createdAt": "2022-06-15T06:58:14.675Z",
//     "error": {
//         "code": "400-INVALID",
//         "message": "Field Username Cannot Be Empty"
//     },
//     "uuid": "576558de-60dc-4862-b0a2-faf19b26bfd3",
//     "statusCode": 400


// "createdAt": "2022-06-15T07:00:57.339Z",
// "data": "Your account created Successfully",
// "uuid": "42b20ac8-0258-484a-a7ff-84bd8797856c",
// "statusCode": 200
// }

// ###############################################################

// const express = require("express");
// const { UsersModel } = require("../../models/Users/users");
// const axios = require("axios");
// // get

// exports.getAll = async (req, res) => {
//   //check input

//   // check db
//   const users = await UsersModel.find({ email: "theibdn159555@gmail.com" });
//   console.log("🚀 ~ file: get.js ~ line 10 ~ getAll ~ users", users);

//   // main

//   const promise1 = Promise.resolve(3);
//   const promise2 = 42;
//   const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, "foo");
//   });

//   const body = {
//     email: "abc12xz@gmail.com",
//     password: "Phuc@123",
//   };

//   const a = axios.get("http://10.0.100.131:8080/api/v1/products/all");
//   const b = axios.get("http://10.0.100.131:8080/api/v1/products/categories");
//   const c = axios.get("http://10.0.100.131:8080/api/v1/products/suppliers");
//   const d = axios.post("http://10.0.100.131:8080/api/v1/users/register", body);

//   const e = axios.post("http://10.0.100.131:8080/api/v1/users/register", body);

//   // http://10.0.100.131:8080/api/v1/users/register
//   // Promise.all([b, c]).then((values) => {
//   //   values.forEach((element) => {
//   //     console.log(element.data.createdAt);
//   //   });
//   // });
//   try {
//     const mutilResponses = await Promise.all([d, e]);
//     mutilResponses.forEach((element) => {
//       console.log(
//         "🚀 ~ file: get.js ~ line 26 ~ exports.getAll= ~ res",
//         element.data.createdAt
//       );
//     });
//   } catch (error) {
//     console.log("🚀 ~ file: get.js ~ line 49 ~ exports.getAll= ~ error", error.code);
//   }

//   //res

//   res.json({
//     message: 123,
//   });
// };
