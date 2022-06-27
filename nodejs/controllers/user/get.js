const express = require("express");
const { UsersModel } = require("../../models/Users/users");
const axios = require("axios");
const { resetRequest } = require("../../utils/reset-request");
// get

exports.getAll = async (req, res) => {
  //res

  res.json({
    message: 123,
    accessToken: req.custom?.accessToken,
  });

  resetRequest(req);
};

// const body = {
//   email: "hoang019@gmail.com",
//   username: "Hoang",
//   password: "Phuc@123",
// };

// const a = axios.get("https://provinces.open-api.vn/api/?depth=3");
// const a1 = axios.post("http://10.0.100.131:8080/api/v1/users/register", body);
// const a2 = axios.post("http://10.0.100.131:8080/api/v1/users/register", body);
// const a3 = axios.post("http://10.0.100.131:8080/api/v1/users/register", body);
// const a4 = axios.post("http://10.0.100.131:8080/api/v1/users/register", body);
// const a5 = axios.post("http://10.0.100.131:8080/api/v1/users/register", body);
// const a6 = axios.post("http://10.0.100.131:8080/api/v1/users/register", body);
// const a7 = axios.post("http://10.0.100.131:8080/api/v1/users/register", body);

// var count = 0;

// try {
//   const mutilResponses = await Promise.all([a1, a2, a3, a4, a5, a6, a7]);

//   console.log("try", mutilResponses);
// } catch (error) {
//   console.log(
//     "🚀 ~ file: get.js ~ line 30 ~ exports.getAll= ~ error",
//     error?.response?.data
//   );

//   console.log("catch");
// }
