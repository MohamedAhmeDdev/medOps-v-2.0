const searchForStaff = async (req, res) => {
    const today = new Date();
  const shiftDate = today.toISOString().split('T')[0];
  try {
    const { username, phoneNumber, email,  } = req.query;
    const users = await User.findAll({ order: [['username', 'ASC']],
    include: [{
      model: ShiftLogs,
      attributes: ['shift_status', 'start_time', 'end_time', 'Date'],
      where: {Date: shiftDate,},
      required: false,
    },{
        model: StaffWarehouse,
         attributes: ['account_status'],
      }],
    });

    const searchStaff = users.filter(user => {
      if (
        (username && user.username !== String(username)) ||
        (phoneNumber && user.phoneNumber !== Number(phoneNumber)) ||
        (email && user.email !== String(email))
      ){
        return false;
      }
      return true;
    });


    if (!searchStaff) {
      return res.status(404).json({ success: false, message: "No matching results found"});
    }

    return res.status(200).json({ success: true, user: searchStaff });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};



const searchForSupplier = async (req, res) => {
  try {
    const { company_name, contact_person, email, phone, } = req.query;

    const supplier = await Supplier.findAll({ order: [['company_name', 'ASC']],});
    const searchSupplier = supplier.filter((supplier) => {
      if (
        (company_name && supplier.company_name !== String(company_name)) ||
        (contact_person && supplier.contact_person !== String(contact_person)) ||
        (email && supplier.email !== String(email)) ||
        (phone && supplier.phone !== Number(phone))
      ) {
        return false;
      }
      return true;
    });

  if (!searchSupplier) {
    return res.status(404).json({ success: false, message: "No matching results found"});
  }

    return res.status(200).json({ success: true, supplier: searchSupplier });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};



const searchForTransport = async (req, res) => {
  try {
    const {status } = req.query;

    const transport = await Transport.findAll({
      include: [{
        model: User,
        attributes: ['username', 'email'],
      }],
      order: [[User, 'username', 'ASC']],
      });

      const searchTransport = transport.filter((transport) => {
        if (
          (status && transport.status !== status) 
        ) {
          return false;
        }
        return true;
      });
    
    if (!searchTransport) {
        return res.status(404).json({success: false, message: "No matching results found"});
    }

    return res.status(200).json({ success: true, transport: searchTransport });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};


const searchApi = async (req, res) => {
  try {
    const { medicine_name,  medicine_category, barcode, aisle, date_supplied, expiry_date } = req.query;

    const medicines = await Medicine.findAll({
      include: [{
        model: MedicineCategory,
      },{
        model: Supplier,
      }],
      order: [['medicine_name', 'ASC']],
    });
    const searchMedicine = medicines.filter(medicine => {
      if (
        // If the condition evaluates to true exists and the medicine.medicine_name is not equal n this case, the filter function will return false
        (medicine_name && medicine.medicine_name !== String(medicine_name)) ||
        (medicine_category && medicine.medicineCategory.medicine_category  !== String(medicine_category)) ||
        (barcode && medicine.barcode !== Number(barcode)) ||
        (aisle && medicine.aisle !== Number(aisle)) ||
        (date_supplied && medicine.date_supplied.toISOString().split('T')[0] !== date_supplied) ||
        (expiry_date && medicine.expiry_date.toISOString().split('T')[0] !== expiry_date)
      ) {
        return false;
      }
      return true;
    });
 
    if (searchMedicine.length === 0) {
      return res.status(404).json({ success: false, message: "No matching results found"});
    }

    return res.status(200).json({ success: true, medicine: searchMedicine });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};






//search for user
const searchForUser = async (req, res) => {
  try {
    const { username, email } = req.query;

    const users = await User.findAll({order: [['username', 'ASC']]});
    const searchUser = users.filter(user => {
  if (
    (username && user.username !== String(username)) ||
    (email && user.email !== String(email))
  ){
    return false;
  }
  return true;
 });

  const getOnlyUsers = searchUser.filter((user) => user.role === "USER");
  if (getOnlyUsers.length === 0) {
   return res.status(404).json({success: false, message: "No matching results found"});
 }

    return res.status(200).json({ success: true, user: getOnlyUsers });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};





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






const searchDelivery = async (req, res) => {
  try {
    const { username, order_id} = req.query;

    const delivery = await Delivery.findAll({
        include: [{
           model: Transport,
          include: [{
            model: User,
            attributes: ['username'],
          }],
        },{
          model: Order,
          attributes: ['order_status', "order_id"],
          include: [{
            model: User,
            attributes: ['username'],
          }],
        }],
        order: [[{model:Order, include:[User]}, User,'username','ASC']]
    });

    const searchDelivery = delivery.filter(userDelivery =>{
        const user = userDelivery.order.user;

      if (
        (username && user.username !== String(username))||
        (order_id && userDelivery.order_id !== Number(order_id))
      ){
        return false;
      }
      return true;
    });


      if (!searchDelivery) {
        return res.status(404).json({ success: false, message: "No matching results found"});
      }

      return res.status(200).json({ success: true, delivery: searchDelivery });
    } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
   }
};