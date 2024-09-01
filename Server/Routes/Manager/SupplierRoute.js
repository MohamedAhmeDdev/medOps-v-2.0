const {
    createSupplier,
    getAllSupplierInfo,
    getSupplierById,
    UpdateSupplierInfo,
}= require("../../Controllers/Manager/SupplierController");

const AuthRouter = require("express").Router();

AuthRouter.post("/", createSupplier);
AuthRouter.get("/", getAllSupplierInfo);
AuthRouter.get("/:id", getSupplierById);
AuthRouter.patch("/:id", UpdateSupplierInfo);


module.exports = AuthRouter;