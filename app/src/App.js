import { BrowserRouter, Route, Routes, } from "react-router-dom";
import { lazy } from 'react';
import Login from "./Pages/Login";
import StaffResetPassword from "./AccountRecovery/ResetPassword";
import StaffPasswordReport from "./AccountRecovery/PasswordReport";
import StaffForgotPassword from "./AccountRecovery/ForgotPassword";

import Medicine from "./Pages/User/Medicine";
import Cart from "./Pages/User/Cart";
import Checkout from "./Pages/User/Checkout";
import Orders from "./Pages/User/Orders";
import ProductDetail from "./Pages/User/ProductDetail";
import SingleOrder from "./Pages/User/SingleOrder";

import UserLogin from "./Pages/User/Auth/UserLogin";
import Signup from "./Pages/User/Auth/Signup";
import UserForgotPassword from "./Pages/User/Auth/UserForgotPassword";
import UserResetPassword from "./Pages/User/Auth/UserResetPassword";

const Layout = lazy(() => import('./Manager/containers/Layout'))



function App() { 
 




  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLogin/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/userForgotPassword" element={<UserForgotPassword/>} />
          <Route path="/userResetPassword/:token" element={<UserResetPassword/>} />
          <Route path="/medicine" element={<Medicine/>}/>
          <Route path="/productDetail/:id" element={<ProductDetail/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/order" element={<Orders/>}/>
          <Route path="/singleOrder/:id" element={<SingleOrder/>}/>

          
          <Route path="/auth" element={<Login/>} />
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