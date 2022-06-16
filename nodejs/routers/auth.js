const express = require("express");
const { body, validationResult, check } = require("express-validator");

const { register } = require("../controllers/auth/register");
const {
  registerValidator,
} = require("../controllers/auth/register/validate");

const router = express.Router();

router.get("/register", register);
router.post(
  "/register",
  registerValidator,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(123);
    res.json({ a: 123 });
  }
  //   register
);
router.put("/register", register);
router.patch("/register", register);
router.delete("/register", register);

module.exports = router;
