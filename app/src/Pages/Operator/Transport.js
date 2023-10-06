import React, { useEffect, useState } from "react";
import Navbar from '../../Component/Navbar';
import Sidebar from '../../Component/Aside';
import UseSidebar from '../../utils/constant/useSidebar';
import { Link } from 'react-router-dom';
import { Api } from "../../utils/Api";

function Transport() {
  const { sidebarOpen, toggleSidebar } = UseSidebar();
  const [statusDropdown, setStatusDropdown] = useState(false);
  const [transports, setTransports] = useState([]);

  useEffect(() => {
		const getTransport = async () => {
		  const data = await Api("/Operator/Transports", "GET");
			setTransports(data.transport);									
		};
	
		getTransport();
	}, []);


  const toggleDropdown = () => {
    setStatusDropdown(!statusDropdown);
  };


  return (
    <div className="flex flex-col h-screen overflow-hidden ">
      <div className="flex flex-1 relative">
    
        <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
    
        <div className="flex flex-col flex-1 bg-gray-50 overflow-x-hidden overflow-y-auto">
          <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
    
          <main className="max-h-screen flex flex-col  h-[100vh]"> 
          <div className="w-full py-6 mx-auto">
            <h6 className="pb-5 font-bold px-3 lg:px-6 text-2xl lg:text-lg capitalize">Transport</h6> 

            <div className="flex flex-wrap py-5">
                  <div className="flex-none w-full max-w-full">
                    <div className=" flex flex-col mb-10 break-words bg-white border-0 border-transparent border-solid">     
                      <div className="flex-auto px-0 pt-0 pb-2">
                        <div className="p-0 overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 ">
                          <thead className="align-bottom">
                              <tr>
                                <th className="p-4 text-md font-medium  border-gray-400 text-center text-black">Driver</th>
                                <th className="p-4 text-md font-medium border-gray-400 text-center text-black">Truck_Number</th>
                                <th className="p-4 text-md font-medium border-gray-400 text-center text-black">Driving_License</th>
                                <th className="relative p-4 text-md font-medium border-gray-400 text-left text-black ml-10 flex">Status
                                    {statusDropdown ? (
                                            <span  onClick={toggleDropdown} className="material-symbols-outlined cursor-pointer">expand_less</span>
                                            ) : (
                                              <span  onClick={toggleDropdown} className="material-symbols-outlined cursor-pointer">expand_more</span>
                                        )}
                                      {statusDropdown && (
                                        <div className="absolute w-36 lg:w-28 mt-10 origin-top-right bg-white shadow-lg ring-black ring-opacity-5 focus:outline-none" onClick={() => setStatusDropdown(false)}>
              
                                          <div className="py-1">
                                              <p className="flex px-4 py-2 text-sm text-gray-700 border-l-2 border-transparent dark:text-gray-400 dark:hover:text-gray-300 hover:text-black cursor-pointer">Available</p>
                                          </div>
                                          <div className="py-1">
                                              <p className="flex px-4 py-2 text-sm text-gray-700 border-l-2 border-transparent dark:text-gray-400 dark:hover:text-gray-300 hover:text-black cursor-pointer">Unavailable</p>
                                          </div>
                                        </div>
                                    )}
                                </th>
                                <th className="p-4 text-md font-medium border-gray-400  text-center text-black">Total Deliveries</th>
                                <th className="p-4 text-md font-medium border-gray-400  text-center text-black">Deliveries</th>
                              </tr>
                          </thead>
                            <tbody className="bg-white">
                              {transports?.map((item) =>(
                              <tr>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap border-b">{item.user.username}</td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap border-b">Kbc 55dd</td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap border-b">{item.driver_license_number}</td>       
                                <td className="p-4 whitespace-nowrap border-b text-center">
                                  {item.status === 'Available' && (
                                      <span className="bg-green-100 text-green-500 rounded-md text-sm mr-2 px-2.5 py-0.5 border border-green-50">{item.status}</span>
                                  )}
                                    {item.status === 'Unavailable' && (
                                      <span className="bg-red-100 text-red-400 rounded-md text-sm mr-2 px-2.5 py-0.5 border border-red-50 ">{item.status}</span>  
                                  )}
                                </td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap border-b">10/10</td> 
                                <td className="p-4 text-md text-gray-400 text-center whitespace-nowrap border-b">
                                 <Link to={`/delivery/${item.transport_id}`} className="text-sm font-semibold leading-tight text-slate-400">More</Link>
                                </td>
                              </tr>  
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
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

export default Transport