import React, { useState } from 'react';
import Navbar from '../../Component/Navbar';
import Sidebar from '../../Component/Aside';
import { Link } from 'react-router-dom';
import UseSidebar from '../../utils/constant/useSidebar';


function UpdateMedicine() {
   const { sidebarOpen, toggleSidebar } = UseSidebar();

  return (
    <div className="flex flex-col h-screen overflow-hidden ">
      <div className="flex flex-1 relative">

        <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

        <div className="flex flex-col flex-1 bg-gray-50 overflow-x-hidden overflow-y-auto">
          <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

          <main className="max-h-screen flex flex-col  h-[100vh]"> 

          <nav className="bg-white py-2.5">
                <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex">
                  <div className=" mx-auto">                       
                      <input type="text" className="text-md w-1/100 relative flex-auto rounded-lg border border-solid border-gray-300 bg-white py-2 px-3 text-black focus:outline-none" placeholder="search for Order" />
                    </div>                     
              </div>
          </nav>

            <div className="w-full py-6 mx-auto">
             <h6 className="pb-5 font-bold px-1.5 lg:px-6 text-4xl capitalize">Update Medicine</h6>

               <div className="flex flex-wrap py-3">
                  <div className="flex-none w-full max-w-full">
                    <div className=" flex flex-col mb-10 break-words bg-white border-0 border-transparent border-solid bg-clip-border">     
                      <div className="flex-auto px-0 pt-0 pb-2">
                        <div className="p-0 overflow-x-auto">
                        <form>
                          <div className="px-4">
                            <div className="pb-12">
                              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3 py-3">
                                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Medicine_Category</label>
                                  <div className="mt-2">
                                  <select className="block w-full px-5 rounded-md border border-solid border-gray-300 py-1.5 text-gray-900 shadow-sm focus:outline-none sm:leading-6">
                                      <option>United States</option>
                                      <option>Canada</option>
                                      <option>Mexico</option>
                                    </select>
                                  </div>
                                </div>

                                <div className="sm:col-span-3  py-3">
                                  <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Medicine</label>
                                  <div className="mt-2">
                                    <input type="text"className="block w-full px-5 rounded-md border border-solid border-gray-300 py-1.5 text-gray-900 shadow-sm focus:outline-none sm:leading-6"/>
                                  </div>
                                </div>

                                <div className="sm:col-span-3  py-3">
                                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Total_Quantity</label>
                                  <div className="mt-2">
                                    <input type="text" className="block w-full px-5 rounded-md border border-solid border-gray-300 py-1.5 text-gray-900 shadow-sm focus:outline-none sm:leading-6"/>
                                  </div>
                                </div>

                                <div className="sm:col-span-3  py-3">
                                  <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                                  <div className="mt-2">
                                    <input type="text" className="block w-full px-5 rounded-md border border-solid border-gray-300 py-1.5 text-gray-900 shadow-sm focus:outline-none sm:leading-6"/>
                                  </div>
                                </div>

                                <div className="sm:col-span-2  py-3">
                                  <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">Barcode</label>
                                  <div className="mt-2">
                                    <input type="text" className="block w-full px-5 rounded-md border border-solid border-gray-300 py-1.5 text-gray-900 shadow-sm focus:outline-none sm:leading-6"/>
                                  </div>
                                </div>

                                <div className="sm:col-span-2  py-3">
                                  <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">Aisle</label>
                                  <div className="mt-2">
                                    <input type="text" className="block w-full px-5 rounded-md border border-solid border-gray-300 py-1.5 text-gray-900 shadow-sm focus:outline-none sm:leading-6"/>
                                  </div>
                                </div>

                                <div className="sm:col-span-2  py-3">
                                  <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">Expiry_Date</label>
                                  <div className="mt-2">
                                    <input type="text" className="block w-full px-5 rounded-md border border-solid border-gray-300 py-1.5 text-gray-900 shadow-sm focus:outline-none sm:leading-6"/>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
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

export default UpdateMedicine