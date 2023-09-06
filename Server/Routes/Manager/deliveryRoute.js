const {
    getAllDelivery,
}= require("../../Controllers/Manager/deliveryController");

const AuthRouter = require("express").Router();


AuthRouter.get("/:id", getAllDelivery);


module.exports = AuthRouter;