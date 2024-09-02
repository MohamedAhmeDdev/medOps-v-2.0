const Supplier = require('../../Models/Supplier')






const getAllSupplierInfo = async (req, res) => {
    try {
      const supplierInfo = await Supplier.findAll({ order: [['company_name', 'ASC']],});  
      return res.status(200).json({ success: true, supplier: supplierInfo  });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
};


 
module.exports = {
    getAllSupplierInfo,
};