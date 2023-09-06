const {
    getDeliveryForSingleTransport,
    getDeliveryById,
}= require("../../Controllers/Transporter/deliveryController");

const AuthRouter = require("express").Router();


AuthRouter.get("/", getDeliveryForSingleTransport);
AuthRouter.get("/:id", getDeliveryById);

module.exports = AuthRouter;