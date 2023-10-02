const Transport = require('../../Models/transportModel')
const User = require('../../Models/userModel')
const StaffWarehouse = require("../../Models/staffWarehouseModel");


const createTransport = async (req, res) => {
    const {username, driver_license_number, truck_number  } = req.body;
    if(!username || !driver_license_number || !truck_number){
      return res.status(400).json({ success: false, message: "All Fields Are Required"});
    }
    try {
      const findUser = await User.findOne({where: {username: username}})
 
      const transport = await Transport.create({
        user_id: findUser.user_id,
        driver_license_number: driver_license_number, 
        truck_number: truck_number,
        status: "Available",
       });
        return res.status(200).json({ success: true, transport});
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }  
}



const searchForTransport = async (req, res) => {
  try {
    const {status } = req.query;

    const transport = await Transport.findAll({
      include: [{
        model: User,
        attributes: ['username', 'email'],
      }],
      order: [[User, 'username', 'ASC']],
      });

      const searchTransport = transport.filter((transport) => {
        if (
          (status && transport.status !== status) 
        ) {
          return false;
        }
        return true;
      });
    
    if (searchTransport.length === 0) {
        return res.status(404).json({success: false, message: "No matching results found"});
    }

    return res.status(200).json({ success: true, transport: searchTransport });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};



const getTransport = async (req, res) => {
    try {
      const AllTransport = await Transport.findAll({
        include: [{
          model: User,
          attributes: ['username'],
        }],
        order: [[User, 'username', 'ASC']],
      });
    
      if( AllTransport.length === 0){
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
    const transportById = await Transport.findAll({ where: { transport_id: id},});

      if(transportById.length === 0){
        return res.status(200).json({success: true,  message: "transport not found" });
      }
    return res.status(200).json({success: true, warehouse: transportById });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}


const getUserTransport = async (req, res) => {
  try {
    const UserTransport = await User.findAll({
      where: { role: 'Transporter' },
      attributes: ['username'],
      include: [
        {
          model: StaffWarehouse,
          attributes: ['account_status', 'staff_function'],
        },
      ],
      order: [['username', 'ASC']],
    });
    const staffTransport = UserTransport.filter((user) => user.staffWarehouses.some((warehouse) => warehouse.staff_function === "staff"));

    if (staffTransport.length === 0) {
      return res.status(400).json({ success: false, message: "Staff not found" });
    }

    return res.status(200).json({ success: true, user: staffTransport });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};


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

    return res.status(200).json({ success: true, transport: updatedTransport });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};


module.exports = {
    createTransport,
    searchForTransport,
    getTransport,
    getTransportById,
    getUserTransport,
    UpdateTransport,
};