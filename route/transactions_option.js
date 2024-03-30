const express = require("express");
const router = express.Router();

const transactions_options = require("../controller/transactions_option");

router
  .route("/")
  .get(transactions_options.getTransactions_options)
  .post(transactions_options.createTransactions_option);

router
  .route("/:id")
  .get(transactions_options.getTransactions_option)
  .put(transactions_options.updateTransactions_option)
  .delete(transactions_options.deleteTransactions_option);

module.exports = router;
