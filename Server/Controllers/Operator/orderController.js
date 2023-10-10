const Order = require('../../Models/orderModel')
const OrderList = require('../../Models/orderListModel')
const User = require('../../Models/userModel')
const Medicine = require('../../Models/medicineModel')




const searchForOrder = async (req, res) => {
    try {
      const { username, email, order_status, order_id } = req.query; 
  
      const order = await Order.findAll({
        include: [{
            model: OrderList,
            include: [{
              model: Medicine,
              attributes: ['medicine_name'],
          }],
          },{
              model: User,
              attributes: ['username','address','phoneNumber'],
          }],
          order: [[User, 'username', 'ASC']],
        });
  
        const searchOrder = order.filter((order) => {
            const user = order.user;
          if (
            (username && user.username !== String(username)) ||
            (email && user.email !== String(email)) ||
            (truck_number && user.truck_number !== String(truck_number)) ||
            (order_id && order.order_id !== Number(order_id)) ||
            (order_status && order.order_status !== order_status)
          ) {
            return false;
          }
          return true;
        });
      
      if (!searchOrder) {
        return res.status(404).json({ success: false, message: "No matching results found" });
      }
  
      return res.status(200).json({ success: true, order: searchOrder });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
};




const getAllOrder = async (req, res) => {
    try {
      const AllOrder = await Order.findAll({
        include: [{
            model: User,
            attributes: ['username', 'phoneNumber'],
        }],
        order: [['createdAt', 'DESC']],
      });

      if (!AllOrder) {
        return res.status(404).json({ success: false, message: "order Not found"});
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
        order: [[ 'medicine_name', 'ASC']],
    }],
    },{
        model: User,
        attributes: ['username', 'address', 'phoneNumber'],
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
 



module.exports = {
    searchForOrder,
    getAllOrder,
    getOrderById,
};