import React, { useState ,useEffect } from 'react';
import { SERVER_URL } from "../../../constant/severUrl";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useNotification } from '../../../context/NotificationContext';

function UserResetPassword() {
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [tokenExpired, setTokenExpired] = useState(false);
  const { token } = useParams();
  const { showSuccessNotification, showErrorNotification } = useNotification();



  const resetPassword = async (e) => {
    e.preventDefault();
    try {
      if (tokenExpired) {
        showErrorNotification("Token has expired. Please request a new password reset link.");
        return;
      }

        await axios.patch(`${SERVER_URL}/auth/resetPassword/${token}`, {
          password: password,
          confirm_password: confirm_password,
        })
        .then((response) => {
            showSuccessNotification(response.data.message);
            setPassword('');
            setConfirm_password('');
        })
    } catch (error) {
      if (error.response?.status === 410) {
        setTokenExpired(true);
      } else{
        showErrorNotification(error.response.data.message);
      }
    }
  };


  return (
    <div class="bg-gray-50 font-[sans-serif]">  
    <div class="min-h-screen flex flex-col items-center justify-center py-6 px-4">
      <div class="max-w-md w-full">
      <h1 className='text-center font-bold text-3xl'>MedOps</h1>
        <div class="p-8 bg-white shadow">
          <h2 class="text-gray-800 text-center text-2xl font-bold">Reset Password</h2>

          {tokenExpired ? (
            <p className="text-red-500">Token has expired. Please request a new password link.</p>
          ) : (

          <form onSubmit={resetPassword} class="mt-8 space-y-4">
            <div>
              <label class="text-gray-800 text-sm mb-2 block">Password</label>
              <div class="relative flex items-center">
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-300" placeholder="Password" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                  <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                  <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                </svg>
              </div>
            </div>

            <div>
              <label class="text-gray-800 text-sm mb-2 block">Confirm Password</label>
              <div class="relative flex items-center">
                <input value={confirm_password} onChange={(e) => setConfirm_password(e.target.value)} type="password" class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-300" placeholder="Confirm Password" />
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
          </form>
            )}
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserResetPassword