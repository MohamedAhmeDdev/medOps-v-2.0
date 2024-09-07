import React, { useState } from 'react';
import { SERVER_URL } from "../constant/severUrl";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNotification } from '../context/NotificationContext';

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const { showSuccessNotification, showErrorNotification } = useNotification();

  const forgotPassword = async (e) => {
    e.preventDefault();
    try {
        await axios.post(`${SERVER_URL}/staffAuth/forgotPassword`, {
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
    <div className="flex justify-center items-center h-screen bg-gray-900">    
      <form onSubmit={forgotPassword} className="w-2/3 mx-auto">
      <h2 className="text-lg text-white text-center mb-4">Forgot Password</h2>
      
        <div className="mb-4">
          <input type="email" className="w-full text-white text-md bg-gray-700 rounded px-3 py-3 outline-none" placeholder='Enter Gmail' value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2" >
          Submit
        </button>
         <div className='pt-5 flex text-white'>
           <span className="material-symbols-outlined">arrow_back</span>
          <Link to="/" className="text-white hover:text-white text-md"><p className='flex items-center'>Go back</p></Link>
        </div>
      </form>
 
  </div>
  )
}

export default ForgotPassword