const {
    reportApproval,
    getAllPasswordReport,
} = require("../../Controllers/Manager/PasswordReport");

const AuthRouter = require("express").Router();
  
const { verifyToken } = require("../../middleware/VerifyToken");

AuthRouter.get("/", getAllPasswordReport);
AuthRouter.patch("/:id", verifyToken, reportApproval);
  
  
module.exports = AuthRouter;