const express = require("express");
const { createOrder } = require("../controllers/order/create-order");

const { verifyToken } = require("../middlewares/verifyToken");

const router = express.Router();

router.post("/order/create", verifyToken, createOrder);

module.exports = router;
