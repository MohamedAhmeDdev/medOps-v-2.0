import React, { useState } from 'react';
import Navbar from '../Component/Navbar';
import Sidebar from '../Component/Aside';


function Shift() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };


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
        
          <h6 class="pb-5 font-bold text-4xl capitalize">Shift</h6>



          <h6 className='text-lg py-3 font-bold'>Clock IN </h6>
          <div className={`w-72 px-3 space-x-5 mb-6 sm:flex-none xl:mb-0 ${isLoggedIn ? 'slide-left' : ''}`}>
            <div className="relative flex flex-col bg-white shadow-soft-xl rounded-2xl bg-clip-border">
              <div className="flex flex-row py-4">
                <div className="px-3 text-right basis-1/3">
                  <button
                    className={`w-20 h-12 text-center rounded-lg bg-red-500 text-white ${
                      isLoggedIn ? 'hidden' : ''
                    }`}
                    onClick={handleLoginClick}
                  >
                    Login
                  </button>
                </div>
                <div className="px-3 ml-20 text-right basis-1/3">
                  <button
                    className={`w-20 h-12 text-center rounded-lg bg-green-500 text-white ${
                      !isLoggedIn ? 'hidden' : ''
                    }`}
                    onClick={handleLogoutClick}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>


          <div class="flex flex-wrap -mx-3 py-5">
          <div class="flex-none w-full max-w-full px-3">
            <div class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
              <div class="p-6 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                <h6 className='text-lg'>shift weekly report</h6>
              </div>
              <div class="flex-auto px-0 pt-0 pb-2">
                <div class="p-0 overflow-x-auto">
                  <table class="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                    <thead class="align-bottom">
                      <tr>
                        <th class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-400 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Date</th>
                        <th class="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-400 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Clock In Time</th>
                        <th class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-400 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Clocked Out Time</th>
                        <th class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-400 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <div class="flex px-2 py-1">
                              <span class="text-xs font-semibold leading-tight text-slate-400">23/04/18</span>
                          </div>
                        </td>
                        <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <span class="text-xs font-semibold leading-tight text-slate-400">23/04/18</span>
                        </td>
                        <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                           <span class="text-xs font-semibold leading-tight text-slate-400">23/04/18</span>
                          </td>
                        <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span class="bg-gradient-to-tl from-green-600 to-lime-400 px-2.5 text-md rounded-1.8 py-2 rounded-lg inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">LOGGED IN</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <div class="flex px-2 py-1">
                             <span class="text-xs font-semibold leading-tight text-slate-400">23/04/18</span>
                          </div>
                        </td>
                        <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <span class="text-xs font-semibold leading-tight text-slate-400">23/04/18</span>
                        </td>
                        <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <span class="text-xs font-semibold leading-tight text-slate-400">23/04/18</span>
                        </td>
                        <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span class="bg-gradient-to-tl from-red-600 to-red-400 px-2.5 text-md rounded-1.8 py-2 rounded-lg inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">LOGGED Out</span>
                        </td>
                      </tr>  
                      <tr>
                        <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <div class="flex px-2 py-1">
                             <span class="text-xs font-semibold leading-tight text-slate-400">23/04/18</span>
                          </div>
                        </td>
                        <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <span class="text-xs font-semibold leading-tight text-slate-400">23/04/18</span>
                        </td>
                        <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <span class="text-xs font-semibold leading-tight text-slate-400">23/04/18</span>
                        </td>
                        <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span class="bg-gradient-to-tl from-red-600 to-red-400 px-2.5 text-md rounded-1.8 py-2 rounded-lg inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">LOGGED Out</span>
                        </td>
                      </tr>      
                    </tbody>
                  </table>
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

export default Shift