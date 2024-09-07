const {  
    signupForUser, 
    login,  
    forgotPassword,
    resetPassword,
  }= require("../../Controllers/User/Auth");
  
  
  
  const AuthRouter = require("express").Router();
  
  AuthRouter.post("/signup", signupForUser);
  AuthRouter.post("/login", login);
  AuthRouter.post("/forgotPassword", forgotPassword);
  AuthRouter.patch("/resetPassword/:token", resetPassword);

  
  
  
  module.exports = AuthRouter;