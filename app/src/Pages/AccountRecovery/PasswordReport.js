import React, { useState } from 'react';
import { SERVER_URL } from "../../utils/constant/severUrl";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { showError } from '../../Component/Alert';

function RequestPasswordReset() {
  const [reason, setReason] = useState("");
  const { id } = useParams();
  const reasonSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post(`${SERVER_URL}/Staff/PasswordReport`, {
          reason: reason,
          user_id: id
        })
        setReason('');
    } catch (error) {
      if (error.response?.status === 401) {
       showError("Not Found"); 
      } else if (error.response?.status === 400) {
       showError("Reason Field Is Required, try again");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
    <div className="w-1/3 flex flex-col justify-center items-center bg-gray-800 py-8">
      <h2 className="text-2xl text-white mb-4">Password Report Form</h2>
      <form onSubmit={reasonSubmit} className="w-2/3">
        <div className="mb-4">
          <textarea type="text" className="w-full text-white bg-gray-700 rounded px-3 py-2 outline-none" placeholder="reason for requesting resting password"
          value={reason} onChange={(e) => setReason(e.target.value)} >
          </textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2" >
          Submit
        </button>
      </form>
    </div>
  </div>
  )
}

export default RequestPasswordReset