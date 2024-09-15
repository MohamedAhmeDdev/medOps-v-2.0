const Medicine = require('../../Models/medicine')
const Supplier = require('../../Models/Supplier')
const MedicineCategory = require('../../Models/medicineCategory')
const Document = require('../../Models/document')
const  Staff = require('../../Models/staff')
const cloudinary = require("cloudinary").v2;
const dotenv = require('dotenv');
dotenv.config();
const { Readable } = require('stream');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});



const createDocument = async (req, res) => {
  const staff_id = req.user.staff_id;
  const { Batch_no } = req.body;
  const file = req.file;

  if (!staff_id) {
    return res.status(400).json({ success: false, message: "Staff ID not found" });
  }
  if (!Batch_no || !file) {
    return res.status(400).json({ success: false, message: "All fields are required, including the document" });
  }

  try {
    const stream = cloudinary.uploader.upload_stream(
      {  folder: "documents"  },
      async (error, result) => {
        if (error) {
          return res.status(500).json({ success: false, message: error.message });
        }

        try {
          const document = await Document.create({
            staff_id: staff_id,
            Batch_no: Batch_no,
            document_url: result.secure_url,
            uploaded_date: new Date(),
          });

          return res.status(200).json({
            success: true,
            message: "Document created",
            document
          });
        } catch (err) {
          return res.status(500).json({ success: false, message: err.message });
        }
      }
    );

    // Pipe the buffer to the stream
    stream.end(file.buffer);  // Use `.end()` with the buffer
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};



const  getDocument = async (req, res) => {
  console.log('sd');
  
  try {
    const documents = await Document.findAll({
      include: [{
        model: Staff,
        attributes: ['name'],
      }],
      order: [['Batch_no', 'ASC']],
    });

    if (!documents) {;
      return res.status(404).json({ success: false, message: "Medicine Not found"});
    }

    return res.status(200).json({success: true, documents });
  } catch (error) {
    console.log(error);
    
    return res.status(500).json({ success: false, message: error.message});
  }
}


const  getDocumentById = async (req, res) => {
  const document_id = req.params.document_id
  
  try {
    const documents = await Document.findAll({
      where: { document_id: document_id}});

    if (!documents) {;
      return res.status(404).json({ success: false, message: "Medicine Not found"});
    }

    return res.status(200).json({success: true, documents });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message});
  }
}



const  getMedicine = async (req, res) => {
    try {
      const AllMedicine = await Medicine.findAll({
            attributes: ['medicine_name'],
      });
  
      if (!AllMedicine) {;
        return res.status(404).json({ success: false, message: "Medicine Not found"});
      }
  
      return res.status(200).json({success: true, medicine: AllMedicine });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message});
    }
}



const geMedicineCategory = async (req, res) => {
    try {
      const medicineCategory = await MedicineCategory.findAll({ 
        attributes: ['medicine_category'],
        });
      return res.status(200).json({success: true, medicineCategory });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message});
    }
  }

  

  const getSupplier = async (req, res) => {
    try {
      const supplier = await Supplier.findAll({
        attributes: ['company_name'],
      });  
      return res.status(200).json({ success: true, supplier  });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
};






module.exports = {
   createDocument,
    getDocument,
    getDocumentById,
    getMedicine,
    geMedicineCategory,
    getSupplier
};