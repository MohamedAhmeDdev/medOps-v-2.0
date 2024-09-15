const {
    createDocument,
    getDocument,
    getDocumentById,
    getMedicine,
    getSupplier,
    geMedicineCategory,
}= require("../../Controllers/Logistic/MedicineInventory");

const AuthRouter = require("express").Router();
const { verifyToken } = require("../../middleware/VerifyToken");
const {  uploadDocument } = require("../../middleware/multer")

AuthRouter.post("/", verifyToken,  uploadDocument, createDocument);
AuthRouter.get("/document", getDocument);
AuthRouter.get("/document/:document_id", getDocumentById);
AuthRouter.get("/medicine", getMedicine);
AuthRouter.get("/medicineCategory", geMedicineCategory);
AuthRouter.get("/supplier", getSupplier);



module.exports = AuthRouter;