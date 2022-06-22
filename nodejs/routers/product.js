const express = require("express");
const { getAll } = require("../controllers/product/get-all/get");
const {
  getAllValidator,
} = require("../controllers/product/get-all/validate.get-all");
const { getDetail } = require("../controllers/product/get-detail/get-detail");
const {
  getDetailValidator,
} = require("../controllers/product/get-detail/validate.get-detail");

const { verifyInfor } = require("../middlewares/verifyInfor");
const { verifyToken } = require("../middlewares/verifyToken");

const router = express.Router();

router.get("/product", getAllValidator, getAll);
router.get("/product/:id", verifyToken, getDetailValidator, getDetail);

// router.post("/product", getAll);
// router.put("/product", getAll);
// router.patch("/product", getAll);
// router.delete("/product", getAll);

module.exports = router;
