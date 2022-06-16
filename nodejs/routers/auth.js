const express = require("express");

const { body, validationResult } = require("express-validator");
const { register } = require("../controllers/auth/register");

const router = express.Router();

router.get("/register", register);
router.post(
  "/register",
  (req,res,next)=>{
    console.log(body("email").normalizeEmail().isEmail());
    next()
  },
  register
);
router.put("/register", register);
router.patch("/register", register);
router.delete("/register", register);

module.exports = router;
