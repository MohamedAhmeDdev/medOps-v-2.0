const Delivery = require('../../Models/deliveryModel')
const Order = require('../../Models/orderModel')
const Transport = require('../../Models/transportModel')
const User = require('../../Models/userModel')
const cron = require('node-cron');
const {Op} = require('sequelize')



const assignOrderToTransport = async (res) => {
  try {
    const packedOrders = await Order.findAll({where:{order_status:'Packed'},
      include: [{
          model: User,
          attributes: ['address'],
        }],
    });
    if (!packedOrders || packedOrders.length === 0) {
      console.log("No packed orders available for assignment");
      return;
    }

    const packedOrderIds = packedOrders.map((order) => order.order_id);
    const assignedDeliveries = await Delivery.findAll({where:{order_id:packedOrderIds },attributes:['order_id']});
    const assignedOrderIds = assignedDeliveries.map((delivery) => delivery.order_id);

    const deliveriesToCreate = [];
    const availableTransports = await Transport.findAll({where:{status:'Available'},
    });
    if (!availableTransports || availableTransports.length === 0) {
      console.log("No available transports for assignment");
      return;
    }

    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const today = new Date();
    const currentDay = weekdays[today.getDay() - 1]; // Get the current day of the week

    availableTransports.forEach((transport) => {
      transport.ordersCount = 0; // Reset the ordersCount for each transport at the start of a new day
    });
    const ordersPerTransport = 10;

    for (const transport of availableTransports) {
      if (transport.ordersCount >= ordersPerTransport) {
        console.log(`Transport ${transport.transport_id} has reached the maximum limit of 10 orders for the day`);
        continue;
      }

      for (const packedOrder of packedOrders) {
        if (assignedOrderIds.includes(packedOrder.order_id)) {
          continue;
        }

        const deliveryData = {
          order_id: packedOrder.order_id,
          transport_id: transport.transport_id,
          delivery_address: packedOrder.user.address,
          delivery_date: today,
          delivery_status: 'On Route',
        };

        deliveriesToCreate.push(deliveryData);
          console.log(
          `Order ${packedOrder.order_id} assigned to Transport ${transport.transport_id}`
        );

        transport.ordersCount++;
        if (transport.ordersCount >= ordersPerTransport) {
          console.log(`Transport ${transport.transport_id} has reached the maximum limit of 10 orders for the day`);
          break;
        }
      }
    }
    if (deliveriesToCreate.length > 0) {
      try {
        await Delivery.bulkCreate(deliveriesToCreate);
        console.log('Deliveries created successfully.');
      } catch (error) {
        console.log('Error creating deliveries:', error);
      }
    } else {
      console.log('No deliveries to create.');
    }
    console.log('Orders assigned to transports successfully.');
  } catch (error) {
    console.log('An error occurred during assignment.', error);
  }
};

const performOrderAssignment = () => {
  assignOrderToTransport()
    .then(() => {
      console.log('Order assignment completed successfully.');
    })
    .catch((error) => {
      console.log('Error during order assignment:', error);
    });
};

const automaticOrderAssignment = () => {
  const now = new Date();
  const targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 5, 0, 0);
  if (targetTime < now) {
    targetTime.setDate(targetTime.getDate() + 1); // Move the target time to the next day if it has already passed
  }
  // Calculate the time difference between now and the target time
  const timeToWait = targetTime - now;

  setTimeout(() => {
    performOrderAssignment();
    setInterval(performOrderAssignment, 24 * 60 * 60 * 1000);
  }, timeToWait);
};
automaticOrderAssignment();





const getAllDelivery = async (req, res) => {
  try {
    const  id  = req.params.id

    const AllDelivery = await Delivery.findAll({
      include: [{
        where: { transport_id: id },
        model: Transport,
        attributes: ['transport_id'],
        include: [{
          model: User,
          attributes: ['username', 'phoneNumber'],
        }],
      },{
        model: Order,
        attributes: ['order_status', 'total_price',],
      }],
      order: [[ Order ,'order_date','DESC']]
    });
  
    if(!AllDelivery){
      return res.status(400).json({success: true,  message: "delivery not found" });
    }

    return res.status(200).json({ success: true, delivery: AllDelivery});
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};



const deleteDeliveries = async () => {
  try {
    const currentDate = new Date();
    const previousMonth = currentDate.getMonth() - 2;
    const year = currentDate.getFullYear();
    const startDate = new Date(year, previousMonth, 1);
    const endDate = new Date(year, previousMonth + 1, 0);

    await Delivery.destroy({
      where:{delivery_date:{[Op.between]:[startDate, endDate]}},
    });

    console.log('Orders deleted successfully on the 2nd day of the month.');
  } catch (error) {
    console.log('An error occurred during deleting order:', error);
  }
};

cron.schedule('0 0 2 * *', () => {
  deleteDeliveries();
});



module.exports = {
  getAllDelivery,
};