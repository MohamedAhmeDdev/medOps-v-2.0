import React, { useState, useEffect } from 'react';
import Navbar from '../../../Component/Navbar';
import Sidebar from '../../../Component/Aside';
import UseSidebar from '../../../utils/constant/useSidebar';
import {SERVER_URL} from '../../../utils/constant/severUrl';
import { useNotification } from '../../../utils/context/NotificationContext';
import axios from 'axios'
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Staff_Role } from '../../../utils/constant/Roles';
import { Staff_Function } from '../../../utils/constant/Roles';

function UpdateStaffInfo() {
  const { sidebarOpen, toggleSidebar } = UseSidebar();
  const { showErrorNotification ,  showSuccessNotification} = useNotification();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("");
  const [staffFunction, setStaffFunction] = useState("");
  const { id } = useParams();
  const navigate = useNavigate()

  const getStaff = async () => {
    const response = await axios.get(`${SERVER_URL}/Manager/StaffWarehouse/${id}`);
    setUsername(response.data.user.username);
    setEmail(response.data.user.email);
    setPhoneNumber(response.data.user.phoneNumber);
    setAddress(response.data.user.address);
    setRole(response.data.user.role);
    setStaffFunction(response.data.user?.staffWarehouses[0].staff_function);
};

useEffect(() => {
  getStaff();
}, []);


  const update_staff = async (e) => {
    e.preventDefault();

  try {
      await axios.patch(`${SERVER_URL}/Manager/StaffWarehouse/updateStaff/${id}`, {
        username: username,
        email: email,
        phoneNumber: phoneNumber,
        address: address,
        role: role,
        staffFunction: staffFunction

        }).then((response) => {
          showSuccessNotification('staff updated successfully.');
        });
         navigate('/staff')
      } catch (error) {
        if (error.response?.status === 400) {
          showErrorNotification('All Fields Are Required.');
        }else if (error.response?.status === 402) {
          showErrorNotification('No file uploaded.');
        }
      }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
    <div className="flex flex-1 relative">

      <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

      <div className="flex flex-col flex-1 bg-gray-50 overflow-x-hidden overflow-y-auto">
        <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

        <main className="max-h-screen flex flex-col py-5 h-[100vh]"> 
          <div className="w-full px-3  mx-auto">
        
          <h6 className="pb-5 font-bold text-lg lg:text-lg capitalize">Dashboard</h6>


           <div className="max-w-full pb-20 lg:mb-0 lg:w-full lg:flex-none">
                <div className="relative flex flex-col min-w-0 mt-6 break-words bg-white border-0 border-transparent border-solid rounded-lg bg-clip-border">
                  <div className="p-4 mb-4">
                    <h3 className="mb-4 text-xl font-semibold text-black">Update Staff information</h3>
                    <form onSubmit={update_staff}>
                      <div className="grid grid-cols-6 gap-6">
                 
                          <div className="col-span-6 sm:col-span-3 py-3">
                              <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                              <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 focus:bg-white focus:outline-none"/>
                          </div>
                          <div className="col-span-6 sm:col-span-3 py-3">
                              <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                              <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 focus:bg-white focus:outline-none"/>
                          </div>
                          <div className="col-span-6 sm:col-span-3 py-3">
                              <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Address</label>
                              <input  value={address} onChange={(e) => setAddress(e.target.value)}type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 focus:bg-white focus:outline-none"/>
                          </div>
                          <div className="col-span-6 sm:col-span-3 py-3">
                              <label htmlFor="phone-number" className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
                              <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 focus:bg-white focus:outline-none"/>
                          </div>
                          <div className="col-span-6 sm:col-span-3 py-3">
                            <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900">Role</label>
                            <select value={role} onChange={(e) => setRole(e.target.value)} type="text"  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 focus:bg-white focus:outline-none" >
                              <option value="">Choose</option>
                              {Staff_Role.map((role) => (
                                <option key={role.id} value={role.value}>
                                  {role.name}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="col-span-6 sm:col-span-3 py-3">
                            <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900">Function</label>
                            <select value={staffFunction} onChange={(e) => setStaffFunction(e.target.value)} type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 focus:bg-white focus:outline-none" >
                              <option value="">Choose</option>
                              {Staff_Function.map((staffFunction) => (
                                <option key={staffFunction.id} value={staffFunction.value}>
                                  {staffFunction.name}
                                </option>
                              ))}
                            </select>
                          </div>
                         </div>
                         <button className="mt-10 justify-center w-full px-4 py-2 text-md font-medium text-white bg-blue-500 border border-blue-500 rounded-md hover:bg-blue-600 ">
                            Update
                        </button>
                      </form>
                  </div>
                </div>
          </div>
          </div>
        </main>
      </div>
    </div>
  </div>
  )
}

export default UpdateStaffInfo