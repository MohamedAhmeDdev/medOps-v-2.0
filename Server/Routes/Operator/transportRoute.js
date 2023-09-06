const {
    searchForTransport,
    getTransport,
}= require("../../Controllers/Operator/transportController");

const AuthRouter = require("express").Router();

AuthRouter.get("/search",searchForTransport);
AuthRouter.get("/",getTransport);



module.exports = AuthRouter;