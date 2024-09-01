const {
  getAllUsers,
} = require("../../Controllers/Manager/userController");

const AuthRouter = require("express").Router();
  

AuthRouter.get("/", getAllUsers);

  
module.exports = AuthRouter;