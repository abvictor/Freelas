"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class dev_status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  dev_status.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "dev_status",
      freezeTableName: true,
      tableName: "dev_status",
    }
  );
  return dev_status;
};
