"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class manufacture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      manufacture.hasMany(models.car, {
        foreignKey: "manufacture_id",
      });
    }
  }
  manufacture.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "manufacture",
      paranoid: true,
    }
  );
  return manufacture;
};
