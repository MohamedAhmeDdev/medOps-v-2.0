import React, { useState, useEffect } from 'react';
import {MANAGER_SERVER_URL} from '../../../../constant/severUrl';
import { useNotification } from '../../../../context/NotificationContext';
import axios from 'axios'
import { useParams,useNavigate  } from "react-router-dom";

function UpdateStaffInfo() {
  const { showErrorNotification ,  showSuccessNotification} = useNotification();
  const [roles, setRoles] = useState([]); 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("");
  const { id } = useParams();
  const navigate = useNavigate()


  useEffect(() => {
    const getRoles = async () => {
        const response = await axios.get(`${MANAGER_SERVER_URL}/role`);
        setRoles(response.data.role);
    };
    getRoles();
  }, []);


  const getStaff = async () => {
    const response = await axios.get(`${MANAGER_SERVER_URL}/Staff/${id}`);    
    setName(response.data.staff.name);
    setEmail(response.data.staff.email);
    setPhoneNumber(response.data.staff.phoneNumber);
    setAddress(response.data.staff.address);
    setRole(response.data.staff.role.role)
  };

  useEffect(() => {
    getStaff();
  }, []);


  const update_staff = async (e) => {
    e.preventDefault();

  try {
      await axios.patch(`${MANAGER_SERVER_URL}/staff/updateStaff/${id}`, {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        address: address,
        role: role,
        }).then((response) => {
          showSuccessNotification(response.data.message);
        });
      } catch (error) {
        showErrorNotification(error.response.data.message);
      }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
    <div className="flex flex-1 relative">
      <div className="flex flex-col flex-1  overflow-x-hidden overflow-y-auto">
        <main className="max-h-screen flex flex-col py-5 h-[100vh]"> 
          <div className="w-full px-3  mx-auto">
        
          <h6 className="pb-5 font-bold text-lg lg:text-lg capitalize">Dashboard</h6>


           <div className="max-w-full pb-20 lg:mb-0 lg:w-full lg:flex-none">
                <div className="relative flex flex-col min-w-0 mt-6 break-words border-0 border-transparent border-solid rounded-lg bg-clip-border">
                  <div className="p-4 mb-4">
                    <h3 className="mb-4 text-xl font-semibold text-black">Update Staff information</h3>
                    <form onSubmit={update_staff}>
                      <div className="grid grid-cols-6 gap-6">
                 
                          <div className="col-span-6 sm:col-span-3 py-3">
                              <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                              <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 focus:bg-white focus:outline-none"/>
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
                            <select  value={role} onChange={(e) => setRole(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 focus:bg-white focus:outline-none">
                            {roles.map((role) => (
                              <option key={role.role_id} value={role.role}>
                                {role.role}
                              </option>
                            ))}
                          </select>
                          </div>
                         </div>
                         <button className="mt-10 justify-center w-full px-4 py-2 text-md font-medium text-white bg-gray-500 border border-gray-500 rounded-md hover:bg-gray-600 ">
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