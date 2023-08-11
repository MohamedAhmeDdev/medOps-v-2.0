import React, { useState } from 'react';
import Navbar from '../../Component/Navbar';
import Sidebar from '../../Component/Aside';




function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden ">
      <div className="flex flex-1 relative">

        <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

        <div className="flex flex-col flex-1 bg-indigo-50 overflow-x-hidden overflow-y-auto">
          <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

          <main class="max-h-screen flex flex-col  h-[100vh]"> 
            <div class="w-full px-6 py-6 mx-auto">
          
            <h6 class="pb-5 font-bold text-4xl capitalize">Dashboard</h6>

            <div class="flex flex-wrap -mx-3">
                <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                  <div class="relative  break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border flex flex-col">
                    <div class="mx-auto item p-4">
                      <div class="flex-none px-3">
                        <div>
                          <p class="mb-0 font-sans font-bold text-lg">Notification</p>
                        </div>
                      </div>

                      <div class="px-3 flex">
                        <div class="w-20 h-20 rounded-full flex justify-center items-center bg-gray-200">
                          <p class="font-bold text-2xl">1</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                  <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                    <div class="relative break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border flex flex-col">
                      <div class="mx-auto item p-4">
                        <div class="flex-none px-3">
                          <div>
                            <p class="mb-0 font-sans font-bold text-lg">Todays Orders</p>
                          </div>
                        </div>

                        <div class="px-3 flex">
                          <div class="w-20 h-20 rounded-full flex justify-center items-center bg-gray-200">
                            <p class="font-bold text-2xl">0/30</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
             </div>

             <div class="max-w-full px-3 mb-4 lg:mb-0 lg:w-full lg:flex-none">
                <div class="relative flex flex-col min-w-0 mt-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                  <div class="p-4 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                    <div class="flex flex-wrap -mx-3">
                      <div class="flex items-center flex-none w-1/2 max-w-full px-3">
                        <h6 class="mb-0">Information</h6>
                      </div>          
                    </div>
                  </div>
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap -mx-3">
                      <div class="max-w-full px-3 mb-6 md:mb-0 md:w-1/2 md:flex-none">

                      <h6 class="mb-5 font-bold">Full Name</h6>  
                        <div class="relative flex flex-row items-center flex-auto min-w-0 p-6 break-words bg-transparent border border-solid shadow-none rounded-xl border-slate-100 bg-clip-border">
                          <h6 class="mb-0 text-lg">Juma Ali</h6>                        
                        </div>
                      </div>

                      <div class="max-w-full px-3 md:w-1/2 md:flex-none">
                        <h6 class="mb-5 font-bold">Phone Number</h6>  
                        <div class="relative flex flex-row items-center flex-auto min-w-0 p-6 break-words bg-transparent border border-solid shadow-none rounded-xl border-slate-100 bg-clip-border">
                          <h6 class="mb-0 text-lg">d65656</h6> 
                        </div>
                      </div>

                      <div class="max-w-full px-3 md:w-1/2 md:flex-none">
                        <h6 class="mb-5 font-bold">Address</h6>  
                        <div class="relative flex flex-row items-center flex-auto min-w-0 p-6 break-words bg-transparent border border-solid shadow-none rounded-xl border-slate-100 bg-clip-border">
                          <h6 class="mb-0 text-lg">fdfd</h6> 
                        </div>
                      </div>

                      <div class="max-w-full px-3 md:w-1/2 md:flex-none pt-10">
                        <h6 class="mb-5 font-bold">Company Car Number Plate</h6>  
                        <div class="relative flex flex-row items-center flex-auto min-w-0 p-6 break-words bg-transparent border border-solid shadow-none rounded-xl border-slate-100 bg-clip-border">
                         
                          <h6 class="mb-0 text-lg">kbc 654895d</h6> 
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

export default Dashboard;
