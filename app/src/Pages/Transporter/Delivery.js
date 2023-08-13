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

          <main class="max-h-screen flex flex-col  h-[100vh]"> 
            <div class="w-full px-1.5 lg:px-6 py-6 mx-auto">
          
            <h6 class="pb-5 font-bold text-4xl capitalize">Deliveries</h6>

               <div class="flex flex-wrap py-5">
                  <div class="flex-none w-full max-w-full">
                    <div class=" flex flex-col mb-10 break-words bg-white border-0 border-transparent border-solid rounded-2xl bg-clip-border">     
                      <div class="flex-auto px-0 pt-0 pb-2">
                        <div class="p-0 overflow-x-auto">
                          <table class="min-w-full divide-y divide-gray-200 ">
                          <thead class="align-bottom">
                              <tr>
                                <th class="p-4 text-md lg:text-lg font-medium tracking-wider text-left text-black">Order Id</th>
                                <th class="p-4 text-md lg:text-lg font-medium tracking-wider text-left text-black">Phone Number</th>
                                <th class="p-4 text-md lg:text-lg font-medium tracking-wider text-left text-black">Total Amount</th>
                                <th class="p-4 text-md lg:text-lg font-medium tracking-wider text-left text-black">Status</th>
                                <th class="p-4 text-md lg:text-lg font-medium tracking-wider text-left text-black"></th>
                                  <th class="p-4 text-md lg:text-lg font-medium tracking-wider text-left text-black">View</th>
                              </tr>
                          </thead>
                            <tbody class="bg-white ">
                              <tr class="bg-gray-50 ">
                                <td class="p-4 text-md font-normal text-gray-900 whitespace-nowrap dark:text-gray-400">4545454</td>
                                <td class="p-4 text-md font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">6466564</td>
                                <td class="p-4 text-md font-semibold text-gray-900 whitespace-nowrap dark:text-gray-400">  $2300</td>       
                                <td class="p-4 whitespace-nowrap">
                                  <span class="bg-green-100 text-green-800 text-md font-medium mr-2 px-2.5 rounded-lg border border-green-100">DELIVERED</span>
                                </td>
                                <td class="p-4 text-md font-semibold whitespace-nowrap dark:text-gray-400">
                              </td>
                                <td class="p-4 text-md font-semibold text-gray-900 whitespace-nowrap dark:text-gray-400">
                                    <Link to='/SingleOrderDelivery' class="text-md font-semibold leading-tight text-slate-400"> View </Link>
                                </td>
                              </tr>  
                              <tr>
                              < td class="p-4 text-md font-normal text-gray-900 whitespace-nowrap dark:text-gray-400">4545454</td>
                                <td class="p-4 text-md font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">6466564</td>
                                <td class="p-4 text-md font-semibold text-gray-900 whitespace-nowrap dark:text-gray-400">  $2300</td>
                                <td class="p-4 whitespace-nowrap">
                                  <span class="bg-red-100 text-red-800 text-md font-medium mr-2 px-2.5 rounded-lg border border-red-100">Cancelled</span>
                                </td>
                                <td class="p-4 text-md font-semibold whitespace-nowrap dark:text-gray-400">
                              </td>
                                <td class="p-4 text-md font-semibold text-gray-900 whitespace-nowrap dark:text-gray-400">
                                    <Link to='/SingleOrderDelivery' class="text-md font-semibold leading-tight text-slate-400"> View </Link>
                                </td>
                              </tr>
                              <tr class="bg-gray-50 ">
                              <td class="p-4 text-md font-normal text-gray-900 whitespace-nowrap dark:text-gray-400">4545454</td>
                                <td class="p-4 text-md font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">6466564</td>
                                <td class="p-4 text-md font-semibold text-gray-900 whitespace-nowrap dark:text-gray-400">  $2300</td>
                                <td class="p-4 whitespace-nowrap">
                                  <span class="bg-purple-100 text-purple-800 text-md font-medium mr-2 px-2.5 rounded-lg border border-purple-100">PENDING</span>
                                </td>
                                <td class="p-4 text-md font-semibold whitespace-nowrap dark:text-gray-400">
                                </td>
                                <td class="p-4 text-md font-semibold text-gray-900 whitespace-nowrap dark:text-gray-400">
                                    <Link to='/SingleOrderDelivery' class="text-md font-semibold leading-tight text-slate-400"> View </Link>
                                </td>
                              </tr>       
                              <tr>
                                <td class="p-4 text-md font-normal text-gray-900 whitespace-nowrap dark:text-gray-400"> 654654 </td>
                                <td class="p-4 text-md font-normal text-gray-500 whitespace-nowrap dark:text-gray-400"> 6556655 </td>
                                <td class="p-4 text-md font-semibold text-gray-900 whitespace-nowrap dark:text-gray-400"> -$560 </td>             
                                <td class="p-4 whitespace-nowrap">
                                  <span class="bg-orange-100 text-orange-800 text-md font-medium mr-2 px-2.5 rounded-lg border border-orange-100">PACKED</span>
                                </td>
                                <td class="p-4 text-md font-semibold whitespace-nowrap dark:text-gray-400">
                                </td>
                                <td class="p-4 text-md font-semibold text-gray-900 whitespace-nowrap dark:text-gray-400">
                                    <Link to='/SingleOrderDelivery' class="text-md font-semibold leading-tight text-slate-400"> View </Link>
                                </td>      
                              </tr>
                              <tr>
                                <td class="p-4 text-md font-normal text-gray-900 whitespace-nowrap dark:text-gray-400"> 654654 </td>
                                <td class="p-4 text-md font-normal text-gray-500 whitespace-nowrap dark:text-gray-400"> 6556655 </td>
                                <td class="p-4 text-md font-semibold text-gray-900 whitespace-nowrap dark:text-gray-400"> -$560 </td>             
                                <td class="p-4 whitespace-nowrap">
                                  <span class="bg-orange-100 text-orange-800 text-md font-medium mr-2 px-2.5 rounded-lg border border-orange-100">PACKED</span>
                                </td>
                                <td class="p-4 text-md font-semibold whitespace-nowrap dark:text-gray-400">
                                </td>
                                <td class="p-4 text-md font-semibold text-gray-900 whitespace-nowrap dark:text-gray-400">
                                    <Link to='/SingleOrderDelivery' class="text-md font-semibold leading-tight text-slate-400"> View </Link>
                                </td>      
                              </tr>
                              <tr>
                                <td class="p-4 text-md font-normal text-gray-900 whitespace-nowrap dark:text-gray-400"> 654654 </td>
                                <td class="p-4 text-md font-normal text-gray-500 whitespace-nowrap dark:text-gray-400"> 6556655 </td>
                                <td class="p-4 text-md font-semibold text-gray-900 whitespace-nowrap dark:text-gray-400"> -$560 </td>             
                                <td class="p-4 whitespace-nowrap">
                                  <span class="bg-orange-100 text-orange-800 text-md font-medium mr-2 px-2.5 rounded-lg border border-orange-100">PACKED</span>
                                </td>
                                <td class="p-4 text-md font-semibold whitespace-nowrap dark:text-gray-400">
                                </td>
                                <td class="p-4 text-md font-semibold text-gray-900 whitespace-nowrap dark:text-gray-400">
                                    <Link to='/SingleOrderDelivery' class="text-md font-semibold leading-tight text-slate-400"> View </Link>
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