const {
    getMedicine,
}= require("../../Controllers/Manager/medicineController");


const AuthRouter = require("express").Router();


AuthRouter.get("/", getMedicine);


module.exports = AuthRouter;