const express = require("express");
const router = express.Router();

const transactions_spec = require("../controller/transactions_spec");

router
  .route("/")
  .get(transactions_spec.getTransactions_specs)
  .post(transactions_spec.createTransactions_spec);

router
  .route("/:id")
  .get(transactions_spec.getTransactions_spec)
  .put(transactions_spec.updateTransactions_spec)
  .delete(transactions_spec.deleteTransactions_spec);

module.exports = router;
