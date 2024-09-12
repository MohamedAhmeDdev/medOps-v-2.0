const Shift = require('../../Models/shiftLogs')
const ShiftLogs = require('../../Models/shiftLogs')
const Staff = require('../../Models/staff')
const Transport = require('../../Models/transport')
const { Op } = require('sequelize');




const StartShift = async (req, res) => {
  const staff_id = req.user.staff_id; 
    if(!staff_id){
      return res.status(400).json({success: false, message: "staff is Required"});
    }
    
    try {
      const findStaff = await Staff.findOne({where:{ staff_id: staff_id}})
      if(!findStaff){
        return res.status(400).json({success: false, message: "staff not found"});
      }
      
      const shift = await Shift.create({
        staff_id: staff_id,
        shift_status: "Clocked In", 
        start_time: new Date(),
        Date: new Date(),
      });

      return res.status(200).json({
         success: true,
         message: "Clock In",
         shift
      });
    } catch (error) {      
      return res.status(500).json({ success: false, message: error.message });
    }  
}




const EnterEndTime = async (req, res) => {
  const staff_id = req.user.staff_id; 
console.log(staff_id);

  const startOfDay = new Date();
  startOfDay.setUTCHours(0, 0, 0, 0);
  const endOfDay = new Date();
  endOfDay.setUTCHours(23, 59, 59, 999);

  try {
    const staff = await Shift.findOne({
      where: {
        staff_id: staff_id,
        Date: {
          [Op.between]: [startOfDay.toISOString(), endOfDay.toISOString()]
        }
      }
    });

    if (!staff) {
      return res.status(400).json({ success: false, message: "Shift not found for the current date" });
    }

    const [updated] = await Shift.update({
        shift_status: "Clocked Out",
        end_time: new Date(),
      },{
        where: {
          staff_id: staff.staff_id,
          Date: staff.Date
        }}
    );

    return res.status(200).json({ 
      success: true,
      message: "Clock Out",
      updated
    });
   
  } catch (error) {
    console.log(error);
    
    return res.status(500).json({ success: false, message: error.message });
  }
};




const getShifts = async (req, res) => {
  const staff_id = req.user.staff_id; 
  const { weekOffset = 0 } = req.query;

  try {
    let startOfWeek = new Date();
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay() - (weekOffset * 7));
    let endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6); 

    const shift = await Shift.findAll( {
      where: {
         staff_id: staff_id,
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
}



const getCurrentShifts = async (req, res) => {
  const staff_id = req.user.staff_id; 
  
  try {
    const startOfDay = new Date();
    startOfDay.setUTCHours(0, 0, 0, 0);
    const endOfDay = new Date();
    endOfDay.setUTCHours(23, 59, 59, 999);

    const shift = await Staff.findOne({
      where:{ staff_id: staff_id},
      include: [{
        model: ShiftLogs,
        attributes: ['shift_status', 'start_time', 'end_time', 'Date'],
        where: {
          Date: {
            [Op.between]: [startOfDay.toISOString(), endOfDay.toISOString()]
          }
        },
        required: false,
      }],
    });

    if (!shift || shift.length === 0) {
      return res.status(400).json({ success: false, message: "No staff or shifts found for the current day" });
    }

    return res.status(200).json({ success: true, shift });
  } catch (error) {
    console.log(error);
    
    return res.status(500).json({ success: false, message: error.message });
  }
};




module.exports = {
    StartShift,
    getCurrentShifts,
    EnterEndTime,
    getShifts
};