const express = require("express");

const { login } = require("../controllers/auth/login/login.controller");
const { loginValidator } = require("../controllers/auth/login/login.validate");

const { register } = require("../controllers/auth/register/register.controller");
const {
  registerValidator,
} = require("../controllers/auth/register/register.validate");

const { verifyToken } = require("../middlewares/verifyToken");

const router = express.Router();

router.post("/login", loginValidator, login);
router.post("/register", registerValidator, register);

module.exports = router;
