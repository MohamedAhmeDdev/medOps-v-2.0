const {
    createRoles,
    getRoles,
    getRoleById,
    UpdateRole,
}= require("../../Controllers/Manager/rolesController");

const AuthRouter = require("express").Router();

AuthRouter.post("/", createRoles);
AuthRouter.get("/", getRoles);
AuthRouter.get("/:id", getRoleById);
AuthRouter.patch("/:id",UpdateRole);


module.exports = AuthRouter;