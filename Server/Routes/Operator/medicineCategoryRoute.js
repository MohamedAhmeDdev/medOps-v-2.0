const {
    getAllMedicineCategory,
}= require("../../Controllers/Operator/medicineCategoryController");

const AuthRouter = require("express").Router();

AuthRouter.get("/", getAllMedicineCategory);

module.exports = AuthRouter;