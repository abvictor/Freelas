const { Router } = require("express");

const UserController = require("./controllers/UserController");
const TechController = require("./controllers/TechController");
const CoordinatesController = require("./controllers/CoordinatesController");
const AuthenticationController = require("./controllers/AutenthicationController");
const ensureAuthenticated = require("./middlewares/ensureAuthenticated");

const routes = Router();

routes.post("/users", UserController.create_user);
routes.put("/users", UserController.update_user);
routes.get(
  "/users",
  ensureAuthenticated.ensureAuthenticated,
  UserController.list_user
);
routes.put("/users/:id", UserController.active_user);
routes.delete("/users/:id", UserController.inactive_user);

routes.get("/techs", TechController.list_techs);

routes.post("/coordinates", CoordinatesController.create_coordinate);
routes.post("/sessions", AuthenticationController.authentication);

module.exports = routes;
