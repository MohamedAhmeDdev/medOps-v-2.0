import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Login from "./Pages/Login";
import StaffShift from "./Pages/Shift";
import StaffResetPassword from "./AccountRecovery/ResetPassword";
import StaffPasswordReport from "./AccountRecovery/PasswordReport";
import StaffForgotPassword from "./AccountRecovery/ForgotPassword";
import { lazy } from 'react';

import Signup from "./Pages/Signup";
const Layout = lazy(() => import('./Manager/containers/Layout'))



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

          <Route path="/manager/*" element={<Layout />} />
       
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;