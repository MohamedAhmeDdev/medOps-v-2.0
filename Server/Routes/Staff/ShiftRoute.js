const {
    StartShift,
    getCurrentShifts,
    EnterEndTime,
    getShifts
} = require("../../Controllers/Staff/shiftLogsController");

const AuthRouter = require("express").Router();
const { verifyToken } = require("../../middleware/VerifyToken");

AuthRouter.get("/", verifyToken, getShifts);
AuthRouter.get("/currentShift", verifyToken, getCurrentShifts);
AuthRouter.post("/",verifyToken , StartShift);
AuthRouter.post("/clockOut", verifyToken, EnterEndTime);

  
  
module.exports = AuthRouter;