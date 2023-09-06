const {
    createTransport,
    searchForTransport,
    getTransport,
    getTransportById,
    getUserTransport,
    UpdateTransport,
}= require("../../Controllers/Manager/transportController");

const AuthRouter = require("express").Router();

AuthRouter.post("/",createTransport);
AuthRouter.get("/search",searchForTransport);
AuthRouter.get("/",getTransport);
AuthRouter.get("/getUserTransport", getUserTransport);
AuthRouter.get("/:id",getTransportById);
AuthRouter.patch("/:id",UpdateTransport);


module.exports = AuthRouter;