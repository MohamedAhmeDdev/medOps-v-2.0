const {
    passwordReport,
} = require("../../Controllers/Staff/PasswordReport");

const AuthRouter = require("express").Router();
  
 
AuthRouter.post("/", passwordReport);
  
  
module.exports = AuthRouter;