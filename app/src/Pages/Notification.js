import React, { useState } from 'react';
import Navbar from '../Component/Navbar';
import Sidebar from '../Component/Aside'
import { Link } from 'react-router-dom';
import UseSidebar from '../utils/constant/useSidebar';


function Notification() {
  const { sidebarOpen, toggleSidebar } = UseSidebar();


  return(
    <div className="flex flex-col h-screen overflow-hidden ">
    <div className="flex flex-1 relative">
  
      <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
  
      <div className="flex flex-col flex-1 bg-gray-50 overflow-x-hidden overflow-y-auto">
        <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
  
        <main className="max-h-screen flex flex-col  h-[100vh]"> 
        <div className="w-full py-6 mx-auto">
        
          <h6 className="pb-5 font-bold text-lg px-2 lg:px-6 lg:text-lg capitalize">Notifications</h6>

       
                 <div className="flex justify-end pr-5">
                   <div className="flex bg-gray-200 rounded-2xl shadow-md text-black text-sm cursor-pointer ml-auto px-4 py-3">
                   <Link to='/CreateNotification'>
                     <p className="text-md text-black-800 capitalize">Create Notification</p>
                       </Link>
                   </div>
                 </div>
          


          <div className="flex flex-wrap -mx-3 py-5 pb-10">
          <div className="flex-none w-full max-w-full px-3">
            <div className="flex flex-col mb-6 break-words border-0 border-transparent border-solid"> 

              <div className="flex-auto  pt-0 pb-2">
                <div className="overflow-x-auto px-2 pt-3">
                  
                    <Link to='/SingleNotification'>
                        <div className=" pt-2">
                          <div className="rounded bg-gray-100 px-2 py-5">
                              <div className=" flex items-center justify-between">
                                <div className='flex'>
                                    <div className="focus:outline-none w-9 h-9 border rounded-full border-gray-200 bg-white flex items-center justify-center">
                                      <p className='text-lg text-black'>A</p>
                                    </div>
                                    <div className="pl-3">
                                      <p className="focus:outline-none text-sm leading-none"><span className="text-indigo-700 text-md">Manager</span></p>                          
                                      <p className="focus:outline-none text-md leading-none">maanyu</p>                          
                                    </div>
                                </div>
                                  <p className='text-black text-sm uppercase'>12:00 Pm</p>                      
                              </div>                 
                          <div>
                          <p className="focus:outline-none text-md pt-1 text-gray-500">Meeting 12 o'clock</p>
                          </div>
                          </div>
                        </div>
                    </Link>

                    <Link to='/SingleNotification'>
                        <div className=" pt-2">
                          <div className="rounded bg-gray-100 px-2 py-5">
                              <div className=" flex items-center justify-between">
                                <div className='flex'>
                                    <div className="focus:outline-none w-9 h-9 border rounded-full border-gray-200 bg-white flex items-center justify-center">
                                      <p className='text-lg text-black'>A</p>
                                    </div>
                                    <div className="pl-3">
                                      <p className="focus:outline-none text-sm leading-none"><span className="text-indigo-700 text-md">Manager</span></p>                          
                                      <p className="focus:outline-none text-md leading-none">maanyu</p>                          
                                    </div>
                                </div>
                                  <p className='text-black text-sm uppercase'>12:00 Pm</p>                      
                              </div>                 
                          <div>
                          <p className="focus:outline-none text-md pt-1 text-gray-500">Meeting 12 o'clock</p>
                          </div>
                          </div>
                        </div>
                    </Link>


                    <Link to='/SingleNotification'>
                        <div className=" pt-2">
                          <div className="rounded bg-gray-100 px-2 py-5">
                              <div className=" flex items-center justify-between">
                                <div className='flex'>
                                    <div className="focus:outline-none w-9 h-9 border rounded-full border-gray-200 bg-white flex items-center justify-center">
                                      <p className='text-lg text-black'>A</p>
                                    </div>
                                    <div className="pl-3">
                                      <p className="focus:outline-none text-sm leading-none"><span className="text-indigo-700 text-md">Manager</span></p>                          
                                      <p className="focus:outline-none text-md leading-none">maanyu</p>                          
                                    </div>
                                </div>
                                  <p className='text-black text-sm uppercase'>12:00 Pm</p>                      
                              </div>                 
                          <div>
                          <p className="focus:outline-none text-md pt-1 text-gray-500">Meeting 12 o'clock</p>
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