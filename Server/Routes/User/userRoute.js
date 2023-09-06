const {  
  signupForUser, 
  login,
  updateUserInfo,
  forgotPassword,
  resetPassword,  
}= require("../../Controllers/User/userController");



const AuthRouter = require("express").Router();

AuthRouter.post("/createAccount", signupForUser);
AuthRouter.post("/login", login);
AuthRouter.patch("/updateInfo/:id", updateUserInfo);
AuthRouter.post("/forgotPassword", forgotPassword);
AuthRouter.patch("/resetPassword/:id", resetPassword);



module.exports = AuthRouter;