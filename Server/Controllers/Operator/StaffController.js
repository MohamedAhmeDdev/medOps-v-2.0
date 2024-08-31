const User = require("../../Models/user");
const StaffWarehouse = require("../../Models/staff");
const ShiftLogs = require("../../Models/shiftLogs");



const searchForStaff = async (req, res) => {
  const today = new Date();
  const shiftDate = today.toISOString().split('T')[0];

  try {
    const { username, email,  } = req.query;
    const users = await User.findAll({
      include: [{
        model: ShiftLogs,
        attributes: ['shift_status', 'start_time', 'end_time', 'Date'],
        where: {Date: shiftDate,},
        required: false,
      },{
        model: StaffWarehouse,
         attributes: ['account_status'],
      }],
      where:{role:["Transport", "Operator", "Logistic"]},
      order: [['username', 'ASC']],
    });

    const searchStaff = users.filter(user => {
    const status = user.usersWarehouses?.[0]?.account_status 
      if (
        (username && user.username !== String(username)) ||
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
        attributes: ['shift_status', 'start_time', 'end_time', 'Date'],
        where: {Date: shiftDate,},
        required: false,
      },{
        model: StaffWarehouse,
      }],
      where:{role:["Transporter", "Operator", "Logistics"]},
      order: [['username', 'ASC']],
    });


    if (!staff) {
      return res.status(400).json({ success: false, message: "staff not found" });
    }

    return res.status(200).json({ success: true, user: staff });
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



module.exports = {
  searchForStaff,
  getStaff,
  getSingleShift
};