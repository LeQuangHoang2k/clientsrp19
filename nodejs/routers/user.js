const express = require("express");

const { getAll } = require("../controllers/user/get");

const router = express.Router();

router.get("/user", getAll);
router.post("/user", getAll);
router.put("/user", getAll);
router.patch("/user", getAll);
router.delete("/user", getAll);

module.exports = router;
