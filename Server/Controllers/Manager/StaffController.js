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

  if (!validator.isMobilePhone(phoneNumber, "en-KE")) {
    return res.status(401).json({success: false, message:("Please enter a valid phone number")});
  }

  const emailIfExists = await Staff.findOne({ where: { email: email } });
  if (emailIfExists) {
    return res.status(402).json({success: false, message: "Email already exists"});
  } else {
    try {
      const password = generatePassword.generate({
        length:8, numbers:true, symbols:false,uppercase:true, excludeSimilarCharacters:true,
      });
      console.log(password);
      
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
            console.log('There was an error',err);
          }else{
            console.log('There was a response ',response);
            res.status(200).json('email sent ')
          }
      })
      return res.status(200).json({ success: true, staff });
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
      }],
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
    const staffById = await Staff.findOne({where: { staff_id: id }});
  
    if (!staffById) {
      return res.status(400).json({ success: false, message: "staff not found" });
    }

    return res.status(200).json({ success: true, user: staffById });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}


// get all shift for staff
const getSingleShift = async (req, res) => {
  const { id } = req.params;

  const staffs = await Staff.findOne({ where: {	staff_id: id } });
  if (!staffs) {
    return res.status(404).json({
      success: false,
      message: "staff not found",
    });
  }
 try {
   const shift = await ShiftLogs.findAll({where: {staff_id : id },
     order: [['Date', 'DESC']],
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

  let validatePhoneNumber = "";
  if (phoneNumber !== undefined && phoneNumber !== null) {
    const phoneNumberStr = phoneNumber.toString();
    if (!validator.isMobilePhone(`0${phoneNumberStr}`, "en-KE")) {
      return res.status(400).json({ success: false, message: "Please enter a valid phone number" });
    }
    validatePhoneNumber = phoneNumberStr;
  }
  
  try {
   const updatedRole =  await  Staff.update({
      name: name,
      phoneNumber: validatePhoneNumber,
      address: address,
      email: email,
      role: role
   },{where: {user_id: id}});  

    res.status(200).json({ 
      success: true,
      message: "Please enter a valid phone number",
      user: updatedRole});
  } catch (error) {
    console.log(error.message);
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