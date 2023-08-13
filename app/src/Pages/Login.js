import React, { useState } from 'react';
import '../App.css'

import { SERVER_URL } from "../utils/constant/severUrl";
import axios from "axios";
import { UseAuthContext } from "../utils/Hook/StaffAuth";
import { Link, useNavigate } from 'react-router-dom';
import { showError, showAlert } from '../Component/Alert';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { dispatch } = UseAuthContext();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };


  const loginAuth = async (e) => {
    e.preventDefault();
    try {
        await axios.post(`${SERVER_URL}/Staff/login`, {
          username: username,
          password: password,
        })
        .then((response) => {
          const user = response.data.user;
          localStorage.setItem("user", JSON.stringify(user));
          dispatch({ type: "LOGIN", payload: user });

          dispatch({ type: "LOGIN", payload: user });

          const userRole = user.role;
          if (userRole === 'SUPERVISOR') {
            navigate('/Supervisor');
          } else if (userRole === 'MANAGER') {
            navigate('/Manager');
          }  else if (userRole === 'OPERATOR') {
            navigate('/Operator');
          } else if (userRole === 'LOGISTIC') {
            navigate('/Logistics');
          } else if (userRole === 'TRANSPORTER' ) {
            navigate('/Transporter');
          }
        });
      } catch (error) {
        if (error.response?.status === 400) {
          showError('Username or password is missing. Try again');
        } else if (error.response?.status === 401) {
          showAlert('Invalid login credentials. Try again');
        } else if (error.response?.status === 403) {
          showAlert('Unauthorized');
        }
      }
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-image">
    <div className="bg-gray-800 shadow-md rounded w-96 p-6 bg-opacity-50">
      <form onSubmit={loginAuth}>
        <div className="mb-2">
          <label className="block text-gray-200 text-md lg:text-md font-bold mb-2" htmlFor="username"> Username</label>
          <input className="shadow appearance-none text-md lg:text-md border rounded w-full py-3 px-3 border-none bg-opacity-75 bg-gray-600 text-gray-200 leading-tight focus:outline-none focus:shadow-outline" 
            value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" 
          />
        </div>
        
        <div className="mb-3 relative">
            <label className="block text-gray-200 text-md lg:text-md font-bold mb-2" htmlFor="password">Password</label>
            <div className="flex items-center">
              <input
                className="shadow appearance-none text-md lg:text-md border rounded w-full py-3 px-3 border-none  bg-opacity-75 bg-gray-600 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Password"
                type={passwordVisible ? 'text' : 'password'}
              />
              <div className="absolute top-16 right-3 transform -translate-y-1/2 cursor-pointer" onClick={togglePasswordVisibility}>
                {passwordVisible ? <span class="material-symbols-outlined">visibility</span> : <span class="material-symbols-outlined">visibility_off</span>}
              </div>
            </div>
          </div>

            <div className="flex items-center justify-between">
            <button className="bg-blue-500 text-white font-bold text-5 py-2 px-5 rounded-sm focus:outline-none focus:shadow-outline border-none shadow-md" type="submit">
              login
            </button>
              <Link to="/ForgotPassword" className="text-gray-400 hover:text-white text-lg">Forgot Password? </Link>
            </div>
      </form>
    </div>
  </div>
  )
}

export default Login