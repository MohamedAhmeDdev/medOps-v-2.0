import React, { useState } from 'react';
import { SERVER_URL } from "../../../constant/severUrl";
import axios from "axios";
import { UseAuthContext } from "../../../Hook/StaffAuth";
import { useNavigate } from 'react-router-dom';
import { useNotification } from '../../../context/NotificationContext';

function UserLogin() {
  document.title = 'SignIp | MedOps';
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { showErrorNotification , showSuccessNotification } = useNotification();
  const { dispatch } = UseAuthContext();
  const navigate = useNavigate();




  const userAuth = async (e) => {
    e.preventDefault();
  
    try {
      await axios.post(`${SERVER_URL}/auth/login`, {
        name: username,
        password: password,
      }).then((response) => {
        const user = response.data.user;
        localStorage.setItem("user", JSON.stringify(user));
         dispatch({ type: "LOGIN", payload: user });
         showSuccessNotification(response.data.message);
         setTimeout(() => {
          navigate('/medicine');
          }, 2000); 
      });
    } catch (error) {
      showErrorNotification(error.response.data.message);
    }
  };
  

  return (

    <div class="bg-gray-50 font-[sans-serif]">  
      <div class="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div class="max-w-md w-full">
        <h1 className='text-center font-bold text-3xl'>MedOps</h1>
          <div class="p-8 bg-white shadow">
            <h2 class="text-gray-800 text-center text-2xl font-bold">Sign in</h2>
            <form onSubmit={userAuth} class="mt-8 space-y-4">
              <div>
                <label class="text-gray-800 text-sm mb-2 block">User name</label>
                <div class="relative flex items-center">
                  <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-300" placeholder="Enter user name" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                    <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                    <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                  </svg>
                </div>
              </div>

              <div>
                <label class="text-gray-800 text-sm mb-2 block">Password</label>
                <div class="relative flex items-center">
                  <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-300" placeholder="Enter password" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                  </svg>
                </div>
              </div>

              <div class="flex flex-wrap items-center justify-end gap-4">
                
                <div class="text-sm">
                  <a href="/userForgotPassword" class="text-blue-600 hover:underline font-semibold">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div class="!mt-8">
                <button type="submit" class="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                  Sign in
                </button>
              </div>
              <p class="text-gray-800 text-sm !mt-8 text-center">Don't have an account? <a href="/signup" class="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold">Register here</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserLogin