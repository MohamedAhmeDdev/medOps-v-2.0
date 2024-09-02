const Order = require('../../Models/order')
const OrderList = require('../../Models/orderList')
const User = require('../../Models/user')
const Medicine = require('../../Models/medicine')







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
        attributes: ['name', 'address', 'phoneNumber'],
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
    getAllOrder,
    getOrderById,
};