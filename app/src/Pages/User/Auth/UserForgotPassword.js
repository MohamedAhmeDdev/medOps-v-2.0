import React, { useState } from 'react';
import { SERVER_URL } from "../../../constant/severUrl";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNotification } from '../../../context/NotificationContext';

function UserForgotPassword() {
  const [email, setEmail] = useState("");
  const { showSuccessNotification, showErrorNotification } = useNotification();


  const forgotPassword = async (e) => {
    e.preventDefault();
    try {
        await axios.post(`${SERVER_URL}/auth/forgotPassword`, {
          email: email,
        })
      
        
        .then((response) => {

            showSuccessNotification(response.data.message);
            setEmail('');
        })
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
          <h2 class="text-gray-800 text-center text-2xl font-bold">Forgot Password</h2>
          <form onSubmit={forgotPassword} class="mt-8 space-y-4">
            <div>
              <label class="text-gray-800 text-sm mb-2 block">Email</label>
              <div class="relative flex items-center">
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-300" placeholder="Enter Email" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                  <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                  <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                </svg>
              </div>
            </div>

            <div class="!mt-8">
              <button type="submit" class="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                Submit
              </button>
            </div>
            <p class="text-gray-800 text-sm !mt-8 text-center">Have Account? <a href="/" class="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold">Login</a></p>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserForgotPassword