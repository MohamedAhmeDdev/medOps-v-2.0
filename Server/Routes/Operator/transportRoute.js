const {
    getTransport,
}= require("../../Controllers/Operator/transportController");

const AuthRouter = require("express").Router();

AuthRouter.get("/",getTransport);



module.exports = AuthRouter;