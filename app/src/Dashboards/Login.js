import React, { useState } from 'react';
import '../App.css'
import { SERVER_URL } from "../constant/severUrl";
import axios from "axios";
import { UseAuthContext } from "../Hook/StaffAuth";
import { Link, useNavigate } from 'react-router-dom';
import { getUserInfo } from "../utils/Token";
import { useNotification } from '../context/NotificationContext';


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = UseAuthContext();
  const navigate = useNavigate();
  const userInfo = getUserInfo();
  const role = userInfo ? userInfo.role : null;
  const { showErrorNotification , showSuccessNotification } = useNotification();



  const loginAuth = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${SERVER_URL}/staffAuth/login`, {
        name: username,
        password: password,
      })
      .then((response) => {      
        const user = response.data.staff;
        localStorage.setItem('user', JSON.stringify(user));
        dispatch({ type: 'LOGIN', payload: user });        
        showSuccessNotification(response.data.message);

        setTimeout(() => {
          switch (role) {
            case 'User':
              navigate('/medicine');
              break;
            case 'Manager':
              navigate('/manager');
              break;
            case 'Operator':
              navigate('/operator');
              break;
            case 'Logistics':
              navigate('/logistics');
              break;
            case 'Transporter':
              navigate('/transporter');
              break;
            default:
              navigate('/');
          }
        }, 5000);
      });
    } catch (error) {
      showErrorNotification(error.response.data.message);
    }
  };
  


  return (
    <div className='bg-image'>        
      <div class='flex items-center  justify-center min-h-screen'>
        <form  onSubmit={loginAuth} class='w-full    max-w-lg mx-5 md:mx-0 px-10 py-8  bg-zinc-900 bg-opacity-90 shadow-2xl'>
            <div class='max-w-md mx-auto space-y-3'>
                <h3 class="text-lg text-white font-bold text-center uppercase">login to account</h3>                
                <div>
                    <label class="text-white font-bold block py-1">Username</label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" class="shadow appearance-none text-md lg:text-md border round w-full py-2 px-3 border-none  bg-opacity-75 bg-zinc-700 text-white focus:shadow-outline focus:outline-zinc-500 focus:outline outline-offset-2 outline-2"/>
                </div>
                <div>
                    <label class="text-white font-bold block py-1">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" class="shadow appearance-none text-md lg:text-md border round w-full py-2 px-3 border-none  bg-opacity-75 bg-zinc-700 text-white focus:shadow-outline focus:outline-zinc-500 focus:outline outline-offset-2 outline-2"/>
                </div>
                <div class="flex flex-row justify-end mb-8">
                  <Link to="/ForgotPassword" class="mr-4 text-sm font-medium text-white">Forget password?</Link>
               </div>
                <div class="flex gap-3 pt-3 justify-center items-center">
                    <button class="border px-5 py-2 rounded-lg shadow ring-1 text-white ring-inset">Login</button>
                </div>
            </div>
        </form>
    </div>
  </div>
  )
}

export default Login