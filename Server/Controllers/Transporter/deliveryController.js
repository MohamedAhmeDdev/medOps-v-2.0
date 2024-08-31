const Delivery = require('../../Models/delivery')
const Order = require('../../Models/order')
const OrderList = require('../../Models/orderList')
const Medicine = require('../../Models/medicine')
const Transport = require('../../Models/transport')
const User = require('../../Models/user')





const getDeliveryForSingleTransport = async (req, res) => {
  const user_id = req.user.user_id;

  try {
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
        attributes: ['order_status', 'total_price'],
      }],
      order: [['createdAt', 'ASC']],
    });

    if(!delivery){
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
      where: { order_id: id },
      include: [{
        model: Transport,
        attributes: ['user_id'],
        include: [{
          model: User,
          attributes: ['username','address','phoneNumber'],
        }],
      },{
        model: Order,
        attributes: ['order_status', 'total_price'],
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