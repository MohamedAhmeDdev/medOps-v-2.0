const Staff = require("../../Models/staff");
const Role  = require("../../Models/roles");
const ShiftLogs = require("../../Models/shiftLogs");
const { Op } = require('sequelize');





const getStaff = async (req, res) => {
  try {
    const startOfDay = new Date();
    startOfDay.setUTCHours(0, 0, 0, 0);
    const endOfDay = new Date();
    endOfDay.setUTCHours(23, 59, 59, 999);

    const staff = await Staff.findAll({
      include: [{
        model: ShiftLogs,
        attributes: ['shift_status', 'start_time', 'end_time', 'Date'],
        where: {
          Date: {
            [Op.between]: [startOfDay.toISOString(), endOfDay.toISOString()]
          }
        },
        required: false,
      },{
        model: Role,
      }],
      order: [['name', 'ASC']],
    });

    if (!staff || staff.length === 0) {
      return res.status(400).json({ success: false, message: "No staff or shifts found for the current day" });
    }

    return res.status(200).json({ success: true, staff });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};









module.exports = {
  getStaff,
};