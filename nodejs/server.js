const express = require("express");
const http = require("http");
const dotenv = require("dotenv");

dotenv.config();
require("./data/connect");
// require("./hung config/hungConfig");

const app = require("./app.js");

const server = http.createServer(app);

server.listen(process.env.PORT || 4000, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
