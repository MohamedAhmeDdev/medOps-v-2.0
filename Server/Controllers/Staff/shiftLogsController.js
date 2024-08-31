const Shift = require('../../Models/shiftLogs')
const User = require('../../Models/user')
const StaffWarehouse = require('../../Models/staff')
const Transport = require('../../Models/transport')




const StartShift = async (req, res) => {
  // const user_id = req.user.id;
    const {user_id } = req.body;
    if(!user_id){
      return res.status(400).json({success: false, message: "All Fields Are Required"});
    }
    try {
      const findUserWarehouse = await StaffWarehouse.findOne({where:{ user_id: user_id}})
      if(!findUserWarehouse){
        return res.status(400).json({success: false, message: "User Warehouse not found"});
      }

      const shift = await Shift.create({
        user_id: user_id,
        shift_status: "Logged In", 
        start_time: new Date(),
        Date: new Date(),
       });

       const findUser = await User.findOne({where:{ user_id: user_id}})
       if(findUser.role === "Transport"){
        const updateTransport = await Transport.update({
          status: "Available", 
        },{where: {user_id: user_id} });
       }

        return res.status(200).json({ success: true, shift });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }  
}



const EnterEndTime = async (req, res) => {
  const id = req.params.id;
  const formattedCurrentDate = new Date();
  try {
    const shift = await Shift.update({
        shift_status: "Logged Out",
        end_time: new Date(),
      },{ where: { user_id: id, Date: formattedCurrentDate }}
    );

    const findUser = await User.findOne({ where: {user_id: id }});
    if (findUser.role === "Transport") {
      const updateTransport = await Transport.update({status:"Unavailable"},{where:{ user_id: id}});
    }

    return res.status(200).json({ success: true, shift });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};




module.exports = {
    StartShift,
    EnterEndTime,
};