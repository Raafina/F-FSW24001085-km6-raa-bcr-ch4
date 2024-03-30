const transactions_specRepo = require("../../repository/transactions_spec");

exports.getTransactions_specs = async () => {
  const data = await transactions_specRepo.getTransactions_specs();
  return data;
};

exports.getTransactions_spec = async (id) => {
  const data = await transactions_specRepo.getTransactions_spec(id);
  return data;
};

exports.createTransactions_spec = async (payload) => {
  const data = await transactions_specRepo.createTransactions_spec(payload);
  return data;
};

exports.updateTransactions_spec = async (id, payload) => {
  // update old data
  await transactions_specRepo.updateTransactions_spec(id, payload);

  // find the new data
  const data = await transactions_specRepo.getTransactions_spec(id);

  return data;
};

exports.deleteTransactions_spec = async (id) => {
  const data = await transactions_specRepo.deleteTransactions_spec(id);
  return data;
};
