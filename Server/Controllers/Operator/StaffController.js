const Staff = require("../../Models/staff");
const Role  = require("../../Models/roles");
const ShiftLogs = require("../../Models/shiftLogs");





const getStaff = async (req, res) => {
  const today = new Date();
  const shiftDate = today.toISOString().split('T')[0];
  try {
    const staff = await Staff.findAll({
      include: [{
        model: ShiftLogs,
        attributes: ['shift_status', 'start_time', 'end_time', 'Date'],
        where: {Date: shiftDate,},
        required: false,
      },{
        model: Role,
      }],
      order: [['name', 'ASC']],
    });

    if (!staff) {
      return res.status(400).json({ success: false, message: "staff not found" });
    }

    return res.status(200).json({ success: true, staff });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}




const getSingleShift = async (req, res) => {
  const { id } = req.params;
 try {
   const shift = await ShiftLogs.findAll({
     where: {staff_id : id },
     order: [['Date', 'ASC']],
   });

   return res.status(200).json({ success: true, shift });
 } catch (error) {
   return res.status(500).json({ success: false, message: error.message });
 }
};



module.exports = {
  getStaff,
  getSingleShift
};