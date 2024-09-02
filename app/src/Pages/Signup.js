import React, { useState } from 'react';
import img from '../assets/img/Medical_Mobile.jpg'
import { SERVER_URL } from "../constant/severUrl";
import axios from "axios";
import { UseAuthContext } from "../Hook/StaffAuth";
import { Link, useNavigate } from 'react-router-dom';
import { showError, showAlert } from '../Component/Alert';

function Signup() {
  document.title = 'SignUp | MedOps';
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = UseAuthContext();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };


  const account = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      await axios.post(`${SERVER_URL}/auth/createAccount`, {
        username: username,
        password: password,
        email: email,
        phoneNumber: phoneNumber,
        address: address,
      }).then((response) => {
        const user = response.data.user;
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({ type: "LOGIN", payload: user });
      });
  
      setSuccessMessage("Registered successfully! Welcome.");
       setTimeout(() => {
        navigate('/medicine');
        }, 2000); 
  
      setErrors("");
    } catch (error) {
      if (error.response?.status === 400) {
        setErrors('All Fields Are Required.');
      } else if (error.response?.status === 401) {
        setErrors('Please enter a valid phone number.');
      }
      setSuccessMessage("");
    } finally {
      setIsLoading(false);
    }
  };
  

  return (

<div className="flex flex-wrap min-h-screen w-full content-center justify-center py-10">
  <div className="flex shadow-md">
    <div className="flex flex-wrap content-center justify-center rounded-l-md bg-gray-50 " style={{width: '24rem', height: '40rem'}}>
    
      <div className="flex flex-wrap content-center justify-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-lg leading-9 font-extrabold text-gray-900">MedOps</h2>
            <h2 className="mt-1 text-center text-lg leading-9 font-extrabold text-gray-900">Create a new account</h2>
            {isLoading && (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-green-500 border-opacity-50"></div>
            </div>
          )}
          {(errors || successMessage) && (
            <div className={`p-3 rounded-lg mt-2 mx-2 ${ errors  ? "text-red-500 text-center bg-red-100" : "text-green-500 text-center bg-green-100"}`} >
              {errors || successMessage}
            </div>
          )}
        </div>

        <div className=" sm:mx-auto sm:w-full sm:max-w-md">
            <div className="py-4 px-4 sm:px-10">
                <form onSubmit={account}>
                   <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-5  text-gray-700">username</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="John Doe" type="text" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                        </div>
                    </div>


                    <div className="mt-6">
                        <label htmlFor="email" className="block text-sm font-medium leading-5  text-gray-700">Email address</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="user@example.com" type="email" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>    
                        </div>
                    </div>
                    <div className="mt-6">
                        <label htmlFor="email" className="block text-sm font-medium leading-5  text-gray-700">phone number</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="12345678" type="text" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                        </div>
                    </div>
                    <div className="mt-6">
                        <label htmlFor="email" className="block text-sm font-medium leading-5  text-gray-700">address</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="address" type="text" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                        </div>
                    </div>
                    <div className="mt-6 relative">
                        <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700"> Password</label>
                        <div className="mt-1 rounded-md shadow-sm">
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type={passwordVisible ? 'text' : 'password'} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                        </div>
                        <div className="absolute top-12 right-3 transform -translate-y-1/2 cursor-pointer" onClick={togglePasswordVisibility}>
                            {passwordVisible ? <div className='text-blue-300'><span className="material-symbols-outlined">visibility</span></div> :
                            <div className='text-blue-300'><span className="material-symbols-outlined">visibility_off</span></div>}
                       </div>
                    </div>
                    
    

                    <div className="mt-6">
                        <span className="block w-full rounded-md shadow-sm">
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                          Create account
                        </button>
                     </span>
                    </div>

                    <div className="text-center">
                      <span className="text-xs text-gray-400 font-semibold">Don't have account?</span>
                      <Link to="/" className="text-xs font-semibold text-purple-700">Login</Link>
                    </div>
                </form>

            </div>
        </div>
    </div>
    </div>
    <div className="hidden md:flex md:flex-wrap md:content-center md:justify-center  rounded-r-md" style={{width: '24rem', height: '40rem'}}>
      <img className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md" src={img}/>
    </div>
  </div>
</div>
  )
}

export default Signup