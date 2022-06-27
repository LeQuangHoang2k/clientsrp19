const express = require("express");
const { createOrder } = require("../controllers/order/create-order");
const {
  orderValidator,
} = require("../controllers/order/create-order.validate");

const { verifyToken } = require("../middlewares/verifyToken");

const router = express.Router();

router.post("/order/create", verifyToken, orderValidator, createOrder);

module.exports = router;
