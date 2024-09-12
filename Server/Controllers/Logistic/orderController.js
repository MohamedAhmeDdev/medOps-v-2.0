const Order = require('../../Models/order')
const OrderList = require('../../Models/orderList')
const User = require('../../Models/user')
const Medicine = require('../../Models/medicine')






const getAllOrder = async (req, res) => { 
    try {
      const AllOrder = await Order.findAll({
        include: [{
            model: User,
        }],
        order: [[ 'order_date','ASC']]
      });
   
      if (!AllOrder) {
        return res.status(404).json({ success: false, message: "order Not found"});
      }

      const filteredOrder = AllOrder.filter(status => status.order_status === 'Pending' );  
  
      return res.status(200).json({ success: true, order: filteredOrder });
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
 


const UpdateOrderStatus = async (req, res) => {
    const { id }  = req.params;
    const { order_status } = req.body;

    try {

      const order = await Order.findOne({ where: { order_id: id } });
      if (!order) {
        return res.status(404).json({ success: false, message: "Order not found"})
      }
     const updateOrder = await Order.update({ order_status }, { where: { order_id: id } });

      return res.status(200).json({
          success: true,
          message: "Order Updated",
          order: updateOrder,
         });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message});
    }
};





module.exports = {
    getAllOrder,
    getOrderById,
    UpdateOrderStatus,
};