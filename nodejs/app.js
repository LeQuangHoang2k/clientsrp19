const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use("/api", require("./routers/user"));
// app.use("/users", require("./routers/user"));
// app.use("/users", require("./routers/user"));
// app.use("/users", require("./routers/user"));


module.exports = app;
