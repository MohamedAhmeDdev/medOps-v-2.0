const {
    getAllSupplierInfo,
}= require("../../Controllers/Operator/SupplierController");

const AuthRouter = require("express").Router();


AuthRouter.get("/", getAllSupplierInfo);


module.exports = AuthRouter;