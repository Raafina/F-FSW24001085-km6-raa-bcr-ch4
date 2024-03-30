const { transmission, car } = require("../../models");
const { getData, setData, deleteData } = require("../../helper/redis");

exports.getTransmissions = async () => {
  const data = await transmission.findAll({
    include: {
      model: car,
    },
  });
  return data;
};

exports.getTransmission = async (id) => {
  const key = `transmissions:${id}`;

  // get from redis
  let data = await getData(key);
  if (data) {
    return data;
  }

  // get from db
  data = await transmission.findAll({
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

  throw new Error(`transmission is not found!`);
};

exports.createTransmission = async (payload) => {
  // save to db
  const data = await transmission.create(payload);

  // save to redis
  const key = `transmissions:${data.id}`;
  await setData(key, data, 300);

  return data;
};

exports.updateTransmission = async (id, payload) => {
  const key = `transmissions:${id}`;

  // update to postgres
  await transmission.update(payload, {
    where: {
      id,
    },
  });

  // get from postgres
  const data = await transmission.findAll({
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

exports.deleteTransmission = async (id) => {
  const key = `transmissions:${id}`;

  // delete from postgres
  await transmission.destroy({ where: { id } });

  // delete from redis
  await deleteData(key);

  return null;
};
