const {
    createNotification,
    getAllNotificationInfo,
    getNotificationById,
    deleteNotification
}= require("../../Controllers/Staff/Notification");

const AuthRouter = require("express").Router();

AuthRouter.post("/", createNotification);
AuthRouter.get("/", getAllNotificationInfo);
AuthRouter.get("/:id", getNotificationById);
AuthRouter.delete("/:id", deleteNotification);


module.exports = AuthRouter;