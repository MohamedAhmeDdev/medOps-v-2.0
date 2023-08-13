import React, { useState } from 'react';
import Navbar from '../../Component/Navbar';
import Sidebar from '../../Component/Aside';




function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="flex flex-1 relative">

        <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

        <div className="flex flex-col flex-1 bg-indigo-50 overflow-x-hidden overflow-y-auto">
          <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

          <main class="max-h-screen flex flex-col py-10 h-[100vh]"> 
            <div class="w-full px-3 py-6 mx-auto">
          
            <h6 class="pb-5 font-bold text-lg lg:text-4xl capitalize">Dashboard</h6>

            <div class="flex flex-wrap -mx-3">
                <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                  <div class="relative  break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border flex flex-col">
                    <div class="mx-auto item p-4">
                      <div class="flex-none px-3">
                        <div>
                          <p class="mb-0 font-sans font-bold lg:text-lg pb-2">Notification</p>
                        </div>
                      </div>

                      <div class="px-3 flex">
                        <div class="w-20 h-20 mx-auto rounded-full flex justify-center items-center bg-gray-200">
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
                            <p class="mb-0 font-sans font-bold lg:text-lg pb-2">Todays Deliveries</p>
                          </div>
                        </div>

                        <div class="px-3 flex">
                          <div class="w-20 h-20 mx-auto rounded-full flex justify-center items-center bg-gray-200">
                            <p class="font-bold text-2xl">0/30</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
             </div>

             <div class="max-w-full pb-20 lg:mb-0 lg:w-full lg:flex-none">
                <div class="relative flex flex-col min-w-0 mt-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                  <div class="p-4 pb-0 mb-0">
                    <div class="flex flex-wrap">
                      <div class="flex items-center flex-none px-3">
                        <h6 class="mb-0 font-bold">Personal Information</h6>
                      </div>          
                    </div>
                  </div>
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                    <div class="max-w-full px-3 mb-6  w-1/2">
                       <h6 class="mb-2 font-semebold">Full Name</h6>  
                        <div class="relative flex flex-row items-center flex-auto px-5 py-1 break-words bg-transparent border border-solid shadow-none rounded-md border-slate-300 bg-clip-border">
                          <h6 class="mb-0 text-lg mx-auto">Juma Ali</h6>                        
                        </div>
                      </div>

                      <div class="max-w-full px-3 mb-6  w-1/2">
                        <h6 class="mb-2 font-semebold">Job Title</h6>  
                        <div class="relative flex flex-row items-center flex-auto min-w-0 px-5 py-1 break-words bg-transparent border border-solid shadow-none rounded-md border-slate-300 bg-clip-border">
                          <h6 class="mb-0 text-lg mx-auto">Transporter</h6> 
                        </div>
                      </div>

                      <div class="max-w-full px-3 mb-6  w-1/2">
                        <h6 class="mb-2 font-semebold">Phone Number</h6>  
                        <div class="relative flex flex-row items-center flex-auto min-w-0 px-5 py-1 break-words bg-transparent border border-solid shadow-none rounded-md border-slate-300 bg-clip-border">
                          <h6 class="mb-0 text-lg mx-auto">d65656</h6> 
                        </div>
                      </div>

                      <div class="max-w-full px-3 mb-6  w-1/2">
                        <h6 class="mb-2 font-semebold">Address</h6>  
                        <div class="relative flex flex-row items-center flex-auto min-w-0 px-5 py-1 break-words bg-transparent border border-solid shadow-none rounded-md border-slate-300 bg-clip-border">
                          <h6 class="mb-0 text-lg mx-auto">fdfd</h6> 
                        </div>
                      </div>

                    </div>
                  </div>
                  
                  <hr className='w-9/12 mx-auto'/>

                  <div class="p-4 pb-0 mb-0">
                    <div class="flex flex-wrap">
                      <div class="flex items-center flex-none px-3">
                        <h6 class="mb-0 font-semebold">Company Information</h6>
                      </div>          
                    </div>
                  </div>
                  <div class="flex-auto pt-10 p-4">
                    <div class="flex flex-wrap">
                      <div class="max-w-full px-3 mb-6  w-1/2">
                        <h6 class="mb-2 font-semebold">Manager</h6>  
                        <div class="relative flex flex-row items-center flex-auto min-w-0 px-5 py-1 break-words bg-transparent border border-solid shadow-none rounded-md border-slate-300 bg-clip-border">
                          <h6 class="mb-0 text-lg mx-auto">cane</h6> 
                        </div>
                      </div>

                      <div class="max-w-full px-3 mb-6  w-1/2">
                        <h6 class="mb-2 font-semebold">Phone Number</h6>  
                        <div class="relative flex flex-row items-center flex-auto min-w-0 px-5 py-1 break-words bg-transparent border border-solid shadow-none rounded-md border-slate-300 bg-clip-border">
                          <h6 class="mb-0 text-lg mx-auto">d65656</h6> 
                        </div>
                      </div>

                        <div class="max-w-full px-3 mb-6  w-1/2">
                        <h6 class="mb-2 font-semebold">Address</h6>  
                        <div class="relative flex flex-row items-center flex-auto min-w-0 px-5 py-1 break-words bg-transparent border border-solid shadow-none rounded-md border-slate-300 bg-clip-border">
                          <h6 class="mb-0 text-lg mx-auto">fdfd</h6> 
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
