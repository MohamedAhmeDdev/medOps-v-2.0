const {
    createMedicine,
    getMedicine,
    getAllSupplierInfo,
    getMedicineById,
    updateMedicine,
    deleteMedicine
}= require("../../Controllers/Logistic/medicineController");

const {uploadImage} = require("../../middleware/multer");

const AuthRouter = require("express").Router();

AuthRouter.post("/", uploadImage, createMedicine);
AuthRouter.get("/", getMedicine);
AuthRouter.get("/supplier", getAllSupplierInfo);
AuthRouter.get("/:id", getMedicineById);
AuthRouter.patch("/:id", uploadImage, updateMedicine);
AuthRouter.delete("/:id",  deleteMedicine);

module.exports = AuthRouter;