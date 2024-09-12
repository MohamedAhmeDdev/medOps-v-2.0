const Role = require("../../Models/roles");
const Staff = require("../../Models/staff");
const ShiftLogs = require("../../Models/shiftLogs");
const PasswordReport = require("../../Models/PasswordReport");
const validator =require('validator')
const generatePassword = require('generate-password');
const nodemailer =require('nodemailer')
const bcrypt = require("bcrypt");
const { EMAIL_PASS, EMAIL_USER, } = require('../../constant/index');
const cron = require('node-cron');
const {Op} = require('sequelize')


//create account for staff
const CreateAccountForStaff = async (req, res) => {
  const { name, phoneNumber, address, email, role } = req.body;

  if (!name || !phoneNumber || !address || !email || !role) {
    return res.status(400).json({success: false, message: "All Fields Are Required"});
  }

 

  const emailIfExists = await Staff.findOne({ where: { email: email } });
  if (emailIfExists) {
    return res.status(402).json({success: false, message: "Email already exists"});
  } else {
    try {
      const password = generatePassword.generate({
        length:8, numbers:true, symbols:false,uppercase:true, excludeSimilarCharacters:true,
      });
      
      const encryptedPassword = await bcrypt.hash(password, 10); 
       
      const roles = await Role.findOne({ where: { role: role } });

      const staff = await Staff.create({
        name: name,
        phoneNumber: phoneNumber,
        address: address,
        email: email,
        password: encryptedPassword,
        role_id: roles.role_id,
        account_status: "Active"
      });

      const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
          user: EMAIL_USER,
          pass: EMAIL_PASS
        }
      })
      const mailOption = {
        to: `${staff.email}`,
        subject: "Login Credentials For MedOps",
        html: `
          <html>
            <body class="bg-gray-100">
              <div class="max-w-md mx-auto p-8 bg-white rounded-md shadow-md">
                <h2>MedOps</h2>
                <p class="text-2xl mb-4">Login Credentials</p>
                <p class="mb-4">Email: <b>${staff.email}</b></p>
                <p class="mb-4">Password: <b>${password}</b></p>
                <p class="mb-4">Only for your Eyes, login in medOps system. Please remember to change your password after logging in.</p>
              </div>
            </body>
          </html>
        `
      };
      transporter.sendMail(mailOption,(err ,response)=>{
          if(err){
          }else{
            res.status(200).json('email sent ')
          }
      })
      return res.status(200).json({ 
          success: true,
          message: "Staff created",
          staff
         });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }
};





//get all
const getStaff = async (req, res) => {

    const startOfDay = new Date();
    startOfDay.setUTCHours(0, 0, 0, 0);
    const endOfDay = new Date();
    endOfDay.setUTCHours(23, 59, 59, 999);

  try {
    const staffs = await Staff.findAll({
      include: [{
        model: ShiftLogs,
        attributes: ['shift_status', 'start_time', 'end_time'],
        where:{
          Date: {
            [Op.between]: [startOfDay.toISOString(), endOfDay.toISOString()]
          }
         },
        required: false
      },{
        model: Role,
      }],
      order: [['name', 'ASC']],
    });

    return res.status(200).json({ success: true, staff: staffs });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}



//get all staff by id
const getAllStaffById = async (req, res) => {
  const  id  = req.params.id
  try {
    const staff = await Staff.findOne({
      where: { staff_id: id },
      include: [{
        model: Role, 
        attributes: ['role']
      }]
    });
  
    if (!staff) {
      return res.status(400).json({ success: false, message: "staff not found" });
    }

    return res.status(200).json({ success: true, staff });
  } catch (error) {
    
    return res.status(500).json({ success: false, message: error.message });
  }
}


// get all shift for staff
const getSingleShift = async (req, res) => {
  const { id } = req.params;
  const { weekOffset = 0 } = req.query;

  const staffs = await Staff.findOne({ where: { staff_id: id } });
  if (!staffs) {
    return res.status(404).json({
      success: false,
      message: "Staff not found",
    });
  }

  try {
    let startOfWeek = new Date();
     // Calculate start of the week based on weekOffset
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay() - (weekOffset * 7));
    let endOfWeek = new Date(startOfWeek);
    // End of the calculated week
    endOfWeek.setDate(startOfWeek.getDate() + 6); 

    const shift = await ShiftLogs.findAll({
      where: {
        staff_id: id,
        Date: {
          [Op.between]: [startOfWeek, endOfWeek],
        },
      },
      order: [['Date', 'ASC']],
    });

    return res.status(200).json({ success: true, shift });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};





//update user role
const updateStaff = async (req, res) => { 
  const  id  = req.params.id
  const { name, email, phoneNumber, address, role,  } = req.body;
  

  const roles = await Role.findOne({ where: {	role: role } }); 
  if (!roles) {
    return res.status(404).json({
      success: false,
      message: "role not found",
    });
  }

  try {
   const updatedRole =  await  Staff.update({
      name: name,
      phoneNumber: phoneNumber,
      address: address,
      email: email,
      role_id: roles.role_id
   },{where: {staff_id: id}});  

    res.status(200).json({ 
      success: true,
      message: "Staff updated successfully",
      user: updatedRole});
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};




//user deactivate function
const staffStatus = async (req, res) => {
  const  id  = req.params.id
  const { account_status } = req.body;

  const staffs = await Staff.findOne({ where: {	staff_id: id } });
  if (!staffs) {
    return res.status(404).json({
      success: false,
      message: "staff not found",
    });
  }

  try {
     const userStatus =  await Staff.update({account_status: account_status},{
       where: {  staff_id: id}
       });
     res.status(200).json({
       success: true,
       message: "status updated",
       userStatus
      });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
  }
};



// delete staff
const deleteStaff = async (req, res) => {
  const id = req.params.id;
  try {
    const staffs = await Staff.findOne({ where: { staff_id: id } });
    if (!staffs) {
      return res.status(404).json({
        success: false,
        message: "Staff not found",
      });
    } else {
      await ShiftLogs.destroy({ where: { staff_id: id } });
      await PasswordReport.destroy({ where: { staff_id: id } });
      await Staff.destroy({ where: { staff_id: id } });

      return res.status(200).json({
        success: true,
        message: "Staff deleted",
        staff_id: id,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};






module.exports = {
  CreateAccountForStaff,
  getStaff,
  getAllStaffById,
  getSingleShift,
  updateStaff,
  staffStatus,
  deleteStaff
};