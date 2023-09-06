const {
    login,
    forgotPassword,
    resetPassword,  
} = require("../../Controllers/Staff/StaffController");

const AuthRouter = require("express").Router();
  

AuthRouter.post("/login", login);
AuthRouter.post("/forgotPassword", forgotPassword);
AuthRouter.patch("/resetPassword/:id", resetPassword);
  
  
module.exports = AuthRouter;