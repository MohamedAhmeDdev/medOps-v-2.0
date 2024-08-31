const Delivery = require('../../Models/delivery')
const Order = require('../../Models/order')
const Transport = require('../../Models/transport')
const User = require('../../Models/user')
const OrderList = require('../../Models/orderList')
const Medicine = require('../../Models/medicine')


const searchDelivery = async (req, res) => {
  try {
    const { username, order_id} = req.query;

    const delivery = await Delivery.findAll({
        include: [{
           model: Transport,
          include: [{
            model: User,
            attributes: ['username'],
          }],
        },{
          model: Order,
          attributes: ['order_status', "order_id"],
          include: [{
            model: User,
            attributes: ['username'],
          }],
        }],
        order: [[{model:Order, include:[User]}, User,'username','ASC']]
    });

    const searchDelivery = delivery.filter(userDelivery =>{
        const user = userDelivery.order.user;

      if (
        (username && user.username !== String(username))||
        (order_id && userDelivery.order_id !== Number(order_id))
      ){
        return false;
      }
      return true;
    });


      if (!searchDelivery) {
        return res.status(404).json({ success: false, message: "No matching results found"});
      }

      return res.status(200).json({ success: true, delivery: searchDelivery });
    } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
   }
};



const getAllDelivery = async (req, res) => {
  try {
    const  id  = req.params.id

    const AllDelivery = await Delivery.findAll({
      include: [{
        where: { transport_id: id },
        model: Transport,
        attributes: ['transport_id'],
        include: [{
          model: User,
          attributes: ['username', 'phoneNumber'],
        }],
      },{
        model: Order,
        attributes: ['order_status', 'total_price',],
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
  searchDelivery,
  getAllDelivery,
  getDeliveryById
};