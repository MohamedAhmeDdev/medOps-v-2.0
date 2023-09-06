const {
  searchForUser,
  getAllUsers,
} = require("../../Controllers/Operator/userController");

  const AuthRouter = require("express").Router();
  

  AuthRouter.get("/search", searchForUser); 
  AuthRouter.get("/", getAllUsers);
  
  
  module.exports = AuthRouter;