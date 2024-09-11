const Delivery = require('../../Models/delivery')
const Order = require('../../Models/order')
const OrderList = require('../../Models/orderList')
const Medicine = require('../../Models/medicine')
const Transport = require('../../Models/transport')
const User = require('../../Models/user')






const getDeliveryForSingleTransport = async (req, res) => { 
  const staff_id = req.user.staff_id;  

  try {
    const delivery = await Delivery.findAll({
      include: [{
        where: { staff_id },
        model: Transport,
        attributes: ['staff_id'],
      },{
        model: Order,
        include: [{
          model: User,
        }]
      }],
      order: [[ Order ,'order_date','ASC']]
    });

    if(!delivery){
      return res.status(200).json({success: true,  message: "transport not found" });
    }

    const filteredDelivery = delivery.filter(status => status.delivery_status !== 'Delivered' );  

    return res.status(200).json({ success: true, delivery: filteredDelivery});
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


const OrderDelivered =  async (req, res) => {
  const  order_id   = req.params.id;


  const order = await Order.findOne({ where: { order_id: order_id } });
  if (!order) {
    return res.status(404).json({ success: false, message: 'order not found' });
  }
  

  try {  
    const UpdateOrder = Order.update({
     order_status: 'Delivered'
     },{where: {order_id: order_id} });

     const UpdateDelivery = Delivery.update({
      delivery_status: 'Delivered'
      },{where: {order_id: order_id} });

     return res.status(200).json({
      success: true,
      message: "Status updated",
      UpdateOrder,
      UpdateDelivery
    });

  } catch (error) {
      return res.status(500).json({ success: false, message: error.message});
  }
}



module.exports = {
  getDeliveryForSingleTransport,
  getDeliveryById,
  OrderDelivered
};