const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/api/v1", require("./routers/user"));
app.use("/api/v1", require("./routers/auth"));
// app.use("/users", require("./routers/user"));
// app.use("/users", require("./routers/user"));
// app.use("/users", require("./routers/user"));

module.exports = app;
