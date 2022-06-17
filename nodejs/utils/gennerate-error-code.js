const express = require("express");

exports.generateError = (msg, param, location) => {
  const textUppercase = msg.split(" ");

  var msgAt0 = "";

  textUppercase.forEach((element) => (msgAt0 += element.charAt(0).toUpperCase()));

  const paramAt0 = param.charAt(0).toUpperCase();
  const locationAt0 = location.charAt(0).toUpperCase();

  const newError = `400-${locationAt0}${paramAt0}${msgAt0}`;

  return newError;
};
