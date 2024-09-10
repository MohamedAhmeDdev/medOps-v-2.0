const MedicineCategory = require('../../Models/medicineCategory')



const getAllMedicineCategory = async (req, res) => {
  try {
    const medicineCategory = await MedicineCategory.findAll({  order: [['medicine_category', 'ASC']],});
    return res.status(200).json({success: true, medicineCategory});
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message});
  }
}



 
module.exports = {
    getAllMedicineCategory,
};
  