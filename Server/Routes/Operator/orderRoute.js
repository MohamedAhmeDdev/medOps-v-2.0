const {
    getAllOrder,
}= require("../../Controllers/Operator/orderController");

const AuthRouter = require("express").Router();

AuthRouter.get("/", getAllOrder);




module.exports = AuthRouter;