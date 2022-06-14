const express = require("express");
const { UsersModel } = require("../../models/Users/users");
// get

exports.getAll = async (req, res) => {
  //check input

  // check db
  const users = await UsersModel.find({ email: "theibdn159555@gmail.com" });
  console.log("🚀 ~ file: get.js ~ line 10 ~ getAll ~ users", users);

  // main

  //res

  res.json({
    message: 123,
  });
};
