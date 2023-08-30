import React, { useState } from 'react';
import Navbar from '../../../Component/Navbar';
import Sidebar from '../../../Component/Aside';
import UseSidebar from '.././../../utils/constant/useSidebar';

function SingleStaffShift() {
  const { sidebarOpen, toggleSidebar } = UseSidebar();

  return (
     <div className="flex flex-col h-screen overflow-hidden ">
      <div className="flex flex-1 relative">

        <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

        <div className="flex flex-col flex-1 bg-gray-50 overflow-x-hidden overflow-y-auto">
          <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

          <main className="max-h-screen flex flex-col h-[100vh]"> 

            <div className="w-full py-6">
            <h6 className="pb-5 font-bold text-lg  px-1.5 lg:px-6 capitalize">Weekly Shift</h6>
               <div className="flex flex-wrap py-5">
                  <div className="flex-none w-full max-w-full">
                    <div className=" flex flex-col mb-10 break-words bg-white border-0 border-transparent border-solid bg-clip-border">     
                      <div className="flex-auto px-0 pt-0 pb-2">
                        <div className="p-0 overflow-x-auto ">
                          <table className="min-w-full divide-y divide-gray-200 ">
                          <thead className="align-bottom">
                              <tr>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black"></th>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Logged In At</th>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Logged Out At</th>
                              </tr>
                          </thead>
                            <tbody>           
                               <tr className="border-b">
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap capitalize">Monday</td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap uppercase">7: 10 am</td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap uppercase">40: 10 pm</td>
                              </tr>
                              <tr className="border-b">
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap capitalize">Tuesday</td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap uppercase">7: 10 am</td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap uppercase">40: 10 pm</td> 
                              </tr>       
                               <tr className="border-b">
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap capitalize">Wednesday</td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap uppercase">7: 10 am</td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap uppercase">40: 10 pm</td>      
                              </tr>
                              <tr className="border-b">
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap capitalize">Thursday</td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap uppercase">7: 10 am</td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap uppercase">40: 10 pm</td>      

                              </tr>
                               <tr className="border-b">
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap capitalize">Friday</td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap uppercase">7: 10 am</td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap uppercase">40: 10 pm</td>     
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

export default SingleStaffShift