"use strict";
const { Model } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      profile_image: DataTypes.STRING,
      username: {
        type: DataTypes.STRING,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: DataTypes.STRING,
      wpp: DataTypes.STRING,
      linkedin_username: {
        type: DataTypes.STRING,
        unique: true,
      },
      desc: DataTypes.STRING,
      github_username: {
        type: DataTypes.STRING,
        unique: true,
      },
      is_active: DataTypes.BOOLEAN,
      status: DataTypes.INTEGER,
      is_dev: DataTypes.BOOLEAN,
      first_access: DataTypes.BOOLEAN,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "User",
      freezeTableName: true,
      tableName: "users",
    }
  );

  User.beforeCreate((user) => (user.id = uuidv4()));
  User.beforeCreate((user) => (user.is_active = true));
  User.beforeCreate((user) => (user.first_access = true));

  return User;
};
