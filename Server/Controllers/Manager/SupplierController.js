const Supplier = require('../../Models/Supplier')




const createSupplier = async (req, res) => {
    const {company_name,contact_person, email, phone, company_address  } = req.body;
    if(!company_name || !contact_person || !email || !phone || !company_address){
      return res.status(400).json({success: false, message: "All Fields Are Required"});
    }

    try {
      const supplier = await Supplier.create({
        company_name: company_name ,
        contact_person: contact_person,
        email: email,
        phone: phone,
        company_address:company_address, 
       });
        return res.status(200).json({ 
          success: true,
          message: "supplier created",
          supplier
          });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }  
}



const getAllSupplierInfo = async (req, res) => {
    try {
      const supplierInfo = await Supplier.findAll({ order: [['company_name', 'ASC']],});  
      return res.status(200).json({ success: true, supplier: supplierInfo  });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
};




const getSupplierById = async (req, res) => {
  const id = req.params.id
  try {
    const supplierById = await Supplier.findAll({ where: { supplier_id: id}});

    return res.status(200).json({success: true, supplier: supplierById });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}




const UpdateSupplierInfo = async (req, res) => {
  const id = req.params.id
  const {company_name,contact_person, email, phone, company_address  } = req.body;

    try {  
      const UpdateSupplier = await Supplier.update({ 
        company_name: company_name ,
        contact_person: contact_person,
        email: email,
        phone: phone,
        company_address:company_address, 
     },{where: {supplier_id: id} });
      return res.status(200).json({ 
        success: true,
        message: "supplier updated",
        supplier:UpdateSupplier
      });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message});
    }
};


 
module.exports = {
    createSupplier,
    getAllSupplierInfo,
    getSupplierById,
    UpdateSupplierInfo,
};