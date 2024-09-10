const Medicine = require('../../Models/medicine')
const Supplier = require('../../Models/Supplier')
const MedicineCategory = require('../../Models/medicineCategory')



const getMedicine = async (req, res) => {
  try {
    const AllMedicine = await Medicine.findAll({ 
      include: [{
        model: MedicineCategory,
      },{
        model: Supplier,
      }],
      order: [['medicine_name', 'ASC']],
    });

    if (!AllMedicine) {
      return res.status(404).json({ success: false, message: "Medicine Not found"});
    }

    return res.status(200).json({success: true, medicine: AllMedicine });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message});
  }
}

 

 
module.exports = {
    getMedicine,
};
  
 