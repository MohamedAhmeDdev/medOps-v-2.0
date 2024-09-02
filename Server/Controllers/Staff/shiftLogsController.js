const Shift = require('../../Models/shiftLogs')
const User = require('../../Models/user')
const Staff = require('../../Models/staff')
const Transport = require('../../Models/transport')
const { Op } = require('sequelize');




const StartShift = async (req, res) => {
  // const user_id = req.user.id;
    const {staff_id } = req.body;
    if(!staff_id){
      return res.status(400).json({success: false, message: "All Fields Are Required"});
    }
    try {
      const findStaff = await Staff.findOne({where:{ staff_id: staff_id}})
      if(!findStaff){
        return res.status(400).json({success: false, message: "staff not found"});
      }

      const shift = await Shift.create({
        staff_id: staff_id,
        shift_status: "Logged In", 
        start_time: new Date(),
        Date: new Date(),
      });

      return res.status(200).json({ success: true, shift });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }  
}



const EnterEndTime = async (req, res) => {
  const id = req.params.id;

  const startOfDay = new Date();
  startOfDay.setUTCHours(0, 0, 0, 0);
  const endOfDay = new Date();
  endOfDay.setUTCHours(23, 59, 59, 999);

  try {
    const staff = await Shift.findOne({
      where: {
        staff_id: id,
        Date: {
          [Op.between]: [startOfDay.toISOString(), endOfDay.toISOString()]
        }
      }
    });

    if (!staff) {
      return res.status(400).json({ success: false, message: "Shift not found for the current date" });
    }

    const [updated] = await Shift.update({
        shift_status: "Logged Out",
        end_time: new Date(),
      },{
        where: {
          staff_id: id,
          Date: staff.Date
        }}
    );

    if (updated) {
      return res.status(200).json({ success: true, updated });
    } else {
      return res.status(400).json({ success: false, message: "Failed to update shift" });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};






const getShifts = async (req, res) => {
  const id = req.params.id;

  try {
    const shift = await Shift.findAll( {
      where: { staff_id: id }
    });

    return res.status(200).json({ success: true, shift });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}



module.exports = {
    StartShift,
    EnterEndTime,
    getShifts
};