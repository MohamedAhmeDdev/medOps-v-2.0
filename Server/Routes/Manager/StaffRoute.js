const {
    CreateAccountForStaff,
    searchForStaff,
    getStaff,
    getSingleShift,
    getAllStaffById,
    updateStaff,
    UserDeactivate,
} = require("../../Controllers/Manager/StaffController");

const AuthRouter = require("express").Router();

AuthRouter.post("/", CreateAccountForStaff);
AuthRouter.get("/search", searchForStaff);
AuthRouter.get("/", getStaff);
AuthRouter.get("/getSingleShift/:id", getSingleShift);
AuthRouter.get("/:id", getAllStaffById);
AuthRouter.patch("/updateStaff/:id", updateStaff);
AuthRouter.patch("/UserDeactivate/:id", UserDeactivate);

  
  
module.exports = AuthRouter;