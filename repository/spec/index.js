const { spec } = require("../../models");
const { getData, setData, deleteData } = require("../../helper/redis");

exports.getSpecs = async () => {
  const data = await spec.findAll({});
  return data;
};

exports.getSpec = async (id) => {
  const key = `specs:${id}`;

  // get from redis
  let data = await getData(key);
  if (data) {
    return data;
  }

  // get from db
  data = await spec.findAll({
    where: {
      id,
    },
  });
  if (data.length > 0) {
    // save to redis
    await setData(key, data[0], 300);

    return data[0];
  }

  throw new Error(`spec is not found!`);
};

exports.createSpec = async (payload) => {
  // save to db
  const data = await spec.create(payload);

  // save to redis
  const key = `specs:${data.id}`;
  await setData(key, data, 300);

  return data;
};

exports.updateSpec = async (id, payload) => {
  const key = `specs:${id}`;

  // update to postgres
  await spec.update(payload, {
    where: {
      id,
    },
  });

  // get from postgres
  const data = await spec.findAll({
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

exports.deleteSpec = async (id) => {
  const key = `specs:${id}`;

  // delete from postgres
  await spec.destroy({ where: { id } });

  // delete from redis
  await deleteData(key);

  return null;
};
