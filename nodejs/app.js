const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { handle405 } = require("./utils/handle405");

const app = express();
const router = express.Router();

router.route(`*`).all(handle405);

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/api/v1", require("./routers/auth"));
app.use("/api/v1", require("./routers/user"));
app.use("/api/v1", require("./routers/product"));
// app.use("/users", require("./routers/user"));
// app.use("/users", require("./routers/user"));

// app.use(function (req, res, next) {
//   res.status(404).json({
//     message: "Page not found",
//   });
// });
app.use(router);

module.exports = app;
