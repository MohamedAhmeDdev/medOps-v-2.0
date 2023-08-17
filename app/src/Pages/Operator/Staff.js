import React, { useState } from 'react';
import Navbar from '../../Component/Navbar';
import Sidebar from '../../Component/Aside';
import UseSidebar from '../../utils/constant/useSidebar';

function Staff() {
  const { sidebarOpen, toggleSidebar } = UseSidebar();

  return (
     <div className="flex flex-col h-screen overflow-hidden ">
      <div className="flex flex-1 relative">
    
        <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
    
        <div className="flex flex-col flex-1 bg-indigo-50 overflow-x-hidden overflow-y-auto">
          <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
    
          <main className="max-h-screen flex flex-col  h-[100vh]"> 
              <nav className="bg-white py-2.5">
              <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex">
                  <div className=" mx-auto">                       
                      <input type="text" className="text-md w-1/100 relative flex-auto rounded-lg border border-solid border-gray-300 bg-white py-2 px-3 text-black focus:outline-none" placeholder="search for Staff"/>
                  </div>       
              </div>
             </nav>
            <div className="w-full px-3 lg:px-6 py-6 mx-auto">
            <h6 className="pb-5 font-bold text-2xl lg:text-4xl capitalize">Staff</h6> 

            <div className="flex flex-wrap py-5">
            <div className="flex-none w-full max-w-full pb-5">
              <div className="relative flex flex-col mb-6 break-words bg-white border-0 border-transparent border-solid rounded-lg">
                <div className="flex-auto px-0 pt-0 pb-2">
                  <div className="p-0 overflow-x-auto">
                    <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                      <thead className="align-bottom">
                        <tr>
                          <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Staff</th>
                          <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Phone_Number</th>
                          <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Address</th>
                          <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Role</th>
                          <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Shift Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">                            
                              <h6 className="mb-0 text-sm text-center leading-normal capitalize">John Michael</h6>
                              <p className="mb-0 text-sm  text-center leading-tight text-slate-400">john@creative-tim.com</p>                      
                          </td>
                          <td className="p-2 align-middle text-center bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <p className="mb-0 text-sm leading-tight">058255</p>
                          </td>
                          <td className="p-2 align-middle text-center bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <p className="mb-0 text-sm leading-tight capitalize">new york</p>
                          </td>
                          <td className="p-2 align-middle text-center bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <p className="mb-0 text-sm leading-tight uppercase">Manager</p>
                          </td>
                          <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <span className="bg-gradient-to-tl from-green-600 to-lime-400 text-sm rounded-1.8 px-3 py-1.5 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Logged in</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <h6 className="mb-0 text-sm text-center leading-normal capitalize">Alexa Liras</h6>
                              <p className="mb-0 text-xs text-center leading-tight text-slate-400">alexa@creative-tim.com</p>
                          </td>
                          <td className="p-2 align-middle text-center bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <p className="mb-0 text-sm leading-tight">058255</p>
                          </td>
                          <td className="p-2 align-middle text-center bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <p className="mb-0 text-sm leading-tight capitalize">new york</p>
                          </td>
                          <td className="p-2 align-middle text-center bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <p className="mb-0 text-sm leading-tight uppercase">Manager</p>
                          </td>
                          <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="bg-gradient-to-tl from-slate-600 to-slate-300 text-xs rounded-1.8 px-3 py-1.5 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Not Logged In</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">                            
                              <h6 className="mb-0 text-sm text-center leading-normal capitalize">John Michael</h6>
                              <p className="mb-0 text-sm  text-center leading-tight text-slate-400">john@creative-tim.com</p>                      
                          </td>
                          <td className="p-2 align-middle text-center bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <p className="mb-0 text-sm leading-tight">058255</p>
                          </td>
                          <td className="p-2 align-middle text-center bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <p className="mb-0 text-sm leading-tight capitalize">new york</p>
                          </td>
                          <td className="p-2 align-middle text-center bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <p className="mb-0 text-sm leading-tight uppercase">Manager</p>
                          </td>
                          <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <span className="bg-gradient-to-tl from-green-600 to-lime-400 text-sm rounded-1.8 px-3 py-1.5 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Logged in</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <h6 className="mb-0 text-sm text-center leading-normal capitalize">Alexa Liras</h6>
                              <p className="mb-0 text-xs text-center leading-tight text-slate-400">alexa@creative-tim.com</p>
                          </td>
                          <td className="p-2 align-middle text-center bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <p className="mb-0 text-sm leading-tight">058255</p>
                          </td>
                          <td className="p-2 align-middle text-center bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <p className="mb-0 text-sm leading-tight capitalize">new york</p>
                          </td>
                          <td className="p-2 align-middle text-center bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <p className="mb-0 text-sm leading-tight uppercase">Manager</p>
                          </td>
                          <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="bg-gradient-to-tl from-slate-600 to-slate-300 text-xs rounded-1.8 px-3 py-1.5 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Not Logged In</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">                            
                              <h6 className="mb-0 text-sm text-center leading-normal capitalize">John Michael</h6>
                              <p className="mb-0 text-sm  text-center leading-tight text-slate-400">john@creative-tim.com</p>                      
                          </td>
                          <td className="p-2 align-middle text-center bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <p className="mb-0 text-sm leading-tight">058255</p>
                          </td>
                          <td className="p-2 align-middle text-center bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <p className="mb-0 text-sm leading-tight capitalize">new york</p>
                          </td>
                          <td className="p-2 align-middle text-center bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <p className="mb-0 text-sm leading-tight uppercase">Manager</p>
                          </td>
                          <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <span className="bg-gradient-to-tl from-green-600 to-lime-400 text-sm rounded-1.8 px-3 py-1.5 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Logged in</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <h6 className="mb-0 text-sm text-center leading-normal capitalize">Alexa Liras</h6>
                              <p className="mb-0 text-xs text-center leading-tight text-slate-400">alexa@creative-tim.com</p>
                          </td>
                          <td className="p-2 align-middle text-center bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <p className="mb-0 text-sm leading-tight">058255</p>
                          </td>
                          <td className="p-2 align-middle text-center bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <p className="mb-0 text-sm leading-tight capitalize">new york</p>
                          </td>
                          <td className="p-2 align-middle text-center bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <p className="mb-0 text-sm leading-tight uppercase">Manager</p>
                          </td>
                          <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="bg-gradient-to-tl from-slate-600 to-slate-300 text-xs rounded-1.8 px-3 py-1.5 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Not Logged In</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                      <div className="grid w-full place-items-right rounded-lg p-6">
                                  <nav>
                                      <ul className="flex">
                                          <li>
                                              <a className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" href="#" aria-label="Previous">
                                              <span className="material-symbols-outlined">chevron_left</span>
                                              </a>
                                          </li>
                                          <li>
                                              <a className="mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-pink-600 to-pink-400 p-0 text-sm text-white shadow-md shadow-pink-500/20 transition duration-150 ease-in-out" href="#">1</a>
                                          </li>
                                          <li>
                                              <a className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" href="#">2</a>
                                          </li>
                                          <li>
                                              <a className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" href="#">3</a>
                                          </li>
                                          <li>
                                              <a className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" href="#" aria-label="Next">
                                              <span className="material-symbols-outlined">chevron_right</span>
                                              </a>
                                          </li>
                                      </ul>
                                  </nav>
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
  )
}

export default Staff