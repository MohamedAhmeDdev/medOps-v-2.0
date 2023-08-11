import React, { useState } from 'react';
import Navbar from '../../Component/Navbar';
import Sidebar from '../../Component/Aside';

function SingleOrderDelivery() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };


 return(
  <div className="flex flex-col h-screen overflow-hidden ">
  <div className="flex flex-1 relative">

    <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

    <div className="flex flex-col flex-1 bg-indigo-50 overflow-x-hidden overflow-y-auto">
      <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

      <main class="max-h-screen flex flex-col  h-[100vh]"> 
       <div class="w-full px-3 lg:px-6 py-6 mx-auto">
      
     
        <h6 class="pb-5 font-bold text-4xl capitalize">Order Id 5454</h6>

        <div class="flex flex-wrap pb-10">
          <div class="w-full max-w-full px-3 mt-6 md:w-7/12 md:flex-none">
            <div class="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
              <div class="p-6 px-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                <h6 class="mb-0 text-xl">Orders</h6>
              </div>
              <div class="flex-auto p-4 pt-6">
                <ul class="flex flex-col pl-0 mb-0 rounded-lg">
                <li class="relative flex justify-around p-6 mb-2 border-0 rounded-t-inherit rounded-xl bg-gray-50">
                    <div class="flex items-center">
                      <div class="flex flex-col">
                      <span class="mb-2 font-bold  text-xl">Medicine Name:</span>
                      <span class="mb-2  text-xlg">Maramoja</span>
                      </div>
                    </div>

                    <div class="flex flex-col items-center justify-center">
                      <span class="mb-2 font-bold  text-xl">Price:</span>
                      <span class="mb-2  text-xlg">955</span>
                    </div>
                  </li>

                  <li class="relative flex justify-around p-6 mb-2 border-0 rounded-t-inherit rounded-xl bg-gray-50">
                    <div class="flex items-center">
                      <div class="flex flex-col">
                      <span class="mb-2 font-bold  text-xl">Medicine Name:</span>
                      <span class="mb-2  text-xlg">Maramoja</span>
                      </div>
                    </div>

                    <div class="flex flex-col items-center justify-center">
                      <span class="mb-2 font-bold  text-xl">Price:</span>
                      <span class="mb-2  text-xlg">955</span>
                    </div>
                  </li>

                </ul>
              </div>
            </div>
          </div>
          <div class="w-full max-w-full px-3 mt-6 md:w-5/12 md:flex-none">
            <div class="relative flex flex-col h-full min-w-0 mb-6 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">    
              <div class="flex-auto p-4 pt-6">
                <h6 class="my-4 font-bold leading-tight uppercase text-xs text-slate-500">Customer information</h6>
                <ul class="flex flex-col px-10 mb-0 rounded-lg">
                  <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 rounded-t-inherit text-inherit rounded-xl">
                    <div class="flex items-center">
                      <div class="flex flex-col">
                        <h6 class="mb-1 leading-normal text-sm text-slate-700">Order Id</h6>
                      </div>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                      <p class="relative z-10 inline-block m-0 font-semibold leading-normal text-black text-sm bg-clip-text">5454</p>
                    </div>
                  </li>
                  <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 border-t-0 text-inherit rounded-xl">
                    <div class="flex items-center">
                   
                      <div class="flex flex-col">
                        <h6 class="mb-1 leading-normal text-sm text-slate-700">Order Date</h6>
                      </div>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                         <p class="relative z-10 inline-block m-0 font-semibold leading-normal text-black text-sm bg-clip-text">January 13, 2023 7:22 PM</p>
                    </div>
                  </li>
                  <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 border-t-0 text-inherit rounded-xl">
                    <div class="flex items-center">
                      <div class="flex flex-col">
                        <h6 class="mb-1 leading-normal text-sm text-slate-700">Order Status</h6>
                      </div>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                    <span class="bg-green-100 text-green-800 text-md  mr-2 px-2.5 rounded-lg border border-green-100">Cancelled</span>
                    </div>
                  </li>
                  <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 border-t-0 text-inherit rounded-xl">
                    <div class="flex items-center">
                      <div class="flex flex-col">
                        <h6 class="mb-1 leading-normal text-sm text-slate-700">Delivery Address</h6>
                      </div>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                         <p class="relative z-10 inline-block m-0 font-semibold leading-normal text-black text-sm bg-clip-text">eastleigh</p>
                    </div>
                  </li>
                  <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 border-t-0 text-inherit rounded-xl">
                    <div class="flex items-center">
                      <div class="flex flex-col">
                        <h6 class="mb-1 leading-normal text-sm text-slate-700">Delivery Phone</h6>
                      </div>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                         <p class="relative z-10 inline-block m-0 font-semibold leading-normal text-black text-sm bg-clip-text">eastleigh</p>
                    </div>
                  </li>
                  <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 border-t-0 text-inherit rounded-xl">
                    <div class="flex items-center">
                      <div class="flex flex-col">
                        <h6 class="mb-1 leading-normal text-sm text-slate-700">Customer Name</h6>
                      </div>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                         <p class="relative z-10 inline-block m-0 font-semibold leading-normal text-black text-sm bg-clip-text">Mohamed ahmed</p>
                    </div>
                  </li>
                  <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 border-t-0 text-inherit rounded-xl">
                    <div class="flex items-center">
                      <div class="flex flex-col">
                        <h6 class="mb-1 leading-normal text-lg font-bold text-slate-700">Total</h6>
                      </div>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                         <p class="relative z-10 inline-block m-0 font-semibold leading-normal text-black text-sm bg-clip-text">Ksh 584845</p>
                    </div>
                  </li>       
                </ul>

                 <div class="flex items-center justify-center mx-auto w-1/2 max-w-full px-3 text-right">
                    <button class="inline-block px-8 py-3 mb-0 font-bold text-center uppercase   border border-green-300 rounded-lg cursor-pointer text-4 bg-150  hover:bg-green-300">Confirm Order Delivered</button>
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

export default SingleOrderDelivery