const {
    searchDelivery,
    getAllDelivery,
    getDeliveryById
}= require("../../Controllers/Operator/deliveryController");

const AuthRouter = require("express").Router();


AuthRouter.get("/search", searchDelivery);
AuthRouter.get("/:id", getAllDelivery);
AuthRouter.get("/deliveryById/:id", getDeliveryById);



module.exports = AuthRouter;