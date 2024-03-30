const { type, car } = require("../../models");
const { getData, setData, deleteData } = require("../../helper/redis");

exports.getTypes = async () => {
  const data = await type.findAll({
    include: {
      model: car,
    },
  });
  return data;
};

exports.getType = async (id) => {
  const key = `types:${id}`;

  // get from redis
  let data = await getData(key);
  if (data) {
    return data;
  }

  // get from db
  data = await type.findAll({
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

  throw new Error(`type is not found!`);
};

exports.createType = async (payload) => {
  // save to db
  const data = await type.create(payload);

  // save to redis
  const key = `types:${data.id}`;
  await setData(key, data, 300);

  return data;
};

exports.updateType = async (id, payload) => {
  const key = `types:${id}`;

  // update to postgres
  await type.update(payload, {
    where: {
      id,
    },
  });

  // get from postgres
  const data = await type.findAll({
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

exports.deleteType = async (id) => {
  const key = `types:${id}`;

  // delete from postgres
  await type.destroy({ where: { id } });

  // delete from redis
  await deleteData(key);

  return null;
};
