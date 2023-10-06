const {
    getDeliveryForSingleTransport,
    getDeliveryById,
}= require("../../Controllers/Transporter/deliveryController");


const { verifyToken } = require("../../middleware/VerifyToken");
const AuthRouter = require("express").Router();


AuthRouter.get("/", verifyToken, getDeliveryForSingleTransport);
AuthRouter.get("/:id", getDeliveryById);

module.exports = AuthRouter;