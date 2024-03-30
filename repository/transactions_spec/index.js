const { transactions_spec, car } = require("../../models");
const { getData, setData, deleteData } = require("../../helper/redis");

exports.getTransactions_specs = async () => {
  const data = await transactions_spec.findAll({
    include: {
      model: car,
    },
  });
  return data;
};

exports.getTransactions_spec = async (id) => {
  const key = `transactions spec:${id}`;

  // get from redis
  let data = await getData(key);
  if (data) {
    return data;
  }

  // get from db
  data = await transactions_spec.findAll({
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

  throw new Error(`transactions_spec is not found!`);
};

exports.createTransactions_spec = async (payload) => {
  // save to db
  const data = await transactions_spec.create(payload);

  // save to redis
  const key = `transactions spec:${data.id}`;
  await setData(key, data, 300);

  return data;
};

exports.updateTransactions_spec = async (id, payload) => {
  const key = `transactions spec:${id}`;

  // update to postgres
  await transactions_spec.update(payload, {
    where: {
      id,
    },
  });

  // get from postgres
  const data = await transactions_spec.findAll({
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

exports.deleteTransactions_spec = async (id) => {
  const key = `transactions spec:${id}`;

  // delete from postgres
  await transactions_spec.destroy({ where: { id } });

  // delete from redis
  await deleteData(key);

  return null;
};
