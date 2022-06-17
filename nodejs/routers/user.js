const express = require("express");

const { getAll } = require("../controllers/user/get");
const { verifyToken } = require("../middlewares/verifyToken");

const router = express.Router();

router.get("/user", verifyToken, getAll);
router.post("/user", getAll);
router.put("/user", getAll);
router.patch("/user", getAll);
router.delete("/user", getAll);

module.exports = router;
