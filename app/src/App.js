import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Login from "./Pages/Login";
import StaffShift from "./Pages/Shift";
import StaffResetPassword from "./Pages/AccountRecovery/ResetPassword";
import StaffPasswordReport from "./Pages/AccountRecovery/PasswordReport";
import StaffForgotPassword from "./Pages/AccountRecovery/ForgotPassword";



import ManagerDashboard from "./Pages/Manager/Dashboard";
import ManagerMedicine from "./Pages/Manager/Medicine";
import ManagerMedicineCategory from "./Pages/Manager/MedicineCategory";
import ManagerSupplier from "./Pages/Manager/Supplier/Supplier";
import ManagerCreateSupplier from "./Pages/Manager/Supplier/CreateSupplier";
import ManagerUpdateSupplier from "./Pages/Manager/Supplier/UpdateSupplier";
import ManagerTransport from "./Pages/Manager/Transport/Transport";
import ManagerCreateTransport from "./Pages/Manager/Transport/CreateTransport";
import ManagerUpdateTransport from "./Pages/Manager/Transport/UpdateTransport";
import ManagerDelivery from "./Pages/Manager/Delivery";
import ManagerOrderReport from "./Pages/Manager/OrderReport";
import ManagerPasswordRequest from "./Pages/Manager/PasswordRequest";
import ManagerStaff from "./Pages/Manager/Staff/Staff";
import ManagerSingleStaffShift from "./Pages/Manager/Staff/SingleStaffShift";
import ManagerCreateStaff from "./Pages/Manager/Staff/CreateStaff";
import ManagerUpdateStaffInfo from "./Pages/Manager/Staff/UpdateStaffInfo";
import ManagerUser from "./Pages/Manager/User";

import OperatorDashboard from "./Pages/Operator/Dashboard";
import OperatorDelivery from "./Pages/Operator/Delivery";
import OperatorMedicine from "./Pages/Operator/Medicine";
import OperatorMedicineCategory from "./Pages/Operator/MedicineCategory";
import OperatorOrders from "./Pages/Operator/Orders";
import OperatorSingleOrder from "./Pages/Operator/SingleOrder";
import OperatorStaff from "./Pages/Operator/Staff";
import OperatorSupplier from "./Pages/Operator/Supplier";
import OperatorTransport from "./Pages/Operator/Transport";
import OperatorUser from "./Pages/Operator/User";

import LogisticDashboard from "./Pages/Logistics/Dashboard";
import LogisticsMedicine from "./Pages/Logistics/Medicine/Medicine";
import LogisticsUpdateMedicine from "./Pages/Logistics/Medicine/UpdateMedicine";
import LogisticsOrder from "./Pages/Logistics/Order";
import LogisticsSingleOrder from "./Pages/Logistics/SingleOrder";
import LogisticsCreateCategory from "./Pages/Logistics/MedicineCategory/CreateCategory";
import LogisticsCreateMedicine from "./Pages/Logistics/Medicine/CreateMedicine";
import LogisticsUpdateMedicineCategory from "./Pages/Logistics/MedicineCategory/UpdateMedicineCategory";
import LogisticsMedicineCategory from "./Pages/Logistics/MedicineCategory/MedicineCategory";



import TransporterDelivery from "./Pages/Transporter/Delivery";
import TransporterSingleOrderDelivery from "./Pages/Transporter/SingleOrderDelivery";
import TransportDashboard from "./Pages/Transporter/Dashboard";

import Notification from "./Pages/Notification";
import SingleNotification from "./Pages/SingleNotification";
import CreateNotification from "./Pages/CreateNotification";

import Medicine from "./Pages/User/Medicine";
import Cart from "./Pages/User/Cart";
import Checkout from "./Pages/User/Checkout";
import Orders from "./Pages/User/Orders";
import ProductDetail from "./Pages/User/ProductDetail";
import SingleOrder from "./Pages/User/SingleOrder";
import Profile from "./Pages/User/Profile";
import Signup from "./Pages/Signup";

import {getUserRole} from './utils/Token' 

function App() { 


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/account/signup" element={<Signup/>} />
          <Route path="/Shift" element={<StaffShift/>} />
          <Route path="/ResetPassword/:token" element={<StaffResetPassword/>} />
          <Route path="/PasswordReport/:token" element={<StaffPasswordReport/>} />
          <Route path="/ForgotPassword" element={<StaffForgotPassword/>}/>
          <Route path="/Notification" element={<Notification/>}/>  
          <Route path="/CreateNotification" element={<CreateNotification/>}/>  
          <Route path="/SingleNotification" element={<SingleNotification/>}/>  

          {getUserRole() === 'User' && (
            <>
          <Route path="/medicine" element={<Medicine/>}/>
          <Route path="/productDetail/:id" element={<ProductDetail/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/order" element={<Orders/>}/>
          <Route path="/singleOrder/:id" element={<SingleOrder/>}/>
          <Route path="/profile" element={<Profile/>}/>
             </>
          )}

            {getUserRole() === 'Manager' && (
               <>
            <Route path="/manager" element={<ManagerDashboard/>}/>
            <Route path="/medicine" element={<ManagerMedicine/>}/>
            <Route path="/medicineCategory" element={<ManagerMedicineCategory/>}/>
            <Route path="/supplier" element={<ManagerSupplier/>}/>
            <Route path="/createSupplier" element={<ManagerCreateSupplier/>}/>
            <Route path="/updateSupplier" element={<ManagerUpdateSupplier/>}/>
            <Route path="/transport" element={<ManagerTransport/>}/>
            <Route path="/createTransport" element={<ManagerCreateTransport/>}/>
            <Route path="/updateTransport" element={<ManagerUpdateTransport/>}/>
            <Route path="/delivery" element={<ManagerDelivery/>}/>
            <Route path="/orderReport" element={<ManagerOrderReport/>}/>
            <Route path="/passwordRequest" element={<ManagerPasswordRequest/>}/>
            <Route path="/staff" element={<ManagerStaff/>}/>
            <Route path="/StaffShift" element={<ManagerSingleStaffShift/>} />  
            <Route path="/createStaff" element={<ManagerCreateStaff/>}/>
            <Route path="/updateStaffInfo" element={<ManagerUpdateStaffInfo/>}/>
            <Route path="/user" element={<ManagerUser/>}/>
            </>
            )}

          {getUserRole() === 'Operator' && (
            <>
            <Route path="/operator" element={<OperatorDashboard/>}/>
            <Route path="/delivery" element={<OperatorDelivery/>}/>
            <Route path="/medicine" element={<OperatorMedicine/>}/>
            <Route path="/medicineCategory" element={<OperatorMedicineCategory/>}/>
            <Route path="/orders" element={<OperatorOrders/>}/>
            <Route path="/singleOrder" element={<OperatorSingleOrder/>}/>
            <Route path="/supplier" element={<OperatorSupplier/>}/>
            <Route path="/transport" element={<OperatorTransport/>}/>
            <Route path="/staff" element={<OperatorStaff/>}/>
            <Route path="/user" element={<OperatorUser/>} />
          </>
          )}

          {getUserRole() === 'Logistics' && (
            <>
          <Route path="/logistics" element={<LogisticDashboard/>}/>
          <Route path="/medicineCategory" element={<LogisticsMedicineCategory/>}/>
          <Route path="/medicine" element={<LogisticsMedicine/>}/>
          <Route path="/createCategory" element={<LogisticsCreateCategory/>}/>
          <Route path="/createMedicine" element={<LogisticsCreateMedicine/>}/>
          <Route path="/updateMedicineCategory" element={<LogisticsUpdateMedicineCategory/>}/>
          <Route path="/updateMedicine" element={<LogisticsUpdateMedicine/>}/>
          <Route path="/order" element={<LogisticsOrder/>}/>
          <Route path="/singleOrder" element={<LogisticsSingleOrder/>}/>
          </>
          )}

         {getUserRole() === 'Transporter' && (
            <>
              <Route path="/transporter" element={<TransportDashboard/>}/>
              <Route path="/delivery" element={<TransporterDelivery/>}/>
              <Route path="/SingleOrderDelivery" element={<TransporterSingleOrderDelivery/>}/>
          </>
         )}
       
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;