const {
    passwordReport,
} = require("../../Controllers/Staff/PasswordReport");

const AuthRouter = require("express").Router();
  
 
AuthRouter.post("/:token", passwordReport);
  
  
module.exports = AuthRouter;