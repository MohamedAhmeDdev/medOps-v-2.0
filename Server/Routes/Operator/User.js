const {
  getAllUsers,
} = require("../../Controllers/Operator/userController");

  const AuthRouter = require("express").Router();
  

  AuthRouter.get("/", getAllUsers);
  
  
  module.exports = AuthRouter;