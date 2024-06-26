"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class spec extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      spec.hasMany(models.transactions_spec, {
        foreignKey: "spec_id",
      });
    }
  }
  spec.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "spec",
      paranoid: true,
    }
  );
  return spec;
};
