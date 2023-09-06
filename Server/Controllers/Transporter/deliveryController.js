const Delivery = require('../../Models/deliveryModel')
const Order = require('../../Models/orderModel')
const OrderList = require('../../Models/orderListModel')
const Medicine = require('../../Models/medicineModel')
const Transport = require('../../Models/transportModel')
const User = require('../../Models/userModel')





const getDeliveryForSingleTransport = async (req, res) => {
    // const user_id = req.user.id;
  try {
    const {user_id} = req.body;
    const delivery = await Delivery.findAll({
      include: [{
        where: { user_id },
        model: Transport,
        attributes: ['user_id'],
        include: [{
          model: User,
          attributes: ['username', 'address', 'phoneNumber'],
        }],
      },{
        model: Order,
        attributes: ['order_status'],
      }],
      order: [['createdAt', 'ASC']],
    });

    if(delivery.length === 0){
      return res.status(200).json({success: true,  message: "transport not found" });
    }

    return res.status(200).json({ success: true, delivery: delivery});
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};


const getDeliveryById = async (req, res) => {
  const { id }  = req.params;
  try {
    const delivery = await Delivery.findOne({
      where: { delivery_id: id },
      include: [{
        model: Transport,
        attributes: ['user_id'],
        include: [{
          model: User,
          attributes: ['username'],
        }],
      },{
        model: Order,
        attributes: ['order_status'],
        include: [{
          model: OrderList,
          include: [{
            model: Medicine,
            attributes: ['medicine_name'],
        }],
        }],
      }],
    });

    if(!delivery){
      return res.status(400).json({success: true,  message: "delivery not found" });
    }

    return res.status(200).json({ success: true, delivery });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};





module.exports = {
  getDeliveryForSingleTransport,
  getDeliveryById,
};