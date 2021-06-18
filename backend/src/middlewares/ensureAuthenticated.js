const { verify } = require("jsonwebtoken");

const auth = require("../config/auth");

module.exports = {
  ensureAuthenticated(request, response, next) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new Error("jwt token is missing");
    }

    const [, token] = authHeader.split(" ");
    const { secret } = auth.jwt;

    try {
      const decoded = verify(token, secret);
      const { sub } = decoded;

      request.user = {
        id: sub,
      };

      return next();
    } catch (err) {
      throw new Error("jwt token is invalid");
    }
  },
};
