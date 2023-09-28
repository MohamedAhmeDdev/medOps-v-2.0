const {  
    signupForUser, 
    login,  
    forgotPassword,
    resetPassword,
  }= require("../Controllers/Auth");
  
  
  
  const AuthRouter = require("express").Router();
  
  AuthRouter.post("/createAccount", signupForUser);
  AuthRouter.post("/login", login);
  AuthRouter.post("/forgotPassword", forgotPassword);
  AuthRouter.patch("/resetPassword/:token", resetPassword);

  
  
  
  module.exports = AuthRouter;