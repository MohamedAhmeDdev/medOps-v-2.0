import React, { useState } from 'react';
import Navbar from '../Component/Navbar';
import Sidebar from '../Component/Aside'
import { Link } from 'react-router-dom';


function Notification() {
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
        <div class="w-full px-2 lg:px-6 py-6 mx-auto">
        
          <h6 class="pb-5 font-bold text-lg lg:text-4xl capitalize">Notifications</h6>

          <div class="flex flex-wrap -mx-3 py-5 pb-10">
          <div class="flex-none w-full max-w-full px-3">
            <div class="flex flex-col mb-6 break-words bg-white border-0 border-transparent border-solid  rounded-2xl"> 

              <div class="flex-auto  pt-0 pb-2">
                <div class="overflow-x-auto px-2 pt-3">
                  
                    <Link to='/SingleNotification'>
                        <div class=" pt-2">
                          <div class="rounded bg-gray-100 px-2 py-5">
                              <div class=" flex items-center justify-between">
                                <div className='flex'>
                                    <div class="focus:outline-none w-14 h-14 border rounded-full border-gray-200 bg-white flex items-center justify-center">
                                      <p className='text-4xl text-black'>A</p>
                                    </div>
                                    <div class="pl-3">
                                      <p class="focus:outline-none text-sm leading-none"><span class="text-indigo-700 text-xl">Manager</span></p>                          
                                      <p class="focus:outline-none text-lg leading-none">maanyu</p>                          
                                    </div>
                                </div>
                                  <p className='text-black text-md uppercase'>12:00 Pm</p>                      
                              </div>                 
                          <div>
                          <p class="focus:outline-none text-lg pt-1 text-gray-500">Meeting 12 o'clock</p>
                          </div>
                          </div>
                        </div>
                    </Link>

                    <Link to='/SingleNotification'>
                        <div class=" pt-2">
                          <div class="rounded bg-gray-100 px-2 py-5">
                              <div class=" flex items-center justify-between">
                                <div className='flex'>
                                    <div class="focus:outline-none w-14 h-14 border rounded-full border-gray-200 bg-white flex items-center justify-center">
                                      <p className='text-4xl text-black'>A</p>
                                    </div>
                                    <div class="pl-3">
                                      <p class="focus:outline-none text-sm leading-none"><span class="text-indigo-700 text-xl">Manager</span></p>                          
                                      <p class="focus:outline-none text-lg leading-none">maanyu</p>                          
                                    </div>
                                </div>
                                  <p className='text-black text-md uppercase'>12:00 Pm</p>                      
                              </div>                 
                          <div>
                          <p class="focus:outline-none text-lg pt-1 text-gray-500">Meeting 12 o'clock</p>
                          </div>
                          </div>
                        </div>
                    </Link>


                    <Link to='/SingleNotification'>
                        <div class=" pt-2">
                          <div class="rounded bg-gray-100 px-2 py-5">
                              <div class=" flex items-center justify-between">
                                <div className='flex'>
                                    <div class="focus:outline-none w-14 h-14 border rounded-full border-gray-200 bg-white flex items-center justify-center">
                                      <p className='text-4xl text-black'>A</p>
                                    </div>
                                    <div class="pl-3">
                                      <p class="focus:outline-none text-sm leading-none"><span class="text-indigo-700 text-xl">Manager</span></p>                          
                                      <p class="focus:outline-none text-lg leading-none">maanyu</p>                          
                                    </div>
                                </div>
                                  <p className='text-black text-md uppercase'>12:00 Pm</p>                      
                              </div>                 
                          <div>
                          <p class="focus:outline-none text-lg pt-1 text-gray-500">Meeting 12 o'clock</p>
                          </div>
                          </div>
                        </div>
                    </Link>

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

export default Notification