const express = require('express');
const cors = require('cors');
const app = express();


const Auth = require('./Routes/Auth');

const User = require('./Routes/User/userRoute');
const UserOrder = require('./Routes/User/orderRoute');
const UserMedicine = require('./Routes/User/medicineRoute');


const StaffShift = require('./Routes/Staff/ShiftRoute');
const StaffPasswordReport = require('./Routes/Staff/PasswordReport');


const TransportDelivery = require('./Routes/Transporter/deliveryRoute');


const LogisticSupplier = require('./Routes/Logistics/SupplierRoute');
const LogisticMedicineCategory = require('./Routes/Logistics/medicineCategoryRoute');
const LogisticMedicine = require('./Routes/Logistics/medicineRoute');
const LogisticOrder = require('./Routes/Logistics/orderRoute');


const OperatorUserStaff = require('./Routes/Operator/StaffRoute');
const OperatorUsers = require('./Routes/Operator/User');
const OperatorSupplier = require('./Routes/Operator/SupplierRoute');
const OperatorMedicineCategory = require('./Routes/Operator/medicineCategoryRoute');
const OperatorMedicine = require('./Routes/Operator/medicineRoute');
const OperatorOrder = require('./Routes/Operator/orderRoute');
const OperatorDelivery = require('./Routes/Operator/deliveryRoute');
const OperatorTransport = require('./Routes/Operator/transportRoute');

const ManagerWarehouse = require('./Routes/Manager/warehouseRoute');
const ManagerUserStaff = require('./Routes/Manager/StaffRoute');
const ManagerUsers = require('./Routes/Manager/User');
const ManagerPasswordReport = require('./Routes/Manager/PasswordReport');
const ManagerDelivery = require('./Routes/Manager/deliveryRoute');
const ManagerTransport = require('./Routes/Manager/transportRoute');
const ManagerOrderReport = require('./Routes/Manager/orderReportRoute');



app.use(express.json());
app.use(cors());

//Auth
app.use('/auth', Auth)

// //User Api
app.use('/Users', User)
app.use('/Orders', UserOrder)
app.use('/medicine', UserMedicine)

// //Staff Login 
app.use('/Shift', StaffShift)
app.use('/PasswordReport', StaffPasswordReport)



// //Transporter API
app.use('/Transport/Deliveries', TransportDelivery)

// //Logistic API
app.use('/Logistic/Suppliers',  LogisticSupplier)
app.use('/Logistic/MedicineCategories',  LogisticMedicineCategory)
app.use('/Logistic/Medicines',  LogisticMedicine)
app.use('/Logistic/Order', LogisticOrder)


// //Operator API
app.use('/Operator/UserStaffs', OperatorUserStaff)
app.use('/Operator/Users', OperatorUsers)
app.use('/Operator/Suppliers', OperatorSupplier)
app.use('/Operator/MedicinesCategory', OperatorMedicineCategory)
app.use('/Operator/Medicines', OperatorMedicine)
app.use('/Operator/Orders', OperatorOrder)
app.use('/Operator/Deliveries', OperatorDelivery)
app.use('/Operator/Transports', OperatorTransport)

// //Manager API
app.use('/Manager/Warehouse', ManagerWarehouse)
app.use('/Manager/UserStaffs', ManagerUserStaff)
app.use('/Manager/Users',  ManagerUsers)
app.use('/Manager/PasswordReport', ManagerPasswordReport)
app.use('/Manager/Deliveries', ManagerDelivery)
app.use('/Manager/Transports', ManagerTransport)
app.use('/Manager/orderReport', ManagerOrderReport)





app.listen(5000, () => console.log('Server is up and running on port 5000'));