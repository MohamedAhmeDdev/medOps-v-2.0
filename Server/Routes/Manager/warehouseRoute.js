const {
    createWarehouseInfo,
    getAllWarehouseInfo,
    getWarehouseByIdInfo,
    updateWarehouseInfo,
}= require("../../Controllers/Manager/warehouseController");

const AuthRouter = require("express").Router();


AuthRouter.post("/", createWarehouseInfo );
AuthRouter.get("/", getAllWarehouseInfo);
AuthRouter.get("/:id", getWarehouseByIdInfo);
AuthRouter.patch("/:id",  updateWarehouseInfo);

module.exports = AuthRouter;