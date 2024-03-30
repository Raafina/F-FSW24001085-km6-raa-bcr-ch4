"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class transactions_spec extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      transactions_spec.belongsTo(models.car, {
        foreignKey: "cars_id",
      });
      transactions_spec.belongsTo(models.spec, {
        foreignKey: "spec_id",
      });
    }
  }
  transactions_spec.init(
    {
      cars_id: DataTypes.INTEGER,
      spec_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "transactions_spec",
      paranoid: true,
    }
  );
  return transactions_spec;
};
