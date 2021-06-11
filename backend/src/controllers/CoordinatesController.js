const db = require("../models");

module.exports = {
  async create_coordinate(request, response) {
    const { id, coordinates } = request.body;

    const point = { type: "Point", coordinates };
    const updated_at = Date.now();

    const user = await db.User.findByPk(id);

    if (!user) {
      throw new Error("User not found.");
    }

    try {
      await db.User.update(
        {
          coordinates: point,
          updated_at,
        },
        {
          where: {
            id,
          },
        }
      );

      return response.status(200).json();
    } catch (err) {
      return response.status(400).json({ Error: err.message });
    }
  },
};

// {
//   "id": "ifcjhifjoeifj33187483942",
//   "coordinates": [-32.22254, 24.55684]
// }
