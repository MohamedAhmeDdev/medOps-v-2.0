import React, { useState } from 'react';
import Navbar from '../../Component/Navbar';
import Sidebar from '../../Component/Aside';
import UseSidebar from '../../utils/constant/useSidebar';
import { Link } from 'react-router-dom';


function Transport() {
  const { sidebarOpen, toggleSidebar } = UseSidebar();

  return (
    <div className="flex flex-col h-screen overflow-hidden ">
      <div className="flex flex-1 relative">
    
        <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
    
        <div className="flex flex-col flex-1 bg-indigo-50 overflow-x-hidden overflow-y-auto">
          <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
    
          <main className="max-h-screen flex flex-col  h-[100vh]"> 
          <div className="w-full px-3 lg:px-6 py-6 mx-auto">
            <h6 className="pb-5 font-bold text-2xl lg:text-4xl capitalize">Transport</h6> 

            <div className="flex flex-wrap py-5">
            <div className="flex-none w-full max-w-full pb-5">
              <div className="relative flex flex-col mb-6 break-words bg-white border-0 border-transparent border-solid rounded-lg">
                <div className="flex-auto px-0 pt-0 pb-2">
                  <div className="p-0 overflow-x-auto">
                    <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                      <thead className="align-bottom">
                        <tr>
                          <th className="px-4 py-3 font-medium text-center  border-b border-gray-400 text-md lg:text-lg border-b-solid whitespace-nowrap text-black">Driver</th>
                          <th className="px-4 py-3 font-medium text-center  border-b border-gray-400 text-md lg:text-lg border-b-solid whitespace-nowrap text-black">Truck_Number</th>
                          <th className="px-4 py-3 font-medium text-center  border-b border-gray-400 text-md lg:text-lg border-b-solid whitespace-nowrap text-black">Driving_License</th>
                          <th className="px-4 py-3 font-medium text-center  border-b border-gray-400 text-md lg:text-lg border-b-solid whitespace-nowrap text-black">Status</th>
                          <th className="px-4 py-3 font-medium text-center  border-b border-gray-400 text-md lg:text-lg border-b-solid whitespace-nowrap text-black">Deliveries</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-2 px-5 text-md text-center font-normal text-slate-400  border-b whitespace-nowrap shadow-transparent capitalize">jane</td>
                          <td className="p-2 px-5 text-md text-center font-normal text-slate-400  border-b whitespace-nowrap shadow-transparent">kbs 465fd</td>
                          <td className="p-2 px-5 text-md text-center font-normal text-slate-400  border-b whitespace-nowrap shadow-transparent">64699</td>
                          <td className="p-2 px-5 text-md text-center font-normal text-slate-400  border-b whitespace-nowrap shadow-transparent">
                            <span className="bg-green-200 text-green-400 text-md font-medium mr-2 px-2.5 py-0.5 rounded-lg border border-green-100">AVAILABLE</span>
                          </td>
                          <td className="p-2 align-middle text-center bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <Link to='/delivery' className="text-sm font-semibold leading-tight text-slate-400">More</Link>
                        </td>
                        </tr>
                        <tr>
                          <td className="p-2 px-5 text-md text-center font-normal text-slate-400  border-b whitespace-nowrap shadow-transparent capitalize">cane</td>
                          <td className="p-2 px-5 text-md text-center font-normal text-slate-400  border-b whitespace-nowrap shadow-transparent">Knd 4574</td>
                          <td className="p-2 px-5 text-md text-center font-normal text-slate-400  border-b whitespace-nowrap shadow-transparent">5451</td>
                          <td className="p-2 px-5 text-md text-center font-normal text-slate-400  border-b whitespace-nowrap shadow-transparent">
                            <span className="bg-red-200 text-red-400 text-md font-medium mr-2 px-2.5 py-0.5 rounded-lg border border-red-100">Not AVAILABLE</span>
                          </td>
                          <td className="p-2 align-middle text-center bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <Link to='/delivery' className="text-sm font-semibold leading-tight text-slate-400">More</Link>
                        </td>
                        </tr>     
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