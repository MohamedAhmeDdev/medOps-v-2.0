const User = require("../../Models/userModel");
const StaffWarehouse = require("../../Models/staffWarehouseModel");
const ShiftLogs = require("../../Models/shiftLogsModel");
const validator =require('validator')
const generatePassword = require('generate-password');
const nodemailer =require('nodemailer')
const bcrypt = require("bcrypt");
const { EMAIL_PASS, EMAIL_USER, } = require('../../constant/index');
const cron = require('node-cron');
const {Op} = require('sequelize')


//create account for staff
const CreateAccountForStaff = async (req, res) => {
  const { username, phoneNumber, address, email, role, staffFunction } = req.body;

  if (!username || !phoneNumber || !address || !email || !role || !staffFunction) {
    return res.status(400).json({success: false, message: "All Fields Are Required"});
  }

  if (!validator.isMobilePhone(phoneNumber, "en-KE")) {
    return res.status(401).json({success: false, message:("Please enter a valid phone number")});
  }

  const checkingIfEmailExists = await User.findOne({ where: { email: email } });
  if (checkingIfEmailExists) {
    return res.status(402).json({success: false, message: "Email already exists"});
  } else {
    try {
      const password = generatePassword.generate({
        length:8, numbers:true, symbols:false,uppercase:true, excludeSimilarCharacters:true,
      });
      const encryptedPassword = await bcrypt.hash(password, 10);
      
      const user = await User.create({
        username: username,
        phoneNumber: phoneNumber,
        address: address,
        email: email,
        password: encryptedPassword,
        role: role
      });
       
      const getUserId = await User.findOne({ where: { email: email } });

      const staffWarehouse = await StaffWarehouse.create({
        user_id: getUserId.user_id,
        staff_function: staffFunction,
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

      return res.status(200).json({ success: true, user, staffWarehouse });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }
};



const searchForStaff = async (req, res) => {
    const today = new Date();
  const shiftDate = today.toISOString().split('T')[0];
  try {
    const { username, phoneNumber, email,  } = req.query;
    const users = await User.findAll({ order: [['username', 'ASC']],
    include: [{
      model: ShiftLogs,
      attributes: ['shift_status', 'start_time', 'end_time', 'Date'],
      where: {Date: shiftDate,},
      required: false,
    },{
        model: StaffWarehouse,
         attributes: ['account_status'],
      }],
    });

    const searchStaff = users.filter(user => {
      if (
        (username && user.username !== String(username)) ||
        (phoneNumber && user.phoneNumber !== Number(phoneNumber)) ||
        (email && user.email !== String(email))
      ){
        return false;
      }
      return true;
    });


    if (!searchStaff) {
      return res.status(404).json({ success: false, message: "No matching results found"});
    }

    return res.status(200).json({ success: true, user: searchStaff });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};



const getStaff = async (req, res) => {
  const today = new Date();
  const shiftDate = today.toISOString().split('T')[0];

  try {
    const staff = await User.findAll({
      include: [{
        model: ShiftLogs,
        attributes: ['shift_status', 'start_time', 'end_time'],
        where: {Date: shiftDate,},
        required: false
      },{
        model: StaffWarehouse,
      }],
      order: [['username', 'ASC']],
    });

  
    const getOnlyStaff = staff.filter((user) => user.role !== "User");
    if (!getOnlyStaff) {
      return res.status(400).json({ success: false, message: "staff not found" });
    }

    return res.status(200).json({ success: true, staff: getOnlyStaff });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}


//get all staff by id
const getAllStaffById = async (req, res) => {
  const  id  = req.params.id
  try {
    const staffById = await User.findOne({
      where: { user_id: id },
      include: [{
        model: StaffWarehouse,
      }]
    });
    

    if (!staffById) {
      return res.status(400).json({ success: false, message: "staff not found" });
    }


    return res.status(200).json({ success: true, user: staffById });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}



const getSingleShift = async (req, res) => {
  const { id } = req.params;
 try {
   const shift = await ShiftLogs.findAll({
     where: {user_id : id },
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
  const { username, email, phoneNumber, address, role, staffFunction } = req.body;

  let validatePhoneNumber = "";
  if (phoneNumber !== undefined && phoneNumber !== null) {
    const phoneNumberStr = phoneNumber.toString();
    if (!validator.isMobilePhone(`0${phoneNumberStr}`, "en-KE")) {
      return res.status(400).json({ success: false, message: "Please enter a valid phone number" });
    }
    validatePhoneNumber = phoneNumberStr;
  }

  
  try {
   const updatedUserRole =  await User.update({
      username: username,
      phoneNumber: validatePhoneNumber,
      address: address,
      email: email,
      role: role
   },{where: {user_id: id}});

   const updateStaffWarehouse = await StaffWarehouse.update({
    staff_function: staffFunction,
  },{where: {user_id: id}});
  

    res.status(200).json({ success: true, user: updatedUserRole, updateStaffWarehouse});
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};


//user deactivate function
const UserDeactivate = async (req, res) => {
  const  id  = req.params.id
  const { account_status } = req.body;

  try {
     const deactivate =  await StaffWarehouse.update({
      account_status: account_status
     },{ where: {  user_id: id} });
     res.status(200).json({ success: true, user: deactivate});
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
  }
};



 
const deleteShiftLogs = async () => {
  try {
    const currentDate = new Date();
    const previousMonth = currentDate.getMonth() - 2;
    const year = currentDate.getFullYear();
    const startDate = new Date(year, previousMonth, 1);
    const endDate = new Date(year, previousMonth + 1, 0);

    await Shift.destroy({
      where:{Date:{[Op.between]:[startDate, endDate]}},
    });

    console.log('shiftLogins deleted successfully on the 2nd day of the month.');
  } catch (error) {
    console.log('An error occurred during deleting shiftLogins :', error);
  }
};

cron.schedule('0 0 2 * *', () => {
  deleteShiftLogs();
});



module.exports = {
  CreateAccountForStaff,
  searchForStaff,
  getStaff,
  getAllStaffById,
  getSingleShift,
  updateStaff,
  UserDeactivate,
};