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


const OperatorStaff = require('./Routes/Operator/StaffRoute');
const OperatorUsers = require('./Routes/Operator/User');
const OperatorSupplier = require('./Routes/Operator/SupplierRoute');
const OperatorMedicineCategory = require('./Routes/Operator/medicineCategoryRoute');
const OperatorMedicine = require('./Routes/Operator/medicineRoute');
const OperatorOrder = require('./Routes/Operator/orderRoute');
const OperatorDelivery = require('./Routes/Operator/deliveryRoute');
const OperatorTransport = require('./Routes/Operator/transportRoute');


const ManagerRoles = require('./Routes/Manager/roleRoute');
const ManagerStaff = require('./Routes/Manager/StaffRoute');
const ManagerUsers = require('./Routes/Manager/User');
const ManagerPasswordReport = require('./Routes/Manager/PasswordReport');
const ManagerTransport = require('./Routes/Manager/transportRoute');
const ManagerSupplier = require('./Routes/Manager/SupplierRoute');
const ManagerMedicineCategory = require('./Routes/Manager/medicineCategoryRoute');
const ManagerMedicine = require('./Routes/Manager/medicineRoute');



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
app.use('/operator/staff', OperatorStaff)
app.use('/operator/user', OperatorUsers)
app.use('/operator/supplier', OperatorSupplier)
app.use('/operator/medicinesCategory', OperatorMedicineCategory)
app.use('/operator/medicine', OperatorMedicine)
app.use('/operator/order', OperatorOrder)
app.use('/operator/delivery', OperatorDelivery)
app.use('/operator/transport', OperatorTransport)


// //Manager API
app.use('/manager/role',  ManagerRoles)
app.use('/manager/staff', ManagerStaff)
app.use('/manager/user',  ManagerUsers)
app.use('/manager/passwordReport', ManagerPasswordReport)
app.use('/manager/transports', ManagerTransport)
app.use('/manager/supplier', ManagerSupplier)
app.use('/manager/medicineCategory', ManagerMedicineCategory)
app.use('/manager/medicine', ManagerMedicine)




app.listen(5000, () => console.log('Server is up and running on port 5000'));