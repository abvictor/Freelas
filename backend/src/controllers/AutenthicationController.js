const { compare } = require("bcryptjs");
const { restart } = require("nodemon");
const { sign } = require("jsonwebtoken");
const { Op } = require("sequelize");

const db = require("../models");

const auth = require("../config/auth");

module.exports = {
  async authentication(request, response) {
    try {
      const { userAuth, password } = request.body;

      const user = await db.User.findOne({
        where: {
          [Op.or]: [{ username: userAuth }, { email: userAuth }],
        },
        raw: true,
      });

      if (!user) {
        throw new Error("Wrong combination");
      }

      const passwordMatched = await compare(password, user.password);

      if (!passwordMatched) {
        throw new Error("Wrong combination");
      }

      const { secret, expiresIn } = auth.jwt;

      const token = sign({}, secret, {
        subject: user.id,
        expiresIn,
      });

      delete user.password;

      return response.status(200).json({ user, token });
    } catch (err) {
      return response.status(401).json(err.message);
    }
  },
};
