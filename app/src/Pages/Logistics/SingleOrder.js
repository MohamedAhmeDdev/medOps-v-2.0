import React, { useState, useRef } from 'react';
import Navbar from '../../Component/Navbar';
import Sidebar from '../../Component/Aside';
import UseSidebar from '../../utils/constant/useSidebar';
import ReactToPrint from "react-to-print";
// import { ipcRenderer } from 'electron';



function SingleOrder() {
  const { sidebarOpen, toggleSidebar } = UseSidebar();
  let componentRef = useRef();


  return (
    <div className="flex flex-col h-screen overflow-hidden ">
  <div className="flex flex-1 relative">

    <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

    <div className="flex flex-col flex-1 bg-indigo-50 overflow-x-hidden overflow-y-auto">
      <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

      <main className="max-h-screen flex flex-col  h-[100vh]"> 
       <div className="w-full px-3 lg:px-6 py-6 mx-auto">
          <h6 className="pb-5 font-bold text-lg lg:text-4xl capitalize">Order Id 5454</h6>

          <div className="w-full text-right">
            <ReactToPrint trigger={() => <button className='hover:bg-blue-300 text-green-800 text-md cursor-pointer font-medium mr-2 px-2.5 py-1.5 border border-blue-400'>Print Shipping Label</button>} content={() => componentRef} />
          </div>

          <div className="flex flex-wrap pb-20 -mx-3">
          <div className="w-full max-w-full px-3 mt-6 ">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 rounded-2xl bg-clip-border">
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
          <div className="w-full max-w-full px-3 mt-6 md:w-5/12 hidden">
          <div className="relative flex flex-col h-full min-w-0 mb-6 break-words bg-white  border border-black" ref={(el) => (componentRef = el)}>
            <div className="flex-auto p-4 pt-6">
            <div className="text-center border-b pb-5 border-black">
                <h2 className="text-xl text-black font-semibold">Shipping Label</h2>
                <p className="text-lg text-black">MedOps</p>
              </div>

              <div className="mb-6">
                <h6 className="my-4 font-bold leading-tight uppercase text-xs text-slate-500">Sender's Information:</h6>
                <p className="text-sm font-medium">MedOps</p>
                <p>789 Pharmacy Lane</p>
                <p>Cityville, State 54321</p>
                <p>Phone: (123) 456-7890</p>
                <p>Email: pharmacy@example.com</p>
              </div>
              
              <div className="mb-6">
                <h6 className="my-4 font-bold leading-tight uppercase text-xs text-slate-500">Recipient's Information:</h6>
                <p className="text-sm font-medium">Customer Name</p>
                <p>123 Elm Street</p>
                <p>Townsville, State 98765</p>
                <p>Phone: (987) 654-3210</p>
              </div>
              
              <div className="mb-6 border-t border-black">
                <h6 className="my-4 font-bold leading-tight uppercase text-xs text-slate-500">Tracking Number:</h6>
                <p className="text-sm font-medium">5678901234</p>
              </div>
              
              <div className="mb-6">
                <img src="[BarcodeImage]" alt="Barcode" className="w-2/3 mx-auto" />
              </div>
              
              <div className="mb-6">
                <img src="[QRCodeImage]" alt="QR Code" className="w-1/2 mx-auto" />
              </div>
              
              <div className="mb-6 border-t border-black">
                <h6 className="my-4 font-bold leading-tight uppercase text-xs text-slate-500">Special Instructions:</h6>
                <p className="text-sm font-medium">Store in Cool, Dry Place.</p>
                <p className="text-sm font-medium">Handle with Care.</p>
                <p className="text-sm font-medium">Keep Out of Reach of Children.</p>
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

export default SingleOrder