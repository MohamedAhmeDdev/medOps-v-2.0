const {
    searchApi,
    getMedicine,
    getMedicineById
}= require("../../Controllers/User/medicineController");

const AuthRouter = require("express").Router();


AuthRouter.get('/search', searchApi);
AuthRouter.get("/", getMedicine);
AuthRouter.get("/:id", getMedicineById);

module.exports = AuthRouter;