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

      if (!AllOrder) {
        return res.status(404).json({ success: false, message: "order Not found"});
      }
  
      return res.status(200).json({ success: true, order: AllOrder });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
};








module.exports = {
    getAllOrder,
};