const {
    getAllDelivery,
    getDeliveryById
}= require("../../Controllers/Operator/deliveryController");

const AuthRouter = require("express").Router();



AuthRouter.get("/", getAllDelivery);
AuthRouter.get("/:id", getDeliveryById);



module.exports = AuthRouter;