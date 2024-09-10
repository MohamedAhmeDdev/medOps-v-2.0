const {
    getStaff,
} = require("../../Controllers/Operator/StaffController");



const AuthRouter = require("express").Router();
  


AuthRouter.get("/", getStaff);

  
module.exports = AuthRouter;