const express = require("express");

const { login } = require("../controllers/auth/login");
const { loginValidator } = require("../controllers/auth/login/validate.login");

const { register } = require("../controllers/auth/register");
const {
  registerValidator,
} = require("../controllers/auth/register/validate.register");

const { verifyToken } = require("../middlewares/verifyToken");

const router = express.Router();

router.post("/login", loginValidator, login);
router.post("/register", registerValidator, register);

module.exports = router;
