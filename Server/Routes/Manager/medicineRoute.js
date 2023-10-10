const {
    searchApi,
    getMedicine,
}= require("../../Controllers/Manager/medicineController");

const uploadImage = require("../../middleware/multer");

const AuthRouter = require("express").Router();


AuthRouter.get("/search", searchApi);
AuthRouter.get("/", getMedicine);


module.exports = AuthRouter;