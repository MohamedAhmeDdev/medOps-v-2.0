const {
    createMedicine,
    searchApi,
    getMedicine,
    getMedicineById,
    updateMedicine,
    deleteMedicine
}= require("../../Controllers/Logistic/medicineController");

const uploadImage = require("../../middleware/multer");

const AuthRouter = require("express").Router();

AuthRouter.post("/",uploadImage, createMedicine);
AuthRouter.get("/search", searchApi);
AuthRouter.get("/", getMedicine);
AuthRouter.get("/:id", getMedicineById);
AuthRouter.patch("/:id", updateMedicine);
AuthRouter.delete("/:id",  deleteMedicine);

module.exports = AuthRouter;