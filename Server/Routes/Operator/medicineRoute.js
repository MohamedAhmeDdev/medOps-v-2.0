const {
    searchApi,
    getMedicine,
}= require("../../Controllers/Operator/medicineController");

const AuthRouter = require("express").Router();


AuthRouter.get("/search", searchApi);
AuthRouter.get("/", getMedicine);

module.exports = AuthRouter;