"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "techs",
      [
        { name: "Node.js" },
        { name: "React Native" },
        { name: "PHP" },
        { name: "React" },
        { name: "C#" },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("techs", null, {});
  },
};
