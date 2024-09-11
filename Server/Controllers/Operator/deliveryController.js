const Delivery = require('../../Models/delivery')
const Order = require('../../Models/order')
const Transport = require('../../Models/transport')
const Staff = require('../../Models/staff')
const User = require('../../Models/user')
const OrderList = require('../../Models/orderList')
const Medicine = require('../../Models/medicine')



const assignOrders = async (req, res) => {
  const { staff_id, orders } = req.body;

  try {
    const transport = await Transport.findOne({ where: { staff_id } });

    if (!transport) {
      return res.status(404).json({ success: false, message: 'Transport not found' });
    }


    const deliveries = orders.map(order => ({
      order_id: order,
      transport_id: transport.transport_id,
      delivery_status: 'Pending',
      delivery_date: new Date(),
    }));

 
    const createdDeliveries = await Delivery.bulkCreate(deliveries);

   
    await Promise.all(orders.map(orderId =>
      Order.update({ order_status: 'Assigned' }, { where: { order_id: orderId } })
    ));

    return res.status(200).json({
      success: true,
      message: 'Orders assigned',
      deliveries: createdDeliveries,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({ success: false, message: error.message });
  }
};





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
      order: [[ Order ,'order_date','ASC']]
    });

    if(!AllDelivery){
      return res.status(400).json({success: true,  message: "delivery not found" });
    }

    const filteredDelivery = AllDelivery.filter(status => status.delivery_status === 'Pending' );  

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
  assignOrders,
  getAllDelivery,
  getDeliveryById
};