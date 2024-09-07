const {
    createOrder,
    getOrderForSingleUser,
    getOrderById,
    UpdateOrderStatus,
    deleteOrderById
}= require("../../Controllers/User/orderController");

const {  verifyUserToken } = require("../../middleware/VerifyToken");

const AuthRouter = require("express").Router();

AuthRouter.post("/",  verifyUserToken, createOrder);
AuthRouter.get("/",  verifyUserToken, getOrderForSingleUser);
AuthRouter.get("/:id", getOrderById);
AuthRouter.patch("/:id", UpdateOrderStatus);
AuthRouter.delete("/:id",deleteOrderById);
  
  
module.exports = AuthRouter;