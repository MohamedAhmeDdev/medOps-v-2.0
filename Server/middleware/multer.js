const multer = require("multer");
const path = require("path");

const maxSize = 5 * 1024 * 1024; // 5MB

const storage = multer.memoryStorage(); // Store files in memory to upload to Cloudinary

const uploadImage = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif|pdf|webp/;
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
};
