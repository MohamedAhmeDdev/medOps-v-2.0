const multer = require("multer");
const path = require("path");

const maxSize = 5 * 1024 * 1024; 
const storage = multer.memoryStorage(); 


const uploadImage = multer({
  storage: multer.diskStorage({}),
  limits: { fileSize: maxSize },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif|webp/;
    const extName = fileTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimeType = fileTypes.test(file.mimetype);

    if (extName && mimeType) {
      return cb(null, true);
    } else {
      cb("Images only");
    }
  },
}).single("image");


const uploadDocument = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const fileTypes = /pdf/;
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);

    if (extName && mimeType) {
      return cb(null, true);
    } else {
      cb("Invalid file type. Only images and PDF files are allowed.");
    }
  },
}).single("document");

module.exports = {
  uploadImage,
  uploadDocument
};
