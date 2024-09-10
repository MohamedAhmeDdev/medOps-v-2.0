const Delivery = require('../../Models/delivery')
const Order = require('../../Models/order')
const Transport = require('../../Models/transport')
const Staff = require('../../Models/staff')
const User = require('../../Models/user')
const OrderList = require('../../Models/orderList')
const Medicine = require('../../Models/medicine')





const getAllDelivery = async (req, res) => {
  try {
    const AllDelivery = await Delivery.findAll({
      include: [{
        model: Transport,
        attributes: ['transport_id'],
        include: [{
          model: Staff,
          attributes: ['name', 'phoneNumber'],
        }],
      },{
        model: Order,
        include: [{
          model: User,
          attributes: ['name', 'phoneNumber'],
        }]
      }],
      order: [[ Order ,'order_date','DESC']]
    });

    if(!AllDelivery){
      return res.status(400).json({success: true,  message: "delivery not found" });
    }

    return res.status(200).json({ success: true, delivery: AllDelivery});
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
        model: Order,
        include: [{
          model: OrderList,
          include: [{
            model: Medicine,
            attributes: ['medicine_name'],
        }],
        },{  model: User}],
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
  getAllDelivery,
  getDeliveryById
};