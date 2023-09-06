const {
    searchForReport,
    getOderReport
} = require("../../Controllers/Manager/orderReportController");

const AuthRouter = require("express").Router();
  

AuthRouter.get("/search", searchForReport);
AuthRouter.get("/", getOderReport);
  
  
module.exports = AuthRouter;