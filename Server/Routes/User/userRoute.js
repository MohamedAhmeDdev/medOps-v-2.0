const {  
  updateUserInfo,
  getUsersById
}= require("../../Controllers/User/userController");


const { verifyToken } = require("../../middleware/VerifyToken");

const AuthRouter = require("express").Router();

AuthRouter.patch("/updateInfo/:id", verifyToken, updateUserInfo);
AuthRouter.get("/:id", verifyToken, getUsersById);


module.exports = AuthRouter;