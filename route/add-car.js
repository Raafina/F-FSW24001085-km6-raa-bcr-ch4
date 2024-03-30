const express = require("express");
const router = express.Router();
const addCarController = require("../controller/add-car");

router.get("/", addCarController.form);

module.exports = router;
