const {
    searchForOrder,
    getAllOrder,
    getOrderById,
}= require("../../Controllers/Operator/orderController");

const AuthRouter = require("express").Router();

AuthRouter.get("/search",searchForOrder);
AuthRouter.get("/", getAllOrder);
AuthRouter.get("/:id", getOrderById);



module.exports = AuthRouter;