const {
    createSupplier,
    searchForSupplier,
    getAllSupplierInfo,
    getSupplierById,
    UpdateSupplierInfo,
}= require("../../Controllers/Logistic/SupplierController");

const AuthRouter = require("express").Router();

AuthRouter.post("/", createSupplier);
AuthRouter.get("/search", searchForSupplier);
AuthRouter.get("/", getAllSupplierInfo);
AuthRouter.get("/:id", getSupplierById);
AuthRouter.patch("/:id", UpdateSupplierInfo);


module.exports = AuthRouter;