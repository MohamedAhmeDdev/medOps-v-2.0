import React, { useState } from 'react';
import { SERVER_URL } from "../utils/constant/severUrl";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useNotification } from '../utils/context/NotificationContext';

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
      });
      showSuccessNotification("Report submitted successfully!");
      setReason('');
    } catch (error) {
      if (error.response?.status === 410) {
        setTokenExpired(true);
        showErrorNotification("Token has expired. Please request a new link.");
      } else if (error.response?.status === 400) {
        showErrorNotification("Bad Request: Please check your input.");
      } else {
        showErrorNotification("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="h-screen bg-gray-900 mx-auto">
      <div className="relative flex flex-col min-w-0 break-words border-0 border-transparent border-solid rounded-lg bg-clip-border">
        <div className="p-4 mb-4">
          <h2 className="text-2xl text-center text-white mb-4">Password Report Form</h2>

          {tokenExpired ? (
            <p className="text-red-500">Token has expired. Please request a new password link.</p>
          ) : (
            <form onSubmit={reasonSubmit} className="w-2/3 mx-auto">
              <div className="grid grid-cols-2">
                <div className="col-span-3 sm:col-span-3 py-3">
                  <label htmlFor="reason" className="block mb-2 text-sm font-medium text-gray-900">
                    Reason
                  </label>
                  <textarea type="text" value={reason} onChange={(e) => setReason(e.target.value)}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:focus:ring-primary-500 dark:focus:border-primary-500 focus:outline-none"
                  />
                </div>
              </div>

              <button type="submit" className="w-60 mx-auto bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default RequestPasswordReset;
