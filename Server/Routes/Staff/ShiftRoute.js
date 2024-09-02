const {
    StartShift,
    EnterEndTime,
    getShifts
} = require("../../Controllers/Staff/shiftLogsController");

const AuthRouter = require("express").Router();
  

AuthRouter.get("/:id", getShifts);
AuthRouter.post("/", StartShift);
AuthRouter.patch("/:id", EnterEndTime);

  
  
module.exports = AuthRouter;