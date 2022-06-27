const express = require("express");
const {
  addToCart,
} = require("../controllers/cart/add-to-cart/add-to-cart.controller");
const {
  addToCartValidator,
} = require("../controllers/cart/add-to-cart/add-to-cart.validate");

const { verifyToken } = require("../middlewares/verifyToken");

const router = express.Router();

router.post("/cart/all", verifyToken, (req, res) => {
  res.json({
    message: 123,
    accessToken: req.custom?.accessToken,
  });
});

router.post("/cart/add", verifyToken, addToCartValidator, addToCart);
// router.post("/register", registerValidator, register);

module.exports = router;
