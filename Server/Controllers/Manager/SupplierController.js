const Supplier = require('../../Models/SupplierModel')
const validator =require('validator')

const createSupplier = async (req, res) => {
    const {company_name,contact_person, email, phone, company_address  } = req.body;
    if(!company_name || !contact_person || !email || !phone || !company_address){
      return res.status(400).json({success: false, message: "All Fields Are Required"});
    }

    if (!validator.isMobilePhone(phone, "en-KE")) {
      return res.status(401).json({success: false, message:("Please enter a valid phone number")});
    }

    try {
      const supplier = await Supplier.create({
        company_name: company_name ,
        contact_person: contact_person,
        email: email,
        phone: phone,
        company_address:company_address, 
       });
        return res.status(200).json({ success: true,  supplier});
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }  
}



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

  if (searchSupplier.length === 0) {
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



const getSupplierById = async (req, res) => {
  const id = req.params.id
  try {
    const supplierById = await Supplier.findAll({ where: { supplier_id: id}});

    return res.status(200).json({success: true, warehouse: supplierById });
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
      return res.status(200).json({ success: true, supplier:UpdateSupplier});
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message});
    }
};


 
module.exports = {
    createSupplier,
    searchForSupplier,
    getAllSupplierInfo,
    getSupplierById,
    UpdateSupplierInfo,
};