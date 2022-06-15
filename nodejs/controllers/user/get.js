const express = require("express");
const { UsersModel } = require("../../models/Users/users");
const axios = require("axios");
// get

exports.getAll = async (req, res) => {
  //check input

  // check db
  const users = await UsersModel.find({ email: "theibdn159555@gmail.com" });
  console.log("🚀 ~ file: get.js ~ line 10 ~ getAll ~ users", users);

  // main

  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "foo");
  });

  const a = axios.get("http://10.0.100.131:8080/api/v1/products/all");
  const b = axios.get("http://10.0.100.131:8080/api/v1/products/categories");
  const c = axios.get("http://10.0.100.131:8080/api/v1/products/suppliers");

  // Promise.all([b, c]).then((values) => {
  //   values.forEach((element) => {
  //     console.log(element.data.createdAt);
  //   });
  // });

  const mutilResponses = await Promise.all([b, c]);
  mutilResponses.forEach((element) => {
    console.log(
      "🚀 ~ file: get.js ~ line 26 ~ exports.getAll= ~ res",
      element.data.createdAt
    );
  });

  //res

  res.json({
    message: 123,
  });
};
