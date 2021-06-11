const Sequelize = require("sequelize");

const User = require("./user");
const Tech = require("./tech");
const DevStatus = require("./dev_status");

const { development } = require("../config/config");
const { database, define, dialect, host, password, username } = development;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  define,
});

const db = {
  sequelize,
  Sequelize,
  User: User(sequelize, Sequelize),
  Tech: Tech(sequelize, Sequelize),
  DevStatus: DevStatus(sequelize, Sequelize),
};

db.User.belongsToMany(db.Tech, {
  through: "user_techs",
  as: "techs",
  foreignKey: "user_id",
  otherKey: "tech_id",
});

db.Tech.belongsToMany(db.User, {
  through: "user_techs",
  as: "users",
  foreignKey: "tech_id",
  otherKey: "user_id",
});

db.User.belongsTo(db.DevStatus, {
  foreignKey: "status",
  as: "dev_status",
});

db.sequelize.sync();

module.exports = db;
