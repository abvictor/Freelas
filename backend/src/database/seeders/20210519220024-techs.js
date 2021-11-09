"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "techs",
      [
        { name: "C" },
        { name: "JavaScript" },
        { name: "React JS" },
        { name: "C++" },
        { name: "C#" },
        { name: "Node js" },
        { name: "Python" },
        { name: "Django" },
        { name: "Flask" },
        { name: "Java" },
        { name: ".NET" },
        { name: "MySQL" },
        { name: "SQL Server" },
        { name: "Ruby" },
        { name: "GO" },
        { name: "Delphi" },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("techs", null, {});
  },
};
