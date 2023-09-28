import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import { SERVER_URL } from "../../utils/constant/severUrl";
import { getUserInfo } from "../../utils/Token";
import { Api } from "../../utils/Api";
import { useNotification } from '../../utils/context/NotificationContext';

function Profile() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const userInfo = getUserInfo();
    const id = userInfo ? userInfo.id : null;
    const { showSuccessNotification, showErrorNotification } = useNotification();

    const getUsById = async () => {
        try {
          const response = await Api(`${SERVER_URL}/Users/${id}`, 'GET');   
          setUsername(response.user.username);
          setEmail(response.user.email);
          setPhoneNumber(response.user.phoneNumber);
          setAddress(response.user.address);
        } catch (error) {
          showErrorNotification("Error fetching user data");
        }
      };
      
        useEffect(() => {
            getUsById();
         }, []);
    
    
         const updateProfile = async (e) => {
          try {
            e.preventDefault();
        
            const response = await Api(`${SERVER_URL}/Users/updateInfo/${id}`, 'PATCH', {
              username: username,
              email: email,
              phoneNumber: phoneNumber,
              address: address,
            });
            if (response.success) {
              let user = JSON.parse(localStorage.getItem("user"));
              user.username = username;
              user.address = address;
              localStorage.setItem("user", JSON.stringify(user));
              showSuccessNotification("Updated Profile successfully");
            } else {
              showErrorNotification("Failed to update profile");
            }
          } catch (error) {
            if (error.response?.status === 400) {
              showErrorNotification('Please enter a valid phone number');
            }
          }
        };
        

  return (
    <>
    <Navbar/>

    <div className="p-4 mt-20 border-gray-200 rounded-lg 2xl:col-span-2 sm:p-6 bg-white">
            <h3 className="mb-4 text-xl font-semibold">Personal information</h3>
            <form onSubmit={updateProfile}>
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-gray-900">userName</label>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="shadow-sm border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-100 border-gray-300 focus:outline-none"/>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="shadow-sm border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-100 border-gray-300 focus:outline-none"/>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900">PhoneNumber</label>
                        <input value={'0' + phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text"  className="shadow-sm border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-100 border-gray-300 focus:outline-none"/>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900">Address</label>
                        <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="shadow-sm border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-100 border-gray-300 focus:outline-none"/>
                    </div>                
                  
                    <div className="col-span-6 sm:col-full">
                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Update</button>
                    </div>
                </div>
            </form>
        </div>
        </>
  )
}

export default Profile