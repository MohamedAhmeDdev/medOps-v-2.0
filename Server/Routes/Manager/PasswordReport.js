const {
    reportApproval,
    getAllPasswordReport,
} = require("../../Controllers/Manager/PasswordReport");

const AuthRouter = require("express").Router();
  
 

AuthRouter.get("/", getAllPasswordReport);
AuthRouter.patch("/:id", reportApproval);
  
  
module.exports = AuthRouter;