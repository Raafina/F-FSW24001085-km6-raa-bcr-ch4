const { option } = require("../../models");
const { getData, setData, deleteData } = require("../../helper/redis");

exports.getOptions = async () => {
  const data = await option.findAll({});
  return data;
};

exports.getOption = async (id) => {
  const key = `options:${id}`;

  // get from redis
  let data = await getData(key);
  if (data) {
    return data;
  }

  // get from db
  data = await option.findAll({
    where: {
      id,
    },
  });
  if (data.length > 0) {
    // save to redis
    await setData(key, data[0], 300);

    return data[0];
  }

  throw new Error(`option is not found!`);
};

exports.createOption = async (payload) => {
  // save to db
  const data = await option.create(payload);

  // save to redis
  const key = `options:${data.id}`;
  await setData(key, data, 300);

  return data;
};

exports.updateOption = async (id, payload) => {
  const key = `options:${id}`;

  // update to postgres
  await option.update(payload, {
    where: {
      id,
    },
  });

  // get from postgres
  const data = await option.findAll({
    where: {
      id,
    },
  });
  if (data.length > 0) {
    // save to redis
    await setData(key, data[0], 300);

    return data[0];
  }

  return data;
};

exports.deleteOption = async (id) => {
  const key = `options:${id}`;

  // delete from postgres
  await option.destroy({ where: { id } });

  // delete from redis
  await deleteData(key);

  return null;
};
