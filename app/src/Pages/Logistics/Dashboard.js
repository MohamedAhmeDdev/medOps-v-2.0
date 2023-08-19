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
          
            <h6 className="pb-5 font-bold text-lg lg:text-4xl capitalize">Dashboard</h6>

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
                  <div className="p-4 pb-0 mb-0">
                    <div className="flex flex-wrap">
                      <div className="flex items-center flex-none px-3">
                        <h6 className="mb-0 font-bold">Personal Information</h6>
                      </div>          
                    </div>
                  </div>
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap ">
                    <div className="max-w-full px-3 py-3 mb-6  w-1/2">
                       <h6 className="mb-2">Full Name</h6>  
                        <div className="relative flex flex-row items-center flex-auto px-5 py-1 break-words bg-transparent border border-solid shadow-none rounded-md border-slate-300 bg-clip-border">
                          <h6 className="mb-0 text-lg mx-auto">Juma Ali</h6>                        
                        </div>
                      </div>

                      <div className="max-w-full px-3 py-3 mb-6  w-1/2">
                        <h6 className="mb-2">Job Title</h6>  
                        <div className="relative flex flex-row items-center flex-auto min-w-0 px-5 py-1 break-words bg-transparent border border-solid shadow-none rounded-md border-slate-300 bg-clip-border">
                          <h6 className="mb-0 text-lg mx-auto">Transporter</h6> 
                        </div>
                      </div>

                      <div className="max-w-full px-3 py-3 mb-6  w-1/2">
                        <h6 className="mb-2">Phone Number</h6>  
                        <div className="relative flex flex-row items-center flex-auto min-w-0 px-5 py-1 break-words bg-transparent border border-solid shadow-none rounded-md border-slate-300 bg-clip-border">
                          <h6 className="mb-0 text-lg mx-auto">d65656</h6> 
                        </div>
                      </div>

                      <div className="max-w-full px-3 py-3 mb-6  w-1/2">
                        <h6 className="mb-2">Address</h6>  
                        <div className="relative flex flex-row items-center flex-auto min-w-0 px-5 py-1 break-words bg-transparent border border-solid shadow-none rounded-md border-slate-300 bg-clip-border">
                          <h6 className="mb-0 text-lg mx-auto">fdfd</h6> 
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <hr className='w-9/12 mx-auto'/>

                  <div className="p-4 pb-0 mb-0">
                    <div className="flex flex-wrap">
                      <div className="flex items-center flex-none px-3">
                        <h6 className="mb-0">Company Information</h6>
                      </div>          
                    </div>
                  </div>
                  <div className="flex-auto pt-10 p-4">
                    <div className="flex flex-wrap">
                      <div className="max-w-full px-3 py-3 mb-6  w-1/2">
                        <h6 className="mb-2">Manager</h6>  
                        <div className="relative flex flex-row items-center flex-auto min-w-0 px-5 py-1 break-words bg-transparent border border-solid shadow-none rounded-md border-slate-300 bg-clip-border">
                          <h6 className="mb-0 text-lg mx-auto">cane</h6> 
                        </div>
                      </div>

                      <div className="max-w-full px-3 py-3 mb-6  w-1/2">
                        <h6 className="mb-2">Phone Number</h6>  
                        <div className="relative flex flex-row items-center flex-auto min-w-0 px-5 py-1 break-words bg-transparent border border-solid shadow-none rounded-md border-slate-300 bg-clip-border">
                          <h6 className="mb-0 text-lg mx-auto">d65656</h6> 
                        </div>
                      </div>

                        <div className="max-w-full px-3 py-3 mb-6  w-1/2">
                        <h6 className="mb-2">Address</h6>  
                        <div className="relative flex flex-row items-center flex-auto min-w-0 px-5 py-1 break-words bg-transparent border border-solid shadow-none rounded-md border-slate-300 bg-clip-border">
                          <h6 className="mb-0 text-lg mx-auto">fdfd</h6> 
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
  );
}

export default Dashboard