const { transactions_option, car } = require("../../models");
const { getData, setData, deleteData } = require("../../helper/redis");

exports.getTransactions_options = async () => {
  const data = await transactions_option.findAll({
    include: {
      model: car,
    },
  });
  return data;
};

exports.getTransactions_option = async (id) => {
  const key = `transactions option:${id}`;

  // get from redis
  let data = await getData(key);
  if (data) {
    return data;
  }

  // get from db
  data = await transactions_option.findAll({
    where: {
      id,
    },
    include: {
      model: car,
    },
  });
  if (data.length > 0) {
    // save to redis
    await setData(key, data[0], 300);

    return data[0];
  }

  throw new Error(`transactions_option is not found!`);
};

exports.createTransactions_option = async (payload) => {
  // save to db
  const data = await transactions_option.create(payload);

  // save to redis
  const key = `transactions option:${data.id}`;
  await setData(key, data, 300);

  return data;
};

exports.updateTransactions_option = async (id, payload) => {
  const key = `transactions option:${id}`;

  // update to postgres
  await transactions_option.update(payload, {
    where: {
      id,
    },
  });

  // get from postgres
  const data = await transactions_option.findAll({
    where: {
      id,
    },
    include: {
      model: car,
    },
  });
  if (data.length > 0) {
    // save to redis
    await setData(key, data[0], 300);

    return data[0];
  }

  return data;
};

exports.deleteTransactions_option = async (id) => {
  const key = `transactions option:${id}`;

  // delete from postgres
  await transactions_option.destroy({ where: { id } });

  // delete from redis
  await deleteData(key);

  return null;
};
