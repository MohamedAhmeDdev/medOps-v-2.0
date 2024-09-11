const {
    assignOrders,
    getAllDelivery,
    getDeliveryById
}= require("../../Controllers/Operator/deliveryController");

const AuthRouter = require("express").Router();


AuthRouter.post("/assignOrders", assignOrders);
AuthRouter.get("/", getAllDelivery);
AuthRouter.get("/:id", getDeliveryById);



module.exports = AuthRouter;