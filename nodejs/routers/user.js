const express = require("express");

const { getAll } = require("../controllers/user/get");

const router = express.Router();

router.get("/", getAll);
router.post("/", getAll);
router.put("/", getAll);
router.patch("/", getAll);
router.delete("/", getAll);

module.exports = router;
