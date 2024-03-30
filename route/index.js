const express = require("express");

const router = express.Router();
const car = require("./car");
const transmission = require("./transmission");
const manufacture = require("./manufacture");
const type = require("./type");
const option = require("./option");
const spec = require("./spec");
const transactions_option = require("./transactions_option");
const transactions_spec = require("./transactions_spec");
const dashboard = require("./dashboard");
const addCar = require("./add-car");

router.use("/car", car);
router.use("/transmission", transmission);
router.use("/manufacture", manufacture);
router.use("/type", type);
router.use("/option", option);
router.use("/spec", spec);
router.use("/transactions_option", transactions_option);
router.use("/transactions_spec", transactions_spec);
router.use("/index", dashboard);
router.use("/add-car", addCar);

module.exports = router;
