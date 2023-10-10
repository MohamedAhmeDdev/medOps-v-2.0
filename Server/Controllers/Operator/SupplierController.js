const Supplier = require('../../Models/SupplierModel')



const searchForSupplier = async (req, res) => {
  try {
    const { company_name, contact_person, email, phone, } = req.query;

    const supplier = await Supplier.findAll({ order: [['company_name', 'ASC']],});
    const searchSupplier = supplier.filter((supplier) => {
      if (
        (company_name && supplier.company_name !== String(company_name)) ||
        (contact_person && supplier.contact_person !== String(contact_person)) ||
        (email && supplier.email !== String(email)) ||
        (phone && supplier.phone !== Number(phone))
      ) {
        return false;
      }
      return true;
    });

  if (!searchSupplier) {
    return res.status(404).json({ success: false, message: "No matching results found"});
  }

    return res.status(200).json({ success: true, supplier: searchSupplier });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};



const getAllSupplierInfo = async (req, res) => {
    try {
      const supplierInfo = await Supplier.findAll({ order: [['company_name', 'ASC']],});  
      return res.status(200).json({ success: true, supplier: supplierInfo  });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
};


 
module.exports = {
    searchForSupplier,
    getAllSupplierInfo,
};