const {
    searchForStaff,
    getStaff,
    getSingleShift
} = require("../../Controllers/Operator/StaffController");



const AuthRouter = require("express").Router();
  

AuthRouter.get("/search", searchForStaff);
AuthRouter.get("/", getStaff);
AuthRouter.get("/:id", getSingleShift);

  
module.exports = AuthRouter;