import React, { useState } from 'react';
import Navbar from '../../Component/Navbar';
import Sidebar from '../../Component/Aside';
import UseSidebar from '../../utils/constant/useSidebar';

function Dashboard() {
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

            <div className="flex flex-wrap -mx-3">
                <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                  <div className="relative  break-words bg-white rounded-2xl bg-clip-border flex flex-col">
                    <div className="mx-auto item p-4">
                      <div className="flex-none px-3">
                        <div>
                          <p className="mb-0 font-sans font-bold lg:text-lg pb-2">Notification</p>
                        </div>
                      </div>

                      <div className="px-3 flex">
                        <div className="w-20 h-20 mx-auto rounded-full flex justify-center items-center bg-gray-200">
                          <p className="font-bold text-2xl">1</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                  <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                    <div className="relative break-words bg-white rounded-2xl bg-clip-border flex flex-col">
                      <div className="mx-auto item p-4">
                        <div className="flex-none px-3">
                          <div>
                            <p className="mb-0 font-sans font-bold lg:text-lg pb-2">Todays Orders</p>
                          </div>
                        </div>

                        <div className="px-3 flex">
                          <div className="w-20 h-20 mx-auto rounded-full flex justify-center items-center bg-gray-200">
                            <p className="font-bold text-2xl">0/30</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
             </div>

             <div className="max-w-full pb-20 lg:mb-0 lg:w-full lg:flex-none">
                <div className="relative flex flex-col min-w-0 mt-6 break-words bg-white border-0 border-transparent border-solid rounded-lg bg-clip-border">
                  <div className="p-4 mb-4">
                    <h3 className="mb-4 text-xl font-semibold text-black">information</h3>
                      <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6 sm:col-span-3 py-3">
                              <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                              <input type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:focus:ring-primary-500 dark:focus:border-primary-500 focus:outline-none"/>
                          </div>
                          <div className="col-span-6 sm:col-span-3 py-3">
                              <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                              <input type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:focus:ring-primary-500 dark:focus:border-primary-500 focus:outline-none"/>
                          </div>
                          <div className="col-span-6 sm:col-span-3 py-3">
                              <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Address</label>
                              <input type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:focus:ring-primary-500 dark:focus:border-primary-500 focus:outline-none"/>
                          </div>
                          <div className="col-span-6 sm:col-span-3 py-3">
                              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">City</label>
                              <input type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:focus:ring-primary-500 dark:focus:border-primary-500 focus:outline-none"/>
                          </div>
                          <div className="col-span-6 sm:col-span-3 py-3">
                              <label htmlFor="phone-number" className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
                              <input type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:focus:ring-primary-500 dark:focus:border-primary-500 focus:outline-none"/>
                          </div>
                          <div className="col-span-6 sm:col-span-3 py-3">
                              <label htmlFor="birthday" className="block mb-2 text-sm font-medium text-gray-900">Date Of Birthday</label>
                              <input type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:focus:ring-primary-500 dark:focus:border-primary-500 focus:outline-none"/>
                          </div>
                          <div className="col-span-6 sm:col-span-3 py-3">
                              <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900">Role</label>
                              <input type="text"class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:focus:ring-primary-500 dark:focus:border-primary-500 focus:outline-none"/>
                          </div>
                          <div className="col-span-6 sm:col-span-3 py-3">
                              <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900">Function</label>
                              <input type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:focus:ring-primary-500 dark:focus:border-primary-500 focus:outline-none"/>
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

export default Dashboard