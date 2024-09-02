const Medicine = require('../../Models/medicine')
const Supplier = require('../../Models/Supplier')
const MedicineCategory = require('../../Models/medicineCategory')
const cloudinary = require("cloudinary").v2;
const dotenv = require('dotenv');
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});


const createMedicine = async (req, res) => {
  const {
    medicine_category,
    company_name,
    medicine_name,
    total_quantity,
    price,
    barcode,
    aisle,
    expiry_date,
  } = req.body;
  
  if (!medicine_category || !company_name || !medicine_name || !total_quantity || !price || !barcode || !aisle || !expiry_date) {
    return res.status(400).json({ success: false, message: "All Fields Are Required" });
  }

  const getMedicineById = await MedicineCategory.findOne({ where: { medicine_category: medicine_category } });
  if (!getMedicineById) {
    return res.status(401).json({ success: false, message: "Medicine_category Is Not Found" });
  }

  const getSupplierById = await Supplier.findOne({ where: { company_name: company_name } });
  if (!getSupplierById) {
    return res.status(402).json({ success: false, message: "Supplier Is Not Found" });
  }

  if (!req.file) {
    return res.status(402).json({ success: false, message: "No file uploaded" });
  }

  const result = await cloudinary.uploader.upload(req.file.path, { folder: "medOps" });

  try {
    const medicine = await Medicine.create({
      medicine_category_id: getMedicineById.medicine_category_id,
      supplier_id: getSupplierById.supplier_id,
      medicine_image: result.secure_url,
      medicine_name: medicine_name,
      total_quantity: total_quantity,
      price: price,
      barcode: barcode,
      aisle: aisle,
      expiry_date: expiry_date,
      date_supplied: new Date(),
    });
    return res.status(200).json({ success: true, medicine });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};





const getAllSupplierInfo = async (req, res) => {
  try {
    const supplierInfo = await Supplier.findAll({      include: [{
      model: MedicineCategory,
    },{
      model: Supplier,
    }],
    order: [['medicine_name', 'ASC']],
  });
    return res.status(200).json({ success: true, supplier: supplierInfo  });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};






const getMedicine = async (req, res) => {
  try {
    const AllMedicine = await Medicine.findAll({
        include: [{
            model: MedicineCategory,
            attributes: ['medicine_category'],
          },{
            model: Supplier,
          }],
          order: [['medicine_name', 'ASC']],
    });

    if (!AllMedicine) {;
      return res.status(404).json({ success: false, message: "Medicine Not found"});
    }

    return res.status(200).json({success: true, medicine: AllMedicine });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message});
  }
}


 
const getMedicineById = async (req, res) => {
  const id = req.params.id
  try {
    const medicineById = await Medicine.findAll({ 
        where: { medicine_id: id},
        include: [{
          model: MedicineCategory,
          attributes: ['medicine_category'],
        },{
          model: Supplier,
        }],
     });

    return res.status(200).json({success: true, medicine: medicineById });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}



const updateMedicine = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const { medicine_category, company_name, medicine_name, total_quantity, price, barcode, aisle, expiry_date } = req.body;

  try {
    let medicineCategoryId;
    let supplierId;

    if (medicine_category) {
      const getMedicineCategory = await MedicineCategory.findOne({ where: { medicine_category: medicine_category } });
      medicineCategoryId = getMedicineCategory.medicine_category_id;
    }

    if (company_name) {
      const getSupplierById = await Supplier.findOne({ where: { company_name: company_name } });
      supplierId = getSupplierById.supplier_id;
    }



    // Check if a new image file is provided in the request
    if (req.file) {
      // If a new image is provided, update the medicine_image field
      const result = await cloudinary.uploader.destroy('image.public_id');
      const updatedImage = await cloudinary.uploader.upload(req.file.path, { folder: "medOps" });
      updateFields = updatedImage.secure_url;
    }

    const UpdateMedicine = await Medicine.update({
      medicine_category_id: medicineCategoryId,
      supplier_id: supplierId,
      medicine_name: medicine_name,
      medicine_image: updateFields,
      total_quantity: total_quantity,
      price: price,
      aisle: aisle,
      barcode: barcode,
      expiry_date: expiry_date,
    }, { where: { medicine_id: id } });
    return res.status(200).json({ success: true, medicine: UpdateMedicine });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};




const deleteMedicine = async (req, res) => {
  try {
      await Medicine.destroy({where: {medicine_id: req.params.id}});

    return res.status(200).json({ success: true, medicine: deleteMedicine});
  } catch (error) {
      res.json({ message: error.message });
  }  
}


 
module.exports = {
    createMedicine,
    getAllSupplierInfo,
    getMedicine,
    getMedicineById,
    updateMedicine,
    deleteMedicine
};
  
 