const Devs = require("../models/Dev");
const db = require("../models");
const { Op } = require("sequelize");

module.exports = {
  async index(request, response) {
    const { latitude, longitude, techs } = request.query;

    console.log(techs);

    const coords = [Number(longitude), Number(latitude)];

    try {
      const devs = await Devs.find({
        location: {
          $nearSphere: {
            $geometry: {
              type: "Point",
              coordinates: coords,
            },
            $maxDistance: 100000,
          },
        },
      });

      const ids = devs.map((dev) => dev.user_id);

      const users = await db.User.findAll({
        attributes: {
          exclude: ["is_active", "status", "password"],
        },
        where: {
          is_active: true,
          id: ids,
        },
        include: [
          {
            model: db.Tech,
            as: "techs",
            attributes: ["id", "name"],
            where: {
              name: {
                [Op.iLike]: "%" + techs + "%",
              },
            },
            through: {
              attributes: [],
            },
          },
          {
            model: db.DevStatus,
            as: db.DevStatus.tableName,
          },
        ],
      });

      console.log(users);

      let usersWithCoords = [];

      users.forEach((user) => {
        let filteredCoord = devs.find((dev) => dev.user_id === user.id);

        usersWithCoords.push({
          user,
          coordinates: filteredCoord.location.coordinates,
        });
      });

      return response.status(200).json(usersWithCoords);
    } catch (err) {
      return response.status(400).json(err);
    }
  },
};
