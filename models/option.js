"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class option extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      option.hasMany(models.transactions_option, {
        foreignKey: "options_id",
      });
    }
  }
  option.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "option",
      paranoid: true,
    }
  );
  return option;
};
