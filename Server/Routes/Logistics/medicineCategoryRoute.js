const {
    createMedicineCategory,
    getAllMedicineCategory,
    getMedicineCategoryById,
    UpdateMedicineCategory
}= require("../../Controllers/Logistic/medicineCategoryController");

const AuthRouter = require("express").Router();

AuthRouter.post("/", createMedicineCategory);
AuthRouter.get("/", getAllMedicineCategory);
AuthRouter.get("/:id", getMedicineCategoryById);
AuthRouter.patch("/:id", UpdateMedicineCategory);

module.exports = AuthRouter;