const {
    getMedicine,
}= require("../../Controllers/Operator/medicineController");

const AuthRouter = require("express").Router();



AuthRouter.get("/", getMedicine);

module.exports = AuthRouter;