import React, { useState } from 'react';
import Navbar from '../../../Component/Navbar';
import Sidebar from '../../../Component/Aside';
import UseSidebar from '../../../utils/constant/useSidebar';

function UpdateTransport() {
  const { sidebarOpen, toggleSidebar } = UseSidebar();

  return (
    <div className="flex flex-col h-screen overflow-hidden">
    <div className="flex flex-1 relative">

      <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

      <div className="flex flex-col flex-1 bg-gray-50 overflow-x-hidden overflow-y-auto">
        <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

        <main className="max-h-screen flex flex-col py-5 h-[100vh]"> 
          <div className="w-full px-3  mx-auto">
        
          <h6 className="pb-5 font-bold text-lg lg:text-lg capitalize">Dashboard</h6>


           <div className="max-w-full pb-20 lg:mb-0 lg:w-full lg:flex-none">
                <div className="relative flex flex-col min-w-0 mt-6 break-words bg-white border-0 border-transparent border-solid rounded-lg">
                <section >
                  <div>
                      <div className="p-6 bg-white rounded-lg">
                          <div className="pb-6 border-b">
                              <h2 className="text-xl font-bold text-gray-800 md:text-3xl dark:text-gray-300">Update Transport</h2>
                          </div>

                          <div className="py-6 border-b border-gray-100">
                            <div className="w-full md:w-9/12">
                                <div className="flex flex-wrap -m-3">
                                    <div className="w-full p-3 md:w-1/3">
                                        <p className="text-base font-semibold text-gray-700 dark:text-gray-400">Staff</p>
                                    </div>
                                    <div className="w-full p-3 md:flex-1">
                                        <select className="appearence-none dark:text-gray-400 w-full py-2.5 px-4 text-black text-base font-normal border border-gray-200 rounded-lg focus:outline-none">
                                            <option>Select</option>
                                            <option>Canada</option>
                                            <option>Portugal</option>
                                            <option>Nepal</option>
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
                                           <input type="text" className="w-full px-4 py-2.5 text-base text-black rounded-lg font-normal border border-gray-200 focus:outline-none"/>
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
                                           <input type="text" className="w-full px-4 py-2.5 text-base text-black rounded-lg font-normal border border-gray-200 focus:outline-none"/>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="py-6 border-b border-gray-100">
                              <div className="w-full md:w-9/12">
                                  <div className="flex flex-wrap -m-3">
                                      <div className="w-full p-3 md:w-1/3">
                                          <p className="text-sm font-semibold text-gray-400">Role</p>
                                      </div>
                                      <div className="w-full p-3 md:flex-1">
                                          <input type="text" className="w-full px-4 py-2.5 text-base text-black rounded-lg font-normal border border-gray-200 focus:outline-none"/>
                                      </div>
                                  </div>
                              </div>
                          </div>
                              <div className="w-full md:w-auto mt-10 p-1.5">
                                  <button className="flex flex-wrap justify-center w-full px-4 py-2 text-md font-medium text-white bg-blue-500 border border-blue-500 rounded-md hover:bg-blue-600 ">
                                       Update
                                  </button>
                              </div>
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