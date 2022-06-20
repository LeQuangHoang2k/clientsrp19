const express = require("express");
const { getAll } = require("../controllers/product/get");

const { verifyToken } = require("../middlewares/verifyToken");

const router = express.Router();

router.get("/product", getAll);
// router.post("/product", getAll);
// router.put("/product", getAll);
// router.patch("/product", getAll);
// router.delete("/product", getAll);

module.exports = router;
