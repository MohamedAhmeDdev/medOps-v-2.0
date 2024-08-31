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
    const searchMedicine = medicines.filter((medicine) => {
      const lowerMedicineName = medicine.medicine_name.toLowerCase();
      const lowerQueryName = medicine_name.toLowerCase();
    
      if (
        (medicine_name && !lowerMedicineName.includes(lowerQueryName)) ||
        (medicine_category && medicine.medicineCategory.medicine_category !== medicine_category) ||
        (barcode && medicine.barcode !== Number(barcode)) ||
        (aisle && medicine.aisle !== Number(aisle))
      ) {
        return false;
      }
      return true;
    });

    // if (searchMedicine.length === 0) {
    //   return res.status(404).json({ success: false, message: "No matching results found"});
    // }

    return res.status(200).json({ success: true, medicine: searchMedicine });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};


const getMedicine = async (req, res) => {
  try {
    const AllMedicine = await Medicine.findAll({ order: [['medicine_name', 'ASC']],});

    if (AllMedicine.length === 0) {
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
        }],
     });

    return res.status(200).json({success: true, medicine: medicineById });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


 
module.exports = {
    searchApi,
    getMedicine,
    getMedicineById
};
  
 