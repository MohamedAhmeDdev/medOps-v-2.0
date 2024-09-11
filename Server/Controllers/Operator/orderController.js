const Order = require('../../Models/order')
const User = require('../../Models/user')







const getAllOrder = async (req, res) => {
  try {
    const AllOrder = await Order.findAll({
      include: [{
        model: User,
        attributes: ['name', 'phoneNumber'],
      }],
      order: [['createdAt', 'DESC']],
    });

    const filteredOrders = AllOrder.filter(order => order.order_status === 'Packed' );  

    return res.status(200).json({ success: true, order: filteredOrders });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};









module.exports = {
    getAllOrder,
};