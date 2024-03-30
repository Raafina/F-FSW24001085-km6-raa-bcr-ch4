"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class transactions_option extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      transactions_option.belongsTo(models.car, {
        foreignKey: "cars_id",
      });
      transactions_option.belongsTo(models.option, {
        foreignKey: "options_id",
      });
    }
  }
  transactions_option.init(
    {
      cars_id: DataTypes.STRING,
      options_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "transactions_option",
      paranoid: true,
    }
  );
  return transactions_option;
};
