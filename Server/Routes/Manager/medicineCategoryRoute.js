const {
    getAllMedicineCategory,
}= require("../../Controllers/Manager/medicineCategoryController");

const AuthRouter = require("express").Router();

AuthRouter.get("/", getAllMedicineCategory);

module.exports = AuthRouter;