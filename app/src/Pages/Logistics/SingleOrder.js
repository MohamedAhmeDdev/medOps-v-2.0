import React, { useState } from 'react';
import Navbar from '../../Component/Navbar';
import Sidebar from '../../Component/Aside';
import UseSidebar from '../../utils/constant/useSidebar';



function SingleOrder() {
  const { sidebarOpen, toggleSidebar } = UseSidebar();

  return (
    <div className="flex flex-col h-screen overflow-hidden ">
  <div className="flex flex-1 relative">

    <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

    <div className="flex flex-col flex-1 bg-indigo-50 overflow-x-hidden overflow-y-auto">
      <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

      <main className="max-h-screen flex flex-col  h-[100vh]"> 
       <div className="w-full px-3 lg:px-6 py-6 mx-auto">
      
     
        <h6 className="pb-5 font-bold text-lg lg:text-4xl capitalize">Order Id 5454</h6>

         <div className="flex flex-wrap pb-20 -mx-3">
          <div className="w-full max-w-full px-3 mt-6 ">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
              <div className="p-6 px-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                <h6 className="mb-0 text-xl">Orders</h6>
              </div>
              <div className="flex-auto p-4 pt-6">
                <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                <li className="relative flex justify-around p-6 mb-2 border-0 rounded-t-inherit rounded-xl bg-gray-100">
                    <div className="flex items-center">
                      <div className="flex flex-col">
                      <span className="mb-2 font-semibold text-md lg:text-lg">Medicine Name</span>
                      <span className="mb-2 text-md">Maramoja</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <span className="mb-2 font-semibold text-md lg:text-lg">Price</span>
                      <span className="mb-2 text-md">Ksh 955</span>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <span className="mb-2 font-semibold text-md lg:text-lg">Quantity</span>
                      <span className="mb-2 text-md">55</span>
                    </div>
                  </li>

                  <li className="relative flex justify-around p-6 mb-2 border-0 rounded-t-inherit rounded-xl bg-gray-100">
                    <div className="flex items-center">
                      <div className="flex flex-col">
                      <span className="mb-2 font-semibold text-md lg:text-lg">Medicine Name</span>
                      <span className="mb-2 text-md">Maramoja</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <span className="mb-2 font-semibold text-md lg:text-lg">Price</span>
                      <span className="mb-2 text-md">Ksh 955</span>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <span className="mb-2 font-semibold text-md lg:text-lg">Quantity</span>
                      <span className="mb-2 text-md">55</span>
                    </div>
                  </li>

                </ul>
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

export default SingleOrder