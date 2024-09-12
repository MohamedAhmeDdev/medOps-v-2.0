const MedicineCategory = require('../../Models/medicineCategory')


const createMedicineCategory = async (req, res) => {
    const {medicine_category } = req.body;

    if(!medicine_category){
      return res.status(400).json({ success: false, message: "All Fields Are Required"});
    }
    try {
      const medicineCategory = await MedicineCategory.create({
            medicine_category: medicine_category,
        });
        return res.status(200).json({ 
            success: true,
            message: "Medicine Category created",
            medicineCategory
          });
    } catch (error) {
        res.json({ message: error.message });
    }  
}


const getAllMedicineCategory = async (req, res) => {
  try {
    const AllMedicineCategory = await MedicineCategory.findAll({  order: [['medicine_category', 'ASC']],});
    return res.status(200).json({success: true, medicineCategory: AllMedicineCategory });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message});
  }
}


 
const getMedicineCategoryById = async (req, res) => {
  const id = req.params.id
  try {
    const medicineCategoryById = await MedicineCategory.findAll({ where: { medicine_category_id: id} });
    return res.status(200).json({success: true, medicineCategory: medicineCategoryById, });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}



const UpdateMedicineCategory = async (req, res) => {
  const id = req.params.id
    const {medicine_category } = req.body;
    try {  
      const UpdateMedicineCategory = await MedicineCategory.update({medicine_category: medicine_category },
        {where: {medicine_category_id: id} });
      return res.status(200).json({
         success: true,
         message: "Medicine Category Updated",
         medicineCategory: UpdateMedicineCategory
        });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message});
    }
};

 

const deleteMedicineCategory = async (req, res) => {
  try {
      await MedicineCategory.destroy({where: {medicine_category_id: req.params.id}});

    return res.status(200).json({ success: true, medicineCategory: deleteMedicine});
  } catch (error) {
      res.json({ message: error.message });
  }  
}

 
module.exports = {
    createMedicineCategory,
    getAllMedicineCategory,
    getMedicineCategoryById,
    UpdateMedicineCategory,
    deleteMedicineCategory
};
  