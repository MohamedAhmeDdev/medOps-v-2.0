import React, { useState } from 'react';
import { SERVER_URL } from "../../utils/constant/severUrl";
import axios from "axios";
import { showError } from '../../Component/Alert';
import { Link } from 'react-router-dom';


function ForgotPassword() {
  const [email, setEmail] = useState("");


  const forgotPassword = async (e) => {
    e.preventDefault();
    try {
        await axios.post(`${SERVER_URL}/Staff/forgotPassword`, {
          email: email,
        })
        setEmail('');
    } catch (error) {
      if (error.response?.status === 400) {
        showError("Email is missing. try again"); 
      } else if (error.response?.status === 401) {
        showError("Email Does Not Exist");
      }
    }
  };


  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
    <div className="w-1/3 flex flex-col justify-center items-center bg-gray-800 py-8">
      <h2 className="text-lg text-white mb-4">Forgot Password</h2>
      <form onSubmit={forgotPassword} className="w-2/3">
        <div className="mb-4">
          <input type="email" className="w-full text-white text-md bg-gray-700 rounded px-3 py-2 outline-none" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2" >
          Submit
        </button>
         <div className='pt-5 flex text-white'>
           <span class="material-symbols-outlined">arrow_back</span>
          <Link to="/" className="text-white hover:text-white text-md"><p className='flex items-center'>Go back</p></Link>
        </div>
      </form>
    </div>
  </div>
  )
}

export default ForgotPassword