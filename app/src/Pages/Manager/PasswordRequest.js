import React, { useState } from 'react';
import Navbar from '../../Component/Navbar';
import Sidebar from '../../Component/Aside';
import UseSidebar from '../../utils/constant/useSidebar';


function PasswordRequest() {
  const { sidebarOpen, toggleSidebar } = UseSidebar();

  return (
     <div className="flex flex-col h-screen overflow-hidden ">
      <div className="flex flex-1 relative">

        <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

        <div className="flex flex-col flex-1 bg-gray-50 overflow-x-hidden overflow-y-auto">
          <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

          <main className="max-h-screen flex flex-col  h-[100vh]"> 

            <div className="w-full py-6">
            <h6 className="pb-5 font-bold text-lg  px-1.5 lg:px-6 capitalize">Password Request</h6>
               <div className="flex flex-wrap py-5">
                  <div className="flex-none w-full max-w-full">
                    <div className=" flex flex-col mb-10 break-words bg-white border-0 border-transparent border-solid bg-clip-border">     
                      <div className="flex-auto px-0 pt-0 pb-2">
                        <div className="p-0 overflow-x-auto ">
                          <table className="min-w-full divide-y divide-gray-200 ">
                          <thead className="align-bottom">
                              <tr className='border'>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Staff_Name</th>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Reason</th>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Status</th>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">submit_At</th>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Action</th>
                              </tr>
                          </thead>
                            <tbody className="bg-white">
                              <tr className='border-b'>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap capitalize">jane</td>
                                <td className="py-4 text-md text-center text-gray-400">
                                  <div className="text-center mx-auto w-60">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                  </div>
                                </td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap capitalize">
                                  <span className="bg-red-100 text-red-500 rounded-md text-sm mr-2 px-2.5 py-0.5 border border-red-50">Pending</span>
                                </td>
                                <td className="p-4 text-sm text-center text-gray-400 whitespace-nowrap">7/5/2023</td>  
                                <td className="p-4 text-sm text-center text-gray-400 whitespace-nowrap">
                                  <button className="hover:bg-green-200 text-green-800 text-sm cursor-pointer mr-2 px-3 py-1 border border-green-400 capitalize">Accept</button>
                                </td>  
                              </tr>  
                               <tr className='border-b'>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap capitalize">jane</td>
                                <td className="py-4 text-md text-center text-gray-400">
                                  <div className="text-center mx-auto w-60">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                  </div>
                                </td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap capitalize">
                                  <span className="bg-green-100 text-green-500 rounded-md text-sm mr-2 px-2.5 py-0.5 border border-green-50">Accepted</span>
                                </td>
                                <td className="p-4 text-sm text-center text-gray-400 whitespace-nowrap">7/5/2023</td>  
                                <td className="p-4 text-sm text-center text-gray-400 whitespace-nowrap">
                                   <button className="hover:bg-green-200 text-green-800 text-sm cursor-pointer mr-2 px-3 py-1 border border-green-400 capitalize">Accept</button>
                                </td>  
                              </tr> 
                               <tr className='border-b'>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap capitalize">jane</td>
                                <td className="py-4 text-md text-center text-gray-400">
                                  <div className="text-center mx-auto w-60">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                  </div>
                                </td>
                                   <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap capitalize">
                                  <span className="bg-red-100 text-red-500 rounded-md text-sm mr-2 px-2.5 py-0.5 border border-red-50">Pending</span>
                                </td>
                                <td className="p-4 text-sm text-center text-gray-400 whitespace-nowrap">7/5/2023</td>  
                                <td className="p-4 text-sm text-center text-gray-400 whitespace-nowrap">
                                   <button className="hover:bg-green-200 text-green-800 text-sm cursor-pointer mr-2 px-3 py-1 border border-green-400 capitalize">Accept</button>
                                </td>  
                              </tr>       
                              <tr>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap capitalize">jane</td>
                                <td className="py-4 text-md text-center text-gray-400">
                                  <div className="text-center mx-auto w-60">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                  </div>
                                </td>
                                   <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap capitalize">
                                  <span className="bg-red-100 text-red-500 rounded-md text-sm mr-2 px-2.5 py-0.5 border border-red-50">Pending</span>
                                </td>
                                <td className="p-4 text-sm text-center text-gray-400 whitespace-nowrap">7/5/2023</td>  
                                <td className="p-4 text-sm text-center text-gray-400 whitespace-nowrap">
                                   <button className="hover:bg-green-200 text-green-800 text-sm cursor-pointer mr-2 px-3 py-1 border border-green-400 capitalize">Accept</button>
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

export default PasswordRequest