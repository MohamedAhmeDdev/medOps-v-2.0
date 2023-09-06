const {
    getAllMedicineCategory,
}= require("../../Controllers/Logistic/medicineCategoryController");

const AuthRouter = require("express").Router();

AuthRouter.get("/", getAllMedicineCategory);

module.exports = AuthRouter;