import React, { useState } from 'react';
import Navbar from '../../Component/Navbar';
import Sidebar from '../../Component/Aside';
import UseSidebar from '../../utils/constant/useSidebar';


function SingleOrderDelivery() {
  const { sidebarOpen, toggleSidebar } = UseSidebar();

 return(
  <div className="flex flex-col h-screen overflow-hidden ">
  <div className="flex flex-1 relative">

    <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

    <div className="flex flex-col flex-1 bg-indigo-50 overflow-x-hidden overflow-y-auto">
      <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

      <main className="max-h-screen flex flex-col  h-[100vh]"> 
       <div className="w-full px-3 lg:px-6 py-6 mx-auto">
      
     
        <h6 className="pb-5 font-bold text-lg lg:text-4xl capitalize">Order Id 5454</h6>

         <div className="flex flex-wrap pb-20 -mx-3">
          <div className="w-full max-w-full px-3 mt-6 md:w-7/12 md:flex-none">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-lg bg-clip-border">
              <div className="p-6 px-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                <h6 className="mb-0 text-xl">Orders</h6>
              </div>
              <div className="flex-auto p-4 pt-6">
                <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                <li className="relative flex justify-around p-6 mb-2 border-0 rounded-t-inherit rounded-xl bg-gray-100">
                    <div className="flex items-center">
                      <div className="flex flex-col">
                      <span className="mb-2 font-semibold text-md lg:text-lg capitalize">Medicine Name</span>
                      <span className="mb-2 text-md capitalize">Maramoja</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <span className="mb-2 font-semibold text-md lg:text-lg">Price</span>
                      <span className="mb-2 text-md">955</span>
                    </div>
                  </li>

                  <li className="relative flex justify-around p-6 mb-2 border-0 rounded-t-inherit rounded-xl bg-gray-100">
                    <div className="flex items-center">
                      <div className="flex flex-col">
                      <span className="mb-2 font-semibold text-md lg:text-lg capitalize">Medicine Name</span>
                      <span className="mb-2 text-md capitalize">Maramoja</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <span className="mb-2 font-semibold text-md lg:text-lg">Price</span>
                      <span className="mb-2 text-md">955</span>
                    </div>
                  </li>

                </ul>
              </div>
          </div>
          </div>
          <div className="w-full max-w-full px-3 mt-6 md:w-5/12 md:flex-none">
          <div className="relative flex flex-col h-full min-w-0 mb-6 break-words bg-white border-0 shadow-soft-xl rounded-lg bg-clip-border">    
              <div className="flex-auto p-4 pt-6">
                <h6 className="my-4 font-bold leading-tight uppercase text-xs text-slate-500">Customer information</h6>
                <ul className="flex flex-col px-10 mb-0 rounded-lg">
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 rounded-t-inherit text-inherit rounded-xl">
                    <div className="flex items-center">
                      <div className="flex flex-col">
                        <h6 className="mb-1 leading-normal text-sm text-black font-bold">Order Id:</h6>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <p className="relative inline-block m-0 leading-normal text-slate-700 text-sm bg-clip-text">5454</p>
                    </div>
                  </li>
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 border-t-0 text-inherit rounded-xl">
                    <div className="flex items-center">
                      <div className="flex flex-col">
                        <h6 className="mb-1 leading-normal text-sm text-black font-bold">Order Date:</h6>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                         <p className="relative inline-block m-0 leading-normal text-slate-700 text-sm bg-clip-text capitalize">January 13, 2023 7:22 PM</p>
                    </div>
                  </li>
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 border-t-0 text-inherit rounded-xl">
                    <div className="flex items-center">
                      <div className="flex flex-col">
                        <h6 className="mb-1 leading-normal text-sm text-black font-bold">Order Status:</h6>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                    <span className="bg-green-200 text-green-400 text-md font-medium  mr-2 px-2.5 rounded-lg border border-green-50">Cancelled</span>
                    </div>
                  </li>
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 border-t-0 text-inherit rounded-xl">
                    <div className="flex items-center">
                      <div className="flex flex-col">
                        <h6 className="mb-1 leading-normal text-sm text-black font-bold">Delivery Address:</h6>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                         <p className="relative inline-block m-0 leading-normal text-slate-700 text-sm bg-clip-text capitalize">eastleigh</p>
                    </div>
                  </li>
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 border-t-0 text-inherit rounded-xl">
                    <div className="flex items-center">
                      <div className="flex flex-col">
                        <h6 className="mb-1 leading-normal text-sm text-black font-bold">Phone Number:</h6>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                         <p className="relative inline-block m-0 leading-normal text-slate-700 text-sm bg-clip-text">eastleigh</p>
                    </div>
                  </li>
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 border-t-0 text-inherit rounded-xl">
                    <div className="flex items-center">
                      <div className="flex flex-col">
                        <h6 className="mb-1 leading-normal text-sm text-black font-bold">Customer Name:</h6>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                         <p className="relative inline-block m-0 leading-normal text-slate-700 text-sm bg-clip-text capitalize">Mohamed ahmed</p>
                    </div>
                  </li>
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 border-t-0 text-inherit rounded-xl">
                    <div className="flex items-center">
                      <div className="flex flex-col">
                        <h6 className="mb-1 leading-normal text-lg font-bold text-black">Total:</h6>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                         <p className="relative inline-block m-0 leading-normal text-slate-700 text-slg bg-clip-text">Ksh 584845</p>
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

export default SingleOrderDelivery