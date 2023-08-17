import React, { useState } from 'react';
import Navbar from '../../Component/Navbar';
import Sidebar from '../../Component/Aside';
import { Link } from 'react-router-dom';
import UseSidebar from '../../utils/constant/useSidebar';


function Delivery() {
  const { sidebarOpen, toggleSidebar } = UseSidebar();

  return (
    <div className="flex flex-col h-screen overflow-hidden ">
      <div className="flex flex-1 relative">

        <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

        <div className="flex flex-col flex-1 bg-indigo-50 overflow-x-hidden overflow-y-auto">
          <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

          <main className="max-h-screen flex flex-col  h-[100vh]"> 
            <div className="w-full px-1.5 lg:px-6 py-6 mx-auto">
          
            <h6 className="pb-5 font-bold text-4xl capitalize">Deliveries</h6>

               <div className="flex flex-wrap py-5">
                  <div className="flex-none w-full max-w-full">
                    <div className=" flex flex-col mb-10 break-words bg-white border-0 border-transparent border-solid rounded-lg bg-clip-border">     
                      <div className="flex-auto px-0 pt-0 pb-2">
                        <div className="p-0 overflow-x-auto">
                          <table className="min-w-full divide-y divide-gray-200 ">
                          <thead className="align-bottom">
                              <tr>
                                <th className="p-4 text-md lg:text-lg font-medium tracking-wider text-center text-black">Order Id</th>
                                <th className="p-4 text-md lg:text-lg font-medium tracking-wider text-center text-black">Phone Number</th>
                                <th className="p-4 text-md lg:text-lg font-medium tracking-wider text-center text-black">Total Amount</th>
                                <th className="p-4 text-md lg:text-lg font-medium tracking-wider text-center text-black">Status</th>
                                <th className="p-4 text-md lg:text-lg font-medium tracking-wider text-center text-black"></th>
                              </tr>
                          </thead>
                            <tbody className="bg-white ">
                              <tr className="bg-gray-100 ">
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400">4545454</td>
                                <td className="p-4 text-md text-center font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">6466564</td>
                                <td className="p-4 text-md text-center font-semibold text-gray-900 whitespace-nowrap dark:text-gray-400">$2300</td>       
                                <td className="p-4 whitespace-nowrap text-center">
                                  <span className="bg-green-200 text-green-400 text-md font-medium mr-2 px-2.5 rounded-lg border border-green-50">DELIVERED</span>
                                </td>
                                
                                <td className="p-4 text-md font-semibold text-gray-900 whitespace-nowrap dark:text-gray-400">
                                    <Link to='/SingleOrderDelivery' className="text-md font-semibold leading-tight text-slate-400 hover:text-blue-500"> View </Link>
                                </td>
                              </tr>  
                              <tr>
                              < td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400">4545454</td>
                                <td className="p-4 text-md text-center font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">6466564</td>
                                <td className="p-4 text-md text-center font-semibold text-gray-900 whitespace-nowrap dark:text-gray-400">$2300</td>
                                <td className="p-4 whitespace-nowrap text-center">
                                  <span className="bg-red-200 text-red-400 text-md font-medium mr-2 px-2.5 rounded-lg border border-red-50">Cancelled</span>
                                </td>
                                <td className="p-4 text-md font-semibold text-gray-900 whitespace-nowrap dark:text-gray-400">
                                    <Link to='/SingleOrderDelivery' className="text-md font-semibold leading-tight text-slate-400 hover:text-blue-500"> View </Link>
                                </td>
                              </tr>
                              <tr className="bg-gray-50 ">
                              <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400">4545454</td>
                                <td className="p-4 text-md text-center font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">6466564</td>
                                <td className="p-4 text-md text-center font-semibold text-gray-900 whitespace-nowrap dark:text-gray-400">$2300</td>
                                <td className="p-4 whitespace-nowrap text-center">
                                  <span className="bg-purple-200 text-purple-400 text-md font-medium mr-2 px-2.5 rounded-lg border border-purple-50">PENDING</span>
                                </td>
                                <td className="p-4 text-md font-semibold text-gray-900 whitespace-nowrap dark:text-gray-400">
                                    <Link to='/SingleOrderDelivery' className="text-md font-semibold leading-tight text-slate-400 hover:text-blue-500"> View </Link>
                                </td>
                              </tr>       
                              <tr>
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400"> 654654 </td>
                                <td className="p-4 text-md text-center font-normal text-gray-500 whitespace-nowrap dark:text-gray-400"> 6556655 </td>
                                <td className="p-4 text-md text-center font-semibold text-gray-900 whitespace-nowrap dark:text-gray-400"> -$560 </td>             
                                <td className="p-4 whitespace-nowrap text-center">
                                  <span className="bg-orange-200 text-orange-400 text-md font-medium mr-2 px-2.5 rounded-lg border border-orange-50">PACKED</span>
                                </td>
                                
                                <td className="p-4 text-md font-semibold text-gray-900 whitespace-nowrap dark:text-gray-400">
                                    <Link to='/SingleOrderDelivery' className="text-md font-semibold leading-tight text-slate-400 hover:text-blue-500"> View </Link>
                                </td>      
                              </tr>
                              <tr className="bg-gray-50 ">
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400"> 654654 </td>
                                <td className="p-4 text-md text-center font-normal text-gray-500 whitespace-nowrap dark:text-gray-400"> 6556655 </td>
                                <td className="p-4 text-md text-center font-semibold text-gray-900 whitespace-nowrap dark:text-gray-400"> -$560 </td>             
                                <td className="p-4 whitespace-nowrap text-center">
                                  <span className="bg-orange-200 text-orange-400 text-md font-medium mr-2 px-2.5 rounded-lg border border-orange-50">PACKED</span>
                                </td>
                                
                                <td className="p-4 text-md font-semibold text-gray-900 whitespace-nowrap dark:text-gray-400">
                                    <Link to='/SingleOrderDelivery' className="text-md font-semibold leading-tight text-slate-400 hover:text-blue-500"> View </Link>
                                </td>      
                              </tr>
                              <tr>
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400"> 654654 </td>
                                <td className="p-4 text-md text-center font-normal text-gray-500 whitespace-nowrap dark:text-gray-400"> 6556655 </td>
                                <td className="p-4 text-md text-center font-semibold text-gray-900 whitespace-nowrap dark:text-gray-400"> -$560 </td>             
                                <td className="p-4 whitespace-nowrap text-center">
                                  <span className="bg-orange-200 text-orange-400 text-md font-medium mr-2 px-2.5 rounded-lg border border-orange-50">PACKED</span>
                                </td>
                                
                                <td className="p-4 text-md font-semibold text-gray-900 whitespace-nowrap dark:text-gray-400">
                                    <Link to='/SingleOrderDelivery' className="text-md font-semibold leading-tight text-slate-400 hover:text-blue-500"> View </Link>
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
  );
}

export default Delivery