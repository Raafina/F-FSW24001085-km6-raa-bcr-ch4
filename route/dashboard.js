const express = require("express");
const router = express.Router();
const dashboardController = require("../controller/dashboard");

router.get("/", dashboardController.dashboard);

module.exports = router;
