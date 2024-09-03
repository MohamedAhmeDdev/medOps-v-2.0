const {  
    StaffLogin,  
    forgotPassword,
    resetPassword,
  }= require("../../Controllers/Staff/Auth");
  
  
  
  const AuthRouter = require("express").Router();
  
  AuthRouter.post("/auth", StaffLogin);
  AuthRouter.post("/forgotPassword", forgotPassword);
  AuthRouter.patch("/resetPassword/:token", resetPassword);

  
  
  
  module.exports = AuthRouter;