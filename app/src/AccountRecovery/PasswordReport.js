import React, { useState } from 'react';
import { SERVER_URL } from "../constant/severUrl";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useNotification } from '../context/NotificationContext';

function RequestPasswordReset() {
  const [reason, setReason] = useState("");
  const [tokenExpired, setTokenExpired] = useState(false);
  const { token } = useParams();
  const { showSuccessNotification, showErrorNotification } = useNotification();

  const reasonSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${SERVER_URL}/PasswordReport/${token}`, {
        reason: reason,
      })
      .then((response) => {
      showSuccessNotification(response.data.message);
       })
      setReason('');
    } catch (error) {
      if (error.response?.status === 410) {
        setTokenExpired(true);
        showErrorNotification("Token has expired. Please request a new link.");
      } else {
        showErrorNotification(error.response.data.message);
      }
   
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 mx-auto">

        {tokenExpired ? (
            <p className="text-white bg-red-500 py-3 px-5 rounded">Token has expired. Please request a new password link.</p>
        ) : (
        <form onSubmit={reasonSubmit} className="w-2/3 mx-auto">
            <h2 className="text-2xl text-center text-white mb-4">Password Report Form</h2>        
            <div className="col-span-3 sm:col-span-3 py-3">
              <textarea type="text" placeholder='Enter Report' value={reason} onChange={(e) => setReason(e.target.value)}  className="w-full text-white text-md bg-gray-700 rounded px-3 py-3 outline-none"/>
            </div>
            
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2" >
                Submit
            </button>
        </form>
        )}
   
    </div>
  );
}

export default RequestPasswordReset;
