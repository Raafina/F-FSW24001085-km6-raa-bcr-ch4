"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class transmission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      transmission.hasMany(models.car, {
        foreignKey: "transmission_id",
      });
    }
  }
  transmission.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "transmission",
      paranoid: true,
    }
  );
  return transmission;
};