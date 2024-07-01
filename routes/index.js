const express = require("express");
const { getScript, createHDomSnapshot } = require("../controllers");
const router = express.Router();

router.get("/external", getScript);
router.post("/external", createHDomSnapshot);

module.exports = router;
