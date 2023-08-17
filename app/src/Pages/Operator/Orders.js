import React, { useState } from 'react';
import Navbar from '../../Component/Navbar';
import Sidebar from '../../Component/Aside';
import { Link } from 'react-router-dom';
import UseSidebar from '../../utils/constant/useSidebar';

function Orders() {
  const { sidebarOpen, toggleSidebar } = UseSidebar();

  return (
     <div className="flex flex-col h-screen overflow-hidden ">
      <div className="flex flex-1 relative">

        <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

        <div className="flex flex-col flex-1 bg-indigo-50 overflow-x-hidden overflow-y-auto">
          <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

          <main className="max-h-screen flex flex-col  h-[100vh]"> 
        
            <nav className="bg-white py-2.5">
                <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex">
                  <div className=" mx-auto">                       
                      <input type="text" className="text-md w-1/100 relative flex-auto rounded-lg border border-solid border-gray-300 bg-white py-2 px-3 text-black focus:outline-none" placeholder="search for Order" />
                    </div>                     
              </div>
            </nav>
          
            <div className="w-full px-1.5 lg:px-6 py-6 mx-auto">
            <h6 className="pb-5 font-bold text-4xl capitalize">Orders</h6>

               <div className="flex flex-wrap py-5">
                  <div className="flex-none w-full max-w-full">
                    <div className=" flex flex-col mb-10 break-words bg-white border-0 border-transparent border-solid rounded-lg bg-clip-border">     
                      <div className="flex-auto px-0 pt-0 pb-2">
                        <div className="p-0 overflow-x-auto">
                          <table className="min-w-full divide-y divide-gray-200 ">
                          <thead className="align-bottom">
                              <tr>
                                <th className="p-4 text-md lg:text-lg font-medium tracking-wider text-left text-black">Order Id</th>
                                <th className="p-4 text-md lg:text-lg font-medium tracking-wider text-center text-black">Phone Number</th>
                                <th className="p-4 text-md lg:text-lg font-medium tracking-wider text-center text-black">Total Amount</th>
                                <th className="p-4 text-md lg:text-lg font-medium tracking-wider text-left text-black">Status</th>
                                <th className="p-4 text-md lg:text-lg font-medium tracking-wider text-left text-black">Action</th>
                                <th className="p-4 text-md lg:text-lg font-medium tracking-wider text-left text-black"></th>
                              </tr>
                          </thead>
                            <tbody className="bg-white ">
                              <tr className="bg-gray-100 ">
                                <td className="p-4 text-md font-normal text-center text-gray-900 whitespace-nowrap dark:text-gray-400">4545454</td>
                                <td className="p-4 text-md font-normal text-center text-gray-500 whitespace-nowrap dark:text-gray-400">6466564</td>
                                <td className="p-4 text-md font-semibold text-center text-gray-900 whitespace-nowrap dark:text-gray-400">$2300</td>       
                                <td className="p-4 whitespace-nowrap">
                                   <span className="bg-red-200 text-red-800 text-md font-medium mr-2 px-2.5 py-0.5 rounded-lg border border-red-100">PENDING</span>
                                </td>
                                 <td className="p-4 whitespace-nowrap">
                                  <span className="bg-green-300 text-green-800 text-md font-medium mr-2 cursor-pointer px-2.5 py-1.5 rounded-md border border-green-100 capitalize">Confirm Order Packed</span>
                                </td>
                                <td className="p-4 text-md font-semibold text-gray-900 whitespace-nowrap dark:text-gray-4006">
                                    <Link to='/SingleOrder' className="text-md font-semibold leading-tight text-slate-400"> View </Link>
                                </td>
                              </tr>  
                              <tr>
                             <td className="p-4 text-md font-normal text-center text-gray-900 whitespace-nowrap dark:text-gray-400">4545454</td>
                                <td className="p-4 text-md font-normal text-center text-gray-500 whitespace-nowrap dark:text-gray-400">6466564</td>
                                <td className="p-4 text-md font-semibold text-center text-gray-900 whitespace-nowrap dark:text-gray-400">  $2300</td>
                                <td className="p-4 whitespace-nowrap">
                                  <span className="bg-red-200 text-red-800 text-md font-medium mr-2 px-2.5 py-0.5 rounded-lg border border-red-100">PENDING</span>
                                </td>
                                <td className="p-4 whitespace-nowrap">
                                  <span className="bg-green-300 text-green-800 text-md cursor-pointer font-medium mr-2 px-2.5 py-1.5 rounded-md border border-green-100 capitalize">Confirm Order Packed</span>
                                </td>
                                <td className="p-4 text-md font-semibold text-gray-900 whitespace-nowrap dark:text-gray-400">
                                    <Link to='/SingleOrder' className="text-md font-semibold leading-tight text-slate-400"> View </Link>
                                </td>
                              </tr>
                              <tr className="bg-gray-100 ">
                             <td className="p-4 text-md font-normal text-center text-gray-900 whitespace-nowrap dark:text-gray-400">4545454</td>
                                <td className="p-4 text-md font-normal text-center text-gray-500 whitespace-nowrap dark:text-gray-400">6466564</td>
                                <td className="p-4 text-md font-semibold text-gray-900 text-center whitespace-nowrap dark:text-gray-400">  $2300</td>
                                <td className="p-4 whitespace-nowrap">
                                   <span className="bg-red-200 text-red-800 text-md font-medium mr-2 px-2.5 py-0.5 rounded-lg border border-red-100">PENDING</span>
                                </td>
                                <td className="p-4 whitespace-nowrap">
                                  <span className="bg-green-300 text-green-800 text-md font-medium mr-2 px-2.5 py-1.5 cursor-pointer rounded-md border border-green-100 capitalize">Confirm Order Packed</span>
                                </td>
                                <td className="p-4 text-md font-semibold text-gray-900 whitespace-nowrap dark:text-gray-400">
                                    <Link to='/SingleOrder' className="text-md font-semibold leading-tight text-slate-400"> View </Link>
                                </td>
                              </tr>       
                              <tr>
                                <td className="p-4 text-md font-normal text-center text-gray-900 whitespace-nowrap dark:text-gray-400"> 654654 </td>
                                <td className="p-4 text-md font-normal text-center text-gray-500 whitespace-nowrap dark:text-gray-400"> 6556655 </td>
                                <td className="p-4 text-md font-semibold text-center text-gray-900 whitespace-nowrap dark:text-gray-400"> -$560 </td>              
                                <td className="p-4 whitespace-nowrap">
                                  <span className="bg-red-200 text-red-800 text-md font-medium mr-2 px-2.5 py-0.5 rounded-lg border border-red-100">PENDING</span>
                                </td>
                                <td className="p-4 whitespace-nowrap">
                                  <span className="bg-green-300 text-green-800 text-md font-medium mr-2 px-2.5 py-1.5 cursor-pointer rounded-md border border-green-100 capitalize">Confirm Order Packed</span>
                                </td>
                                <td className="p-4 text-md font-semibold text-gray-900 whitespace-nowrap dark:text-gray-400">
                                    <Link to='/SingleOrder' className="text-md font-semibold leading-tight text-slate-400"> View </Link>
                                </td>      
                              </tr>
                              <tr className="bg-gray-100 ">
                                <td className="p-4 text-md font-normal text-center text-gray-900 whitespace-nowrap dark:text-gray-400"> 654654 </td>
                                <td className="p-4 text-md font-normal text-center text-gray-500 whitespace-nowrap dark:text-gray-400"> 6556655 </td>
                                <td className="p-4 text-md font-semibold text-center text-gray-900 whitespace-nowrap dark:text-gray-400"> -$560 </td>              
                                <td className="p-4 whitespace-nowrap">
                                   <span className="bg-red-200 text-red-800 text-md font-medium mr-2 px-2.5 py-0.5 rounded-lg border border-red-100">PENDING</span>
                                </td>
                                <td className="p-4 whitespace-nowrap">
                                  <span className="bg-green-300 text-green-800 text-md font-medium mr-2 px-2.5 py-1.5 cursor-pointer rounded-md border border-green-100 capitalize">Confirm Order Packed</span>
                                </td>
                                <td className="p-4 text-md font-semibold text-gray-900 whitespace-nowrap dark:text-gray-400">
                                    <Link to='/SingleOrder' className="text-md font-semibold leading-tight text-slate-400"> View </Link>
                                </td>      
                              </tr>
                              <tr>
                                <td className="p-4 text-md font-normal text-center text-gray-900 whitespace-nowrap dark:text-gray-400"> 654654 </td>
                                <td className="p-4 text-md font-normal text-center text-gray-500 whitespace-nowrap dark:text-gray-400"> 6556655 </td>
                                <td className="p-4 text-md font-semibold text-center text-gray-900 whitespace-nowrap dark:text-gray-400"> -$560 </td>             
                                <td className="p-4 whitespace-nowrap">
                                  <span className="bg-red-200 text-red-800 text-md font-medium mr-2 px-2.5 py-0.5 rounded-lg border border-red-100">PENDING</span>
                                </td>
                                <td className="p-4 whitespace-nowrap">
                                  <span className="bg-green-300 text-green-800 text-md font-medium mr-2 px-2.5 py-1.5 cursor-pointer rounded-md border border-green-100 capitalize">Confirm Order Packed</span>
                                </td>
                                <td className="p-4 text-md font-semibold text-gray-900 whitespace-nowrap dark:text-gray-400">
                                    <Link to='/SingleOrder' className="text-md font-semibold leading-tight text-slate-400"> View </Link>
                                </td>      
                              </tr>
                            </tbody>
                          </table>
                            <div className="grid w-full place-items-right rounded-lg p-6">
                                  <nav>
                                      <ul className="flex">
                                          <li>
                                              <a className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" href="#" aria-label="Previous">
                                              <span className="material-symbols-outlined">chevron_left</span>
                                              </a>
                                          </li>
                                          <li>
                                              <a className="mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-pink-600 to-pink-400 p-0 text-sm text-white shadow-md shadow-pink-500/20 transition duration-150 ease-in-out" href="#">1</a>
                                          </li>
                                          <li>
                                              <a className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" href="#">2</a>
                                          </li>
                                          <li>
                                              <a className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" href="#">3</a>
                                          </li>
                                          <li>
                                              <a className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" href="#" aria-label="Next">
                                              <span className="material-symbols-outlined">chevron_right</span>
                                              </a>
                                          </li>
                                      </ul>
                                  </nav>
                            </div>
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

export default Orders