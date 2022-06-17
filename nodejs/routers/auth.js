const express = require("express");
const { body, validationResult, check } = require("express-validator");

const { register } = require("../controllers/auth/register");
const { registerValidator } = require("../controllers/auth/register/validate");

const router = express.Router();

router.get("/register", register);
router.post("/register", registerValidator, register);
router.put("/register", register);
router.patch("/register", register);
router.delete("/register", register);

module.exports = router;
