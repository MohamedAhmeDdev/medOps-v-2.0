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

    // Filter out orders where order_status is 'Pending'
    const filteredOrders = AllOrder.filter(order => order.order_status !== 'Pending');

   console.log(filteredOrders);
   

    return res.status(200).json({ success: true, order: filteredOrders });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};









module.exports = {
    getAllOrder,
};