const Medicine = require('../../Models/medicine')
const Supplier = require('../../Models/Supplier')
const MedicineCategory = require('../../Models/medicineCategory')


const searchApi = async (req, res) => {
  try {
    const { medicine_name,  medicine_category, barcode, aisle, } = req.query;

    const medicines = await Medicine.findAll({
      include: [{
        model: MedicineCategory,
      },{
        model: Supplier,
      }],
      order: [['medicine_name', 'ASC']],
    });
    const searchMedicine = medicines.filter(medicine => {
      if (
        // If the condition evaluates to true exists and the medicine.medicine_name is not equal n this case, the filter function will return false
        (medicine_name && medicine.medicine_name !== String(medicine_name)) ||
        (medicine_category && medicine.medicineCategory.medicine_category !== medicine_category) ||
        (barcode && medicine.barcode !== Number(barcode)) ||
        (aisle && medicine.aisle !== Number(aisle))
      ) {
        return false;
      }
      return true;
    });

    if (!searchMedicine) {
      return res.status(404).json({ success: false, message: "No matching results found"});
    }

    return res.status(200).json({ success: true, medicine: searchMedicine });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};


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
    searchApi,
    getMedicine,
};
  
 