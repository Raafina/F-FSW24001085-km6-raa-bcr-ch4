const transactions_optionRepo = require("../../repository/transactions_option");

exports.getTransactions_options = async () => {
  const data = await transactions_optionRepo.getTransactions_options();
  return data;
};

exports.getTransactions_option = async (id) => {
  const data = await transactions_optionRepo.getTransactions_option(id);
  return data;
};

exports.createTransactions_option = async (payload) => {
  const data = await transactions_optionRepo.createTransactions_option(payload);
  return data;
};

exports.updateTransactions_option = async (id, payload) => {
  // update old data
  await transactions_optionRepo.updateTransactions_option(id, payload);

  // find the new data
  const data = await transactions_optionRepo.getTransactions_option(id);

  return data;
};

exports.deleteTransactions_option = async (id) => {
  const data = await transactions_optionRepo.deleteTransactions_option(id);
  return data;
};
