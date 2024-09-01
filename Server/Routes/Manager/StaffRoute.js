const {
    CreateAccountForStaff,
    getStaff,
    getSingleShift,
    getAllStaffById,
    updateStaff,
    staffStatus,
    deleteStaff
} = require("../../Controllers/Manager/StaffController");

const AuthRouter = require("express").Router();

AuthRouter.post("/", CreateAccountForStaff);
AuthRouter.get("/", getStaff);
AuthRouter.get("/:id", getAllStaffById);
AuthRouter.get("/shifts/:id", getSingleShift);
AuthRouter.patch("/updateStaff/:id", updateStaff);
AuthRouter.patch("/staffStatus/:id", staffStatus);
AuthRouter.delete("/staff/:id", deleteStaff);

  
  
module.exports = AuthRouter;