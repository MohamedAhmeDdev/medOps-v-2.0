import React, { useState } from 'react';
import '../App.css'
import { SERVER_URL } from "../utils/constant/severUrl";
import axios from "axios";
import { UseAuthContext } from "../utils/Hook/StaffAuth";
import { Link, useNavigate } from 'react-router-dom';
import { getUserInfo } from "../utils/Token";
import { useNotification } from '../utils/context/NotificationContext';


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { dispatch } = UseAuthContext();
  const navigate = useNavigate();
  const userInfo = getUserInfo();
  const role = userInfo ? userInfo.role : null;
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const { showErrorNotification } = useNotification();
  const [successMessage, setSuccessMessage] = useState("");


  const loginAuth = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${SERVER_URL}/auth/login`, {
        username: username,
        password: password,
      });
      if (response.status === 200) {
        const user = response.data.user;
        localStorage.setItem('user', JSON.stringify(user));
        dispatch({ type: 'LOGIN', payload: user });
  
        // Set success message here before navigating
        setSuccessMessage('User Authenticated.');
  
        setTimeout(() => {
          // Navigate after a delay
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
            case 'Transport':
              navigate('/transporter');
              break;
            default:
              // Handle unknown roles or provide a default route
              navigate('/');
          }
        }, 5000);
      }
    } catch (error) {
      if (error.response?.status === 400) {
        showErrorNotification('Username or password is missing. Try again');
      } else if (error.response?.status === 410) {
        showErrorNotification('Invalid login credentials. Try again');
      } else if (error.response?.status === 401) {
        showErrorNotification('Incorrect Password');
      } else if (error.response?.status === 403) {
        showErrorNotification('Unauthorized');
      }
      setSuccessMessage('');
    }
  };
  


  return (
    <div className='flex justify-center items-center min-h-screen bg-image'> 
      <div className="space-y-3">
          {( successMessage) && (
                <div className={`p-3 rounded-lg mt-2 mx-2 ${  "text-green-500 text-center bg-white"}`} >
                  {successMessage}
                </div>
            )}
        <div className="bg-gray-800 shadow-md rounded w-96 p-6 bg-opacity-50">
          <form onSubmit={loginAuth}>
            <div className="mb-2  w-72 mx-auto">
              <label className="block text-gray-200 text-md lg:text-md font-bold mb-2" htmlFor="username"> Username</label>
              <input className="shadow appearance-none text-md lg:text-md border round w-full py-2 px-3 border-none  bg-opacity-75 bg-gray-600 text-gray-200 focus:shadow-outline focus:outline-blue-400 focus:outline outline-offset-2 outline-2" 
                value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" 
              />
            </div>
            
            <div className="mb-3 relative w-72 mx-auto">
                <label className="block text-gray-200 text-md lg:text-md font-bold mb-2" htmlFor="password">Password</label>
                <div className="flex items-center">
                  <input className="shadow appearance-none text-md lg:text-md border round w-full py-2 px-3 border-none  bg-opacity-75 bg-gray-600 text-gray-200 focus:shadow-outline focus:outline-blue-400 focus:outline outline-offset-2 outline-2" 
                    value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Password" type={passwordVisible ? 'text' : 'password'}
                  />
                  <div className="absolute top-14 right-3 transform -translate-y-1/2 cursor-pointer" onClick={togglePasswordVisibility}>
                    {passwordVisible ? <span className="material-symbols-outlined">visibility</span> : <span className="material-symbols-outlined">visibility_off</span>}
                  </div>
                </div>
            </div>

             <div className="flex items-center justify-between">
                  <button className="bg-blue-500 text-white font-bold text-5 py-2 px-5 rounded-sm focus:outline-none focus:shadow-outline border-none shadow-md" type="submit">
                    login
                  </button>
                  <div className='flex-col'>
                    <div><Link to="/ForgotPassword" className="text-gray-400 hover:text-white text-sm">Forgot Password?</Link></div>
                    <div><Link to="/account/signup" className="text-gray-400 hover:text-white text-sm">signUp?</Link></div>
                  </div>
            </div>
          </form>
        </div>
      </div>
  </div>
  )
}

export default Login