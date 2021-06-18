const db = require("../models");
const { hash } = require("bcryptjs");

module.exports = {
  async list_user(request, response) {
    try {
      const users = await db.User.findAll({
        attributes: {
          exclude: ["is_active", "status", "password"],
        },
        where: {
          is_active: true,
        },
        include: [
          {
            model: db.Tech,
            as: "techs",
            attributes: ["id", "name"],
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
      return response.status(200).json(users);
    } catch (err) {
      return response.status(400).json(err);
    }
  },

  async create_user(request, response) {
    const {
      username,
      email,
      password,
      wpp,
      dev,
      linkedin_username,
      github_username,
      profile_image,
      is_dev,
    } = request.body;

    const date = Date.now(),
      created_at = date,
      updated_at = date;

    const hashedPassword = await hash(password, 8);

    try {
      const user = await db.User.create({
        profile_image,
        username,
        email,
        password: hashedPassword,
        wpp,
        dev,
        linkedin_username,
        github_username,
        is_dev,
        status: 4,
        created_at,
        updated_at,
      });

      delete user.password;

      return response.json({ message: "Sucesso", user });
    } catch (err) {
      return response.json({ error: err + "!!" });
    }
  },

  async update_user(request, response) {
    const {
      id,
      username,
      email,
      senha,
      wpp,
      dev,
      linkedin_username,
      github_username,
      name,
      desc,
      techs,
      status,
    } = request.body;

    const updated_at = Date.now();

    try {
      const user = await db.User.findByPk(id);

      if (!user) {
        throw new Error("User not found.");
      }

      await db.User.update(
        {
          name,
          desc,
          username,
          email,
          senha,
          wpp,
          dev,
          linkedin_username,
          github_username,
          status,
          updated_at,
        },
        {
          where: {
            id,
          },
        }
      );

      await user.setTechs(techs);
      delete user.password;
      return response.json(user);
    } catch (err) {
      return response.status(400).json({ Error: err.message });
    }
  },

  async active_user(request, response) {
    const { id } = request.params;

    try {
      const user = await db.User.update(
        {
          is_active: true,
        },
        {
          where: {
            id,
          },
        }
      );

      return response.json(user);
    } catch (err) {
      return response.json(err);
    }
  },

  async inactive_user(request, response) {
    const { id } = request.params;

    try {
      const user = await db.User.update(
        {
          is_active: false,
        },
        {
          where: {
            id,
          },
        }
      );

      return response.json(user);
    } catch (err) {
      return response.json(err);
    }
  },
};
