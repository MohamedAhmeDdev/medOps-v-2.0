const Warehouse = require('../../Models/warehouseModel')
const User = require('../../Models/userModel')
const StaffWarehouse = require('../../Models/staffWarehouseModel')
const bcrypt = require("bcrypt");
const nodemailer =require('nodemailer')
const generatePassword = require('generate-password');
const { EMAIL_PASS, EMAIL_USER } = require('../../constant/index');



const createWarehouseInfo = async (req, res) => {
  const { warehouse_name, warehouse_address , manager, phoneNumber, address, email, role} = req.body;

  if (!warehouse_name || !warehouse_address || !manager || !phoneNumber || !address || !email || !role ) {
    return res.status(400).json({ success: false, message: "All Fields Are Required" });
  }

  try {
    const warehouse = await Warehouse.create({
      warehouse_name: warehouse_name,
      warehouse_address: warehouse_address,
      manager:  manager,
    });
   

    const checkingIfEmailExists = await User.findOne({ where: { email: email } });
    if (checkingIfEmailExists) {
      return res.status(401).json({success: false, message: "Email already exists"});
    } else {
      const password = generatePassword.generate({
        length:8, numbers:true, symbols:false,uppercase:true, excludeSimilarCharacters:true,
      });

      const encryptedPassword = await bcrypt.hash(password, 10);
      const staff = await  User.create({
        username:  manager,
        phoneNumber:  phoneNumber,
        address: address,
        email: email,
        password: encryptedPassword,
        role: role,
    });
   

    const getUserId = await User.findOne({ where: { email: email } });

    const staffWarehouse = await StaffWarehouse.create({
      user_id: getUserId.user_id,
      account_status: "ACTIVE"
    });

    const transporter = nodemailer.createTransport({
      service:'gmail',
      auth:{
        user: EMAIL_USER,
        pass: EMAIL_PASS
      }
    })

    const mailOption = {
      to: `${getUserId.email}`,
      subject: "Login Credentials For MedOps",
      html: `
        <html>
          <body class="bg-gray-100">
            <div class="max-w-md mx-auto p-8 bg-white rounded-md shadow-md">
              <h2>MedOps</h2>
              <p class="text-2xl mb-4">Login Credentials</p>
              <p class="mb-4">Email: <b>${getUserId.email}</b></p>
              <p class="mb-4">Password: <b>${password}</b></p>
              <p class="mb-4">Only for your Eyes, login in medOps system. Please remember to change your password after logging in.</p>
            </div>
          </body>
        </html>
      `
    };

    transporter.sendMail(mailOption,(err ,response)=>{
      if(err){
        console.log('There was an error',err);
      }else{
        console.log('There was a response ',response);
        res.status(200).json('recovery email sent ')
      }
  })

      return res.status(200).json({ success: true, warehouse, staff , staffWarehouse});
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};



const getAllWarehouseInfo = async (req, res) => {

  try {
    const AllWarehouse = await Warehouse.findAll({order: [['warehouse_name', 'ASC']]});
    return res.status(200).json({success: true, warehouse: AllWarehouse, });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message});
  }
}


 
const getWarehouseByIdInfo = async (req, res) => {
  const id = req.params.id
  try {
    const warehouseById = await Warehouse.findAll({ where: { warehouse_id: id} });
    return res.status(200).json({success: true, warehouse: warehouseById, });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}



const updateWarehouseInfo = async (req, res) => {
    const id = req.params.id
    const {warehouse_address, manager, phoneNumber, address, email, role } = req.body;

    try {  
      const UpdateWarehouse = await Warehouse.update({ 
        warehouse_address:  warehouse_address,
        manager: manager,
       },{where: {warehouse_id: id} });
 
      const staff = await User.update({
            username:  manager,
            phoneNumber:  phoneNumber,
            address: address,
            email: email,
            role: role,
      },{where: {user_id: id} });

      return res.status(200).json({ success: true, warehouse:UpdateWarehouse, staff});
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message});
    }
};


 
module.exports = {
    createWarehouseInfo,
    getAllWarehouseInfo,
    getWarehouseByIdInfo,
    updateWarehouseInfo,
};
  
 