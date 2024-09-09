const Transport = require('../../Models/transport')
const Staff = require('../../Models/staff')
const StaffWarehouse = require("../../Models/staff");


const createTransport = async (req, res) => {
    const {name, driver_license_number, truck_number  } = req.body;
    if(!name || !driver_license_number || !truck_number){
      return res.status(400).json({ success: false, message: "All Fields Are Required"});
    }
    try {
      const findStaff = await Staff.findOne({where: {name: name}})
 
      const transport = await Transport.create({
        staff_id: findStaff.staff_id,
        driver_license_number: driver_license_number, 
        truck_number: truck_number,
       });
        return res.status(200).json({ 
          success: true, 
          message: "transport created",
          transport
        });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }  
}



const getTransport = async (req, res) => {
    try {
      const AllTransport = await Transport.findAll({
        include: [{
          model: Staff,
          attributes: ['name'],
        }],
      });
    
      if(!AllTransport){
        return res.status(200).json({success: true,  message: "transport not found" });
      }
  
      return res.status(200).json({ success: true, transport:  AllTransport });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
};




const getTransportById = async (req, res) => {
  const id = req.params.id
  try {
    const transportById = await Transport.findAll({
      include: [{
        model: Staff,
        attributes: ['name'],
      }],
       where: { transport_id: id},});

      if(!transportById){
        return res.status(200).json({success: true,  message: "transport not found" });
      }
    return res.status(200).json({success: true, transport: transportById });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}





const UpdateTransport = async (req, res) => {
  const id = req.params.id;
  const { username, driver_license_number, truck_number } = req.body;

  try {
    let findUser;

    if (username) {
      const user = await User.findOne({ where: { username: username } });
      findUser = user.user_id;
    }

    const updatedTransport = await Transport.update({
        user_id: findUser,
        driver_license_number: driver_license_number,
        truck_number: truck_number,
      },{ where:{transport_id: id}}
      );

    return res.status(200).json({
       success: true, 
       message: "transport updated",
       transport: updatedTransport
       });
  } catch (error) {
    return res.status(500).json({ 
      success: false,
      message: error.message
    });
  }
};


module.exports = {
    createTransport,
    getTransport,
    getTransportById,
    UpdateTransport,
};