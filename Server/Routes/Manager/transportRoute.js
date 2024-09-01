const {
    createTransport,
    getTransport,
    getTransportById,
    UpdateTransport,
}= require("../../Controllers/Manager/transportController");

const AuthRouter = require("express").Router();

AuthRouter.post("/",createTransport);
AuthRouter.get("/",getTransport);
AuthRouter.get("/:id",getTransportById);
AuthRouter.patch("/:id",UpdateTransport);


module.exports = AuthRouter;