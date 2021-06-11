require("dotenv").config();

const { DB_HOST, DB_USERNAME, DB_PASSWORD, PORT } = process.env;

module.exports = {
  development: {
    dialect: "postgres",
    username: DB_USERNAME,
    password: DB_PASSWORD,
    port: PORT,
    host: DB_HOST,
    database: "freelas",
    define: {
      underscored: true,
      timestamps: false,
    },
  },
};
