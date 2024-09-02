const {
    getAllOrder,
    getOrderById,
    UpdateOrderStatus,
}= require("../../Controllers/Logistic/orderController");

const AuthRouter = require("express").Router();


AuthRouter.get("/", getAllOrder);
AuthRouter.get("/:id", getOrderById);
AuthRouter.patch("/:id",UpdateOrderStatus);



module.exports = AuthRouter;