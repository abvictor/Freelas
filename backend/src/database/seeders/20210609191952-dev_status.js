"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "dev_status",
      [
        { name: "Disponível" },
        { name: "Indisponível" },
        { name: "Em serviço" },
        { name: "Buscando freelas" },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("dev_status", null, {});
  },
};
