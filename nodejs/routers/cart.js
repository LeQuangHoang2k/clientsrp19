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
  var newAccessToken = req.accessToken ? req.accessToken : undefined;

  res.json({
    message: 123,
    accessToken: newAccessToken,
  });
});

router.post("/cart/add", verifyToken, addToCartValidator, addToCart);
// router.post("/register", registerValidator, register);

module.exports = router;
