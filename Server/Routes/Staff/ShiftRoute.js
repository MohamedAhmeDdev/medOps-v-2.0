const {
    StartShift,
    EnterEndTime,
} = require("../../Controllers/Staff/shiftLogsController");

const AuthRouter = require("express").Router();
  

AuthRouter.post("/", StartShift);
AuthRouter.patch("/:id", EnterEndTime);

  
  
module.exports = AuthRouter;