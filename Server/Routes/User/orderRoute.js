const {
    createOrder,
    getOrderForSingleUser,
    getOrderById,
    UpdateOrderStatus,
    deleteOrderById
}= require("../../Controllers/User/orderController");

const { verifyToken } = require("../../middleware/VerifyToken");

const AuthRouter = require("express").Router();

AuthRouter.post("/", verifyToken, createOrder);
AuthRouter.get("/", verifyToken, getOrderForSingleUser);
AuthRouter.get("/:id", getOrderById);
AuthRouter.patch("/:id", UpdateOrderStatus);
AuthRouter.delete("/:id",deleteOrderById);
  
  
module.exports = AuthRouter;