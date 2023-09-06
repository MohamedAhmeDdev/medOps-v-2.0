const {
    createOrder,
    getOrderForSingleUser,
    getOrderById,
    UpdateOrderStatus,
    deleteOrderById
}= require("../../Controllers/User/orderController");

const AuthRouter = require("express").Router();

  
AuthRouter.post("/", createOrder);
AuthRouter.get("/", getOrderForSingleUser);
AuthRouter.get("/:id", getOrderById);
AuthRouter.patch("/:id", UpdateOrderStatus);
AuthRouter.delete("/:id",deleteOrderById);
  
  
module.exports = AuthRouter;