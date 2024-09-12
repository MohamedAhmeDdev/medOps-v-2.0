const Order = require('../../Models/order')
const OrderList = require('../../Models/orderList')
const User = require('../../Models/user')
const Medicine = require('../../Models/medicine')


const createOrder = async (req, res) => {
  const user_id = req.user.user_id;

  
    const { medicineOrders } = req.body;
    if (!user_id || !medicineOrders) {
      return res.status(400).json({ success: false, message: "All Fields Are Required" });
    }
  
    try {   
      // for (const medicine of medicineOrders) {
      //   const findMedicine = await Medicine.findOne({where:{medicine_id:medicine.medicine_id }});
      //   if (findMedicine.total_quantity <= 100) {
      //     return res.status(400).json({ success: false, message: "Total quantity is less than 100" });
      //   }
      // }
      const total_price = medicineOrders.reduce((acc,medicineOrders) => {  return acc + medicineOrders.quantity * medicineOrders.price},0);
  
      
      const order = await Order.create({
        user_id: user_id,
        total_price: total_price,
        order_status: "Pending",
        order_date: new Date(),
      });

      let order_id = order.order_id
      const orderListData = medicineOrders.map((order) => {
        return {
          order_id: order_id,
          medicine_id: order.medicine_id,
          quantity: order.quantity,
          price: order.price,
        };
      });
      const orderList = await OrderList.bulkCreate(orderListData);
      
      const updateQuantity = medicineOrders.map(async (medicine) => {
      const medicine_id = medicine.medicine_id;
      const quantity = medicine.quantity;
      const findMedicine = await Medicine.findOne({ where: { medicine_id: medicine_id } });
            
      const updatedQuantity = findMedicine.total_quantity - quantity;
      await findMedicine.update({ total_quantity: updatedQuantity });
    });
    
      return res.status(200).json({ success: true, order, orderList });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};
  


const getOrderForSingleUser = async (req, res) => {
  try {
    const user_id = req.user.user_id;
    const AllOrder = await Order.findAll({
      where: { user_id },
      include:[{
          model: User,
          attributes: ['name', 'address', 'phoneNumber'],
      }],
      order: [['createdAt', 'DESC']],
    });
    if (!AllOrder) {
      return res.status(404).json({ success: false, message: "Order not found"});
    }

    return res.status(200).json({ success: true, order: AllOrder });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};



const getOrderById = async (req, res) => { 
  const {id } = req.params;
try {
  const orderById = await Order.findOne({
    where: { order_id: id },
    include: [{
      model: OrderList,
      include: [{
        model: Medicine,
        attributes: ['medicine_name'],
    }],
    },{
        model: User,
        attributes: ['name', 'address', 'phoneNumber', 'email'],
    }],
  });
  if (!orderById) {
    return res.status(404).json({ success: false, message: "Order not found"});
  }

  return res.status(200).json({ success: true, order: orderById });
} catch (error) {
  return res.status(500).json({ success: false, message: error.message });
}
};
 

const UpdateOrderStatus = async (req, res) => {
  const { id }  = req.params;
  const { order_status } = req.body;

  try {

    const order = await Order.findOne({ where: { order_id: id } });
    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found"})
    }
   const updateOrder = await Order.update({ order_status: order_status}, { where: { order_id: id } });

    return res.status(200).json({ success: true, order: updateOrder, });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message});
  }
};



const deleteOrderById = async (req, res) => {
    const id = req.params.id
    try {
      const order = await Order.findOne({ where: { order_id: id } });
      if (!order) {
        return res.status(404).json({ success: false, message: "Order not found" });
      }
      let order_id = order.order_id
      const orderLists = await OrderList.findAll({ where: { order_id: order_id } });

      const orderListIds = orderLists.map((orderList) => orderList.order_list_id);

      await OrderList.destroy({ where: { order_list_id: orderListIds } });
      await Order.destroy({ where: { order_id: id } });
  
      return res.status(200).json({ success: true, message: "Order deleted" });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
};
  




module.exports = {
    createOrder,
    getOrderForSingleUser,
    getOrderById,
    UpdateOrderStatus,
    deleteOrderById
};