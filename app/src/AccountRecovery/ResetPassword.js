import React, { useState ,useEffect } from 'react';
import { SERVER_URL } from "../constant/severUrl";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useNotification } from '../context/NotificationContext';

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [tokenExpired, setTokenExpired] = useState(false);
  const { token } = useParams();
  const { showSuccessNotification, showErrorNotification } = useNotification();

  const forgotPassword = async (e) => {
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
    <div className="flex justify-center items-center h-screen bg-gray-900">
    <div className="w-1/3 flex flex-col justify-center items-center bg-gray-800 py-8">
      

       {tokenExpired ? (
            <p className="text-red-500">Token has expired. Please request a new password link.</p>
          ) : (

        <form onSubmit={forgotPassword} className="w-2/3">
          <h2 className="text-2xl text-white mb-4">Reset Password</h2>
          <div className="mb-4">
            <input type="text" className="w-full text-white bg-gray-700 rounded px-3 py-2 outline-none" placeholder="password"
            value={password} onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <div className="mb-4">
            <input type="text" className="w-full text-white bg-gray-700 rounded px-3 py-2 outline-none" placeholder="confirm_password"
            value={confirm_password} onChange={(e) => setConfirm_password(e.target.value)} 
            />
          </div>

          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2" >
            Reset Password
          </button>
        </form>
       )}
    </div>
  </div>
  )
}

export default ResetPassword