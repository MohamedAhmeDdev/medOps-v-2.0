const OrderReport = require('../../Models/orderReportModel')
const Order = require('../../Models/orderModel')
const OrderList = require('../../Models/orderListModel')
const Medicine = require('../../Models/medicineModel')
const moment = require('moment');
const cron = require('node-cron');
const {Op} = require('sequelize')




const generateOrderReport = async () => {
  try {
    const currentDate = new Date();
    const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay() + 1);
    const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay() + 5);


    const orders = await Order.findAll({
      where: {order_date:{[Op.between]: [startDate, endDate]},},
      include: [{
         model: OrderList,
         include: [{
            model: Medicine,
            attributes: ['medicine_name'],
          }],
      }],
    });

    if (!orders || orders.length === 0) {
      console.log("No orders found for the week");
    }

    const reportData = [];
    orders.forEach((order) => {
      order.orderLists.forEach((orderList) => {
        const existingMedicine = reportData.find((data) => data.medicine_name === orderList.Medicine.medicine_name);

        if (existingMedicine) {
          existingMedicine.quantity_sold += orderList.quantity;
          existingMedicine.total_sale += orderList.price;
        } else {
          reportData.push({
            medicine_name: orderList.Medicine.medicine_name,
            quantity_sold: orderList.quantity,
            total_sale: orderList.price,
            warehouse_id: order.warehouse_id,
            startDate:  startDate,
            endDate: endDate
          });
        }
      });
    });

    await OrderReport.bulkCreate(reportData);

    console.log('order report generated successfully.');
  } catch (error) {
    console.log('An error occurred during generating report.', error);
  }
};


// Schedule the report generation to occur every Saturday at 00:00 (midnight)
cron.schedule('0 0 * * 6', () => {
  generateOrderReport();
});




const searchForReport = async (req, res) => {
  const {	medicine_name, fromDate, toDate } = req.query; 

  try {
        const orderReport = await OrderReport.findAll({
        order: [['startDate', 'ASC']]
      });

      const searchOrder = orderReport.filter((report) => {
        if(
          (medicine_name && report.medicine_name !== medicine_name) ||
          (fromDate && report.startDate.toISOString().split('T')[0] !== fromDate) 
          (toDate && report.startDate.toISOString().split('T')[0] !== toDate) 
        ) {
          return false;
        }
        return true;
      });

    if (searchOrder.length === 0) {
      return res.status(404).json({ success: false, message: "No matching results found" });
    }

    return res.status(200).json({ success: true, orderReport: searchOrder });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};


 
const getOderReport = async (req, res) => {
  try {
    const orderReport = await OrderReport.findAll({
     order: [['startDate', 'ASC']]
  });

    if (orderReport.length === 0) {
      return res.status(404).json({ success: false, message: "Report Not found"});
    }

    return res.status(200).json({ success: true, orderReport: orderReport });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
 
module.exports = {
    searchForReport,
    getOderReport
};
  
 