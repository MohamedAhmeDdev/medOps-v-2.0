import React, { useState, useEffect } from 'react';
import {MANAGER_SERVER_URL} from '../../../../constant/severUrl';
import { useNotification } from '../../../../context/NotificationContext';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";


function UpdateTransport() {
  const [transporter, setTransporter] = useState([]);
  const [name, setName] = useState("");
  const [truck_number, setTruck_number] = useState("");
  const [driver_license_number, setDriver_license_number] = useState("");
  const { showErrorNotification ,  showSuccessNotification} = useNotification();
  const { id } = useParams();
  const navigate = useNavigate()
  

    const getTransporter = async () => {
        try {
        const response = await axios.get(`${MANAGER_SERVER_URL}/transports`);
        setTransporter(response.data.transport);
        } catch (error) {
        console.error('Error fetching transporter data:', error);
        }
    };

    useEffect(() => {
        getTransporter();
    }, []);

   
    const getTransportById = async () => {
        const data = await axios.get(`${MANAGER_SERVER_URL}/transports/${id}`);		        															
        setName(data.data.transport[0].staff.name);																	
        setTruck_number(data.data.transport[0].truck_number);																	
        setDriver_license_number(data.data.transport[0].driver_license_number);																																		
    };
        
    useEffect(() => {
      getTransportById();
    }, []);



   const update_transport = async (e) => {
    e.preventDefault();

    try {
      await axios.patch(`${MANAGER_SERVER_URL}/transports/${id}`, {
        name: name,
        truck_number: truck_number,
        driver_license_number:driver_license_number,
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
      <div className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
        <main className="max-h-screen flex flex-col py-5 h-[100vh]"> 
          <div className="w-full px-3  mx-auto">
        
          <h6 className="pb-5 font-bold text-lg lg:text-lg capitalize">Dashboard</h6>


           <div className="max-w-full pb-20 lg:mb-0 lg:w-full lg:flex-none">
                <div className="relative flex flex-col min-w-0 mt-6 break-words border-0 border-transparent border-solid rounded-lg">
                <section >
                  <div>
                      <div className="p-6 rounded-lg">
                          <div className="pb-6 border-b">
                              <h2 className="text-xl font-bold text-gray-800 md:text-3xl dark:text-gray-300">Update Transport</h2>
                          </div>

                      <form onSubmit={update_transport}>
                          <div className="py-6 border-b border-gray-100">
                            <div className="w-full md:w-9/12">
                                <div className="flex flex-wrap -m-3">
                                    <div className="w-full p-3 md:w-1/3">
                                        <p className="text-base font-semibold text-gray-700 dark:text-gray-400">Staff</p>
                                    </div>
                                    <div className="w-full p-3 md:flex-1">
                                        <select value={name} onChange={(e) => setName(e.target.value)} className="appearance-none dark:text-gray-400 w-full py-2.5 px-4 text-black text-base font-normal border border-gray-200 rounded-lg focus:outline-none">
                                         <option value="">Choose</option>
                                            {transporter.map((staff, id) => (
                                                <option key={id} value={staff.name}>
                                                {staff.staff.name}
                                            </option>
                                         ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                         </div>

                          <div className="py-6 border-b border-gray-100">
                              <div className="w-full md:w-9/12">
                                  <div className="flex flex-wrap -m-3">
                                      <div className="w-full p-3 md:w-1/3">
                                          <p className="text-base font-semibold text-gray-700 dark:text-gray-400">Truck_Number</p>
                                      </div>
                                      <div className="w-full p-3 md:flex-1">
                                           <input value={truck_number} onChange={(e) => setTruck_number(e.target.value)} type="text" className="w-full px-4 py-2.5 text-base text-black rounded-lg font-normal border border-gray-200 focus:outline-none"/>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="py-6 border-b border-gray-100">
                              <div className="w-full md:w-9/12">
                                  <div className="flex flex-wrap -m-3">
                                      <div className="w-full p-3 md:w-1/3">
                                          <p className="text-base font-semibold text-gray-400">Driving_License</p>
                                      </div>
                                      <div className="w-full p-3 md:flex-1">
                                           <input value={driver_license_number} onChange={(e) => setDriver_license_number(e.target.value)} type="text" className="w-full px-4 py-2.5 text-base text-black rounded-lg font-normal border border-gray-200 focus:outline-none"/>
                                      </div>
                                  </div>
                              </div>
                          </div>

                              <div className="w-full md:w-auto mt-10 p-1.5">
                                  <button className="flex flex-wrap justify-center w-full px-4 py-2 text-md font-medium text-white bg-gray-500 border border-gray-500 rounded-md hover:bg-gray-600 ">
                                       Update
                                  </button>
                              </div>
                      </form>     
                      </div>
                  </div>
                </section>
                </div>
          </div>
          </div>
        </main>
      </div>
    </div>
  </div>
  )
}

export default UpdateTransport