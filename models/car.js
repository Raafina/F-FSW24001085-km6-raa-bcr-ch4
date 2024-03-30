"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      car.belongsTo(models.transmission, {
        foreignKey: "transmission_id",
      });
      car.belongsTo(models.manufacture, {
        foreignKey: "manufacture_id",
      });
      car.belongsTo(models.type, {
        foreignKey: "type_id",
      });
      car.hasMany(models.transactions_option, {
        foreignKey: "cars_id",
      });
      car.hasMany(models.transactions_spec, {
        foreignKey: "cars_id",
      });
    }
  }
  car.init(
    {
      model: DataTypes.STRING,
      image: DataTypes.TEXT,
      rentPerDay: DataTypes.BIGINT,
      description: DataTypes.TEXT,
      year: DataTypes.INTEGER,
      transmission_id: DataTypes.INTEGER,
      manufacture_id: DataTypes.INTEGER,
      type_id: DataTypes.INTEGER,
      capacity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "car",
      paranoid: true,
    }
  );
  return car;
};
