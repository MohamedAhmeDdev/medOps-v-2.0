const {
    searchForSupplier,
    getAllSupplierInfo,
}= require("../../Controllers/Operator/SupplierController");

const AuthRouter = require("express").Router();


AuthRouter.get("/search", searchForSupplier);
AuthRouter.get("/", getAllSupplierInfo);


module.exports = AuthRouter;