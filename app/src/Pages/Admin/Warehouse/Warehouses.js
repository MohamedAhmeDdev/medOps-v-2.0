import React, { useState } from 'react';
import Navbar from '../../../Component/Navbar';
import Sidebar from '../../../Component/Aside';
import { Link } from 'react-router-dom';
import UseSidebar from '../../../utils/constant/useSidebar';

function Warehouses() {
  const { sidebarOpen, toggleSidebar } = UseSidebar();

 return (
   <div className="flex flex-col h-screen overflow-hidden ">
      <div className="flex flex-1 relative">

        <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

        <div className="flex flex-col flex-1 bg-gray-50 overflow-x-hidden overflow-y-auto">
          <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

          <main className="max-h-screen flex flex-col  h-[100vh]"> 

            <div className="w-full py-6 mx-auto">
            <h6 className="pb-5 font-bold px-1.5 lg:px-6 text-lg capitalize">Warehouse</h6>
            <Link to='/CreateWarehouse'>
                <div className="flex justify-end pr-5">
                  <div className="flex hover:bg-blue-200 text-blue-800 text-sm cursor-pointer ml-auto px-2.5 py-1.5">
                    <span className="material-symbols-outlined">add</span>
                    <p className="text-md text-blue-800 capitalize">Add Warehouse</p>
                  </div>
                </div>
              </Link>

               <div className="flex flex-wrap py-3">
                  <div className="flex-none w-full max-w-full">
                    <div className=" flex flex-col mb-10 break-words bg-white border-0 border-transparent border-solid bg-clip-border">     
                      <div className="flex-auto px-0 pt-0 pb-2">
                        <div className="p-0 overflow-x-auto ">
                          <table className="min-w-full divide-y divide-gray-200 ">
                          <thead className="align-bottom">
                              <tr>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Warehouse_Name</th>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Warehouse_Address</th>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Manager</th>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Created_Date</th>
                                <th className="p-4 text-md font-medium tracking-wider text-left text-black"></th>
                              </tr>
                          </thead>
                            <tbody className="bg-white ">
                              <tr className="bg-gray-50 ">
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400 capitalize">pain killer</td>
                                <td className="p-4 text-md text-center text-gray-500 whitespace-nowrap dark:text-gray-400 capitalize">Mara moja</td>
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400">44</td>        
                                <td className="p-4 text-sm text-center text-gray-900 whitespace-nowrap dark:text-gray-400">7/5/2023</td>
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400 cursor-pointer">
                                   < Link to='/UpdateWarehouse' className="text-md font-semibold leading-tight text-slate-400 hover:text-blue-500">Edit </Link>
                                </td>
                              </tr>  
                              <tr>
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400 capitalize">pain killer</td>
                                <td className="p-4 text-md text-center text-gray-500 whitespace-nowrap dark:text-gray-400 capitalize">Mara moja</td>
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400">44</td>       
                                <td className="p-4 text-sm text-center text-gray-900 whitespace-nowrap dark:text-gray-400">7/5/2023</td>
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400 cursor-pointer">
                                  < Link to='/UpdateWarehouse' className="text-md font-semibold leading-tight text-slate-400 hover:text-blue-500">Edit </Link>
                                </td>
                              </tr>
                              <tr className="bg-gray-50 ">
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400 capitalize">pain killer</td>
                                <td className="p-4 text-md text-center text-gray-500 whitespace-nowrap dark:text-gray-400 capitalize">Mara moja</td>
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400">44</td>       
                                <td className="p-4 text-sm text-center text-gray-900 whitespace-nowrap dark:text-gray-400">7/5/2023</td>
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400 cursor-pointer">
                                  < Link to='/UpdateWarehouse' className="text-md font-semibold leading-tight text-slate-400 hover:text-blue-500">Edit </Link>
                                </td>
                              </tr>       
                              <tr>
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400 capitalize">pain killer</td>
                                <td className="p-4 text-md text-center text-gray-500 whitespace-nowrap dark:text-gray-400 capitalize">Mara moja</td>
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400">44</td>       
                                <td className="p-4 text-sm text-center text-gray-900 whitespace-nowrap dark:text-gray-400">7/5/2023</td>   
                                <td className="p-4 text-sm text-center text-gray-900 whitespace-nowrap dark:text-gray-400 cursor-pointer">
                                  < Link to='/UpdateWarehouse' className="text-md font-semibold leading-tight text-slate-400 hover:text-blue-500">Edit </Link>
                                </td>  
                              </tr>
                              <tr className="bg-gray-50 ">
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400 capitalize">pain killer</td>
                                <td className="p-4 text-md text-center text-gray-500 whitespace-nowrap dark:text-gray-400 capitalize">Mara moja</td>
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400">44</td>       
                                <td className="p-4 text-sm text-center text-gray-900 whitespace-nowrap dark:text-gray-400">7/5/2023</td>     
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400 cursor-pointer">
                                   < Link to='/UpdateWarehouse' className="text-md font-semibold leading-tight text-slate-400 hover:text-blue-500">Edit </Link>
                                  </td>
                              </tr>
                              <tr>
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400 capitalize">pain killer</td>
                                <td className="p-4 text-md text-center text-gray-500 whitespace-nowrap dark:text-gray-400 capitalize">Mara moja</td>
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400">44</td>       
                                <td className="p-4 text-sm text-center text-gray-900 whitespace-nowrap dark:text-gray-400">7/5/2023</td> 
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400 cursor-pointer">
                                  < Link to='/UpdateWarehouse' className="text-md font-semibold leading-tight text-slate-400 hover:text-blue-500">Edit </Link>
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

export default Warehouses