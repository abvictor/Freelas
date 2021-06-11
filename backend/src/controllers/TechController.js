const db = require("../models");

module.exports = {
  async list_techs(request, response) {
    try {
      const techs = await db.Tech.findAll();

      return response.json(techs);
    } catch (err) {
      return response.json(err);
    }
  },
};
