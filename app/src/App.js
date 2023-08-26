import { BrowserRouter, Route, Routes, } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Login from "./Pages/Login";
import StaffShift from "./Pages/Shift";
import StaffResetPassword from "./Pages/AccountRecovery/ResetPassword";
import StaffPasswordReport from "./Pages/AccountRecovery/PasswordReport";
import StaffForgotPassword from "./Pages/AccountRecovery/ForgotPassword";
import SingleStaffShift from "./Pages/SingleStaffShift";


import SupervisorDashboard from "./Pages/Supervisor/Dashboard";
import SupervisorMedicine from "./Pages/Supervisor/Medicine";
import SupervisorOrderReport from "./Pages/Supervisor/OrderReport";
import SupervisorStaff from "./Pages/Supervisor/Staff";
import SupervisorSupplier from "./Pages/Supervisor/Supplier";
import SupervisorTransport from "./Pages/Supervisor/Transport";
import SupervisorWarehouses from "./Pages/Supervisor/Warehouse/Warehouses";
import SupervisorCreateWarehouse from "./Pages/Supervisor/Warehouse/CreateWarehouse";
import SupervisorUpdateWarehouse from "./Pages/Supervisor/Warehouse/UpdateWarehouse";

import ManagerDashboard from "./Pages/Manager/Dashboard";
import ManagerMedicine from "./Pages/Manager/Medicine/Medicine";
import ManagerCreateMedicine from "./Pages/Manager/Medicine/CreateMedicine";
import ManagerUpdateMedicine from "./Pages/Manager/Medicine/UpdateMedicine";
import ManagerMedicineCategory from "./Pages/Manager/MedicineCategory/MedicineCategory";
import ManagerCreateMedicineCategory from "./Pages/Manager/MedicineCategory/CreateMedicineCategory";
import ManagerUpdateMedicineCategory from "./Pages/Manager/MedicineCategory/UpdateMedicineCategory";
import ManagerSupplier from "./Pages/Manager/Supplier/Supplier";
import ManagerCreateSupplier from "./Pages/Manager/Supplier/CreateSupplier";
import ManagerUpdateSupplier from "./Pages/Manager/Supplier/UpdateSupplier";
import ManagerTransport from "./Pages/Manager/Transport/Transport";
import ManagerCreateTransport from "./Pages/Manager/Transport/CreateTransport";
import ManagerUpdateTransport from "./Pages/Manager/Transport/UpdateTransport";
import ManagerAuditLogs from "./Pages/Manager/AuditLogs";
import ManagerDelivery from "./Pages/Manager/Delivery";
import ManagerOrderReport from "./Pages/Manager/OrderReport";
import ManagerOrders from "./Pages/Manager/orders";
import ManagerSingleOrder from "./Pages/Manager/SingleOrder";
import ManagerPasswordRequest from "./Pages/Manager/PasswordRequest";
import ManagerStaff from "./Pages/Manager/Staff";
import ManagerCreateStaff from "./Pages/Manager/Staff/CreateStaff";
import ManagerUpdateStaffInfo from "./Pages/Manager/Staff/UpdateStaffInfo";
import ManagerUser from "./Pages/Manager/User";

import OperatorDashboard from "./Pages/Operator/Dashboard";
import OperatorDelivery from "./Pages/Operator/Delivery";
import OperatorMedicine from "./Pages/Operator/Medicine";
import OperatorOrders from "./Pages/Operator/Orders";
import OperatorSingleOrder from "./Pages/Operator/SingleOrder";
import OperatorStaff from "./Pages/Operator/Staff";
import OperatorSupplier from "./Pages/Operator/Supplier";
import OperatorTransport from "./Pages/Operator/Transport";
import OperatorUser from "./Pages/Operator/User";

import LogisticDashboard from "./Pages/Logistics/Dashboard";
import LogisticsMedicine from "./Pages/Logistics/Medicine";
import LogisticsUpdateMedicine from "./Pages/Logistics/UpdateMedicine";
import LogisticsOrder from "./Pages/Logistics/Order";
import LogisticsSingleOrder from "./Pages/Logistics/SingleOrder";
import LogisticsCreateCategory from "./Pages/Logistics/CreateCategory";
import LogisticsCreateMedicine from "./Pages/Logistics/CreateMedicine";
import LogisticsUpdateMedicineCategory from "./Pages/Logistics/UpdateMedicineCategory";
import LogisticsMedicineCategory from "./Pages/Logistics/MedicineCategory";



import TransporterDelivery from "./Pages/Transporter/Delivery";
import TransporterSingleOrderDelivery from "./Pages/Transporter/SingleOrderDelivery";
import TransportDashboard from "./Pages/Transporter/Dashboard";
import Notification from "./Pages/Notification";
import SingleNotification from "./Pages/SingleNotification";

function App() { 


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Shift" element={<StaffShift/>} />
          <Route path="/ResetPassword/:id" element={<StaffResetPassword/>} />
          <Route path="/PasswordReport/:id" element={<StaffPasswordReport/>} />
          <Route path="/ForgotPassword" element={<StaffForgotPassword/>}/>
          <Route path="/StaffShift/:id" element={<SingleStaffShift/>} />  
          <Route path="/Notification" element={<Notification/>}/>  
          <Route path="/SingleNotification" element={<SingleNotification/>}/>  


         
            <Route path="/Supervisor" element={<SupervisorDashboard/>}/>
            <Route path="/Supervisor/Medicine" element={<SupervisorMedicine/>}/>
            <Route path="/Supervisor/OrderReport" element={<SupervisorOrderReport/>}/>
            <Route path="/Supervisor/Staff" element={<SupervisorStaff/>}/>
            <Route path="/Supervisor/Supplier " element={<SupervisorSupplier/>}/>
            <Route path="/Supervisor/Transport" element={<SupervisorTransport/>}/>
            <Route path="/Supervisor/Warehouse" element={<SupervisorWarehouses/>}/>
            <Route path="/Supervisor/CreateWarehouse" element={<SupervisorCreateWarehouse/>}/>
            <Route path="/Supervisor/UpdateWarehouse/:id" element={<SupervisorUpdateWarehouse/>}/>
      

   
            <Route path="/Manager" element={<ManagerDashboard/>}/>
            <Route path="/Manager/Medicine" element={<ManagerMedicine/>}/>
            <Route path="/Manager/CreateMedicine" element={<ManagerCreateMedicine/>}/>
            <Route path="/Manager/UpdateMedicine/:id" element={<ManagerUpdateMedicine/>}/>
            <Route path="/Manager/MedicineCategory" element={<ManagerMedicineCategory/>}/>
            <Route path="/Manager/CreateMedicineCategory" element={<ManagerCreateMedicineCategory/>}/>
            <Route path="/Manager/UpdateMedicineCategory/:id" element={<ManagerUpdateMedicineCategory/>}/>
            <Route path="/Manager/Supplier" element={<ManagerSupplier/>}/>
            <Route path="/Manager/CreateSupplier" element={<ManagerCreateSupplier/>}/>
            <Route path="/Manager/UpdateSupplier/:id" element={<ManagerUpdateSupplier/>}/>
            <Route path="/Manager/Transport" element={<ManagerTransport/>}/>
            <Route path="/Manager/CreateTransport" element={<ManagerCreateTransport/>}/>
            <Route path="/Manager/UpdateTransport/:id" element={<ManagerUpdateTransport/>}/>
            <Route path="/Manager/AuditLogs" element={<ManagerAuditLogs/>}/>
            <Route path="/Manager/Delivery" element={<ManagerDelivery/>}/>
            <Route path="/Manager/OrderReport" element={<ManagerOrderReport/>}/>
            <Route path="/Manager/orders" element={<ManagerOrders/>} />
            <Route path="/Manager/orders/SingleOrder/:id" element={<ManagerSingleOrder/>} />
            <Route path="/Manager/PasswordRequest" element={<ManagerPasswordRequest/>}/>
            <Route path="/Manager/Staff" element={<ManagerStaff/>}/>
            <Route path="/Manager/CreateStaff" element={<ManagerCreateStaff/>}/>
            <Route path="/Manager/UpdateStaffInfo/:id" element={<ManagerUpdateStaffInfo/>}/>
            <Route path="/Manager/User" element={<ManagerUser/>}/>
          

     
          
            <Route path="/operator" element={<OperatorDashboard/>}/>
            <Route path="/delivery" element={<OperatorDelivery/>}/>
            <Route path="/medicine" element={<OperatorMedicine/>}/>
            <Route path="/orders" element={<OperatorOrders/>}/>
            <Route path="/singleOrder" element={<OperatorSingleOrder/>}/>
            <Route path="/supplier" element={<OperatorSupplier/>}/>
            <Route path="/transport" element={<OperatorTransport/>}/>
            <Route path="/staff" element={<OperatorStaff/>}/>
            <Route path="/user" element={<OperatorUser/>} />
          

      
          {/* <Route path="/logistics" element={<LogisticDashboard/>}/>
          <Route path="/medicineCategory" element={<LogisticsMedicineCategory/>}/>
          <Route path="/medicine" element={<LogisticsMedicine/>}/>
          <Route path="/createCategory" element={<LogisticsCreateCategory/>}/>
          <Route path="/createMedicine" element={<LogisticsCreateMedicine/>}/>
          <Route path="/updateMedicineCategory" element={<LogisticsUpdateMedicineCategory/>}/>
          <Route path="/updateMedicine" element={<LogisticsUpdateMedicine/>}/>
          <Route path="/order" element={<LogisticsOrder/>}/>
          <Route path="/singleOrder" element={<LogisticsSingleOrder/>}/> */}
         


    
            {/* <Route path="/transporter" element={<TransportDashboard/>}/>
            <Route path="/delivery" element={<TransporterDelivery/>}/>
            <Route path="/SingleOrderDelivery" element={<TransporterSingleOrderDelivery/>}/> */}
          
       
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;