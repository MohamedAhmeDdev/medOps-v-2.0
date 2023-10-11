import React, { useState } from 'react';
import Navbar from '../Component/Navbar';
import Sidebar from '../Component/Aside';
import UseSidebar from '../utils/constant/useSidebar';
import { useNotification } from '../utils/context/NotificationContext';
import { Api } from "../utils/Api";

function CreateNotification() {
    const { sidebarOpen, toggleSidebar } = UseSidebar();
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const { showErrorNotification ,  showSuccessNotification} = useNotification();

    const create_notification = async (e) => {
      e.preventDefault();
  
      try {
       await Api('/notification', 'POST',{
          subject: subject,
          message: message,
      
        }).then((response) => {
          showSuccessNotification('notification created successfully.');
        });
        setMessage("");
        setSubject("");
   
      } catch (error) {
        if (error.response?.status === 400) {
          showErrorNotification('All Fields Are Required.');
        }
      }
    };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
    <div className="flex flex-1 relative">

      <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

      <div className="flex flex-col flex-1 bg-gray-50 overflow-x-hidden overflow-y-auto">
        <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

        <main className="max-h-screen flex flex-col py-5 h-[100vh]"> 
          <div className="w-full px-3  mx-auto">
        
          <h6 className="pb-5 font-bold text-lg lg:text-lg capitalize">Dashboard</h6>


           <div className="max-w-full pb-20 lg:mb-0 lg:w-full lg:flex-none">
             <div className="relative flex flex-col min-w-0 mt-6 break-words bg-white border-0 border-transparent border-solid rounded-lg bg-clip-border">
                  <div className="p-4 mb-4">
                    <h3 className="mb-4 text-xl font-semibold text-black">Notification</h3>
                        <form onSubmit={create_notification}>
                            <div className="space-y-12">
                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div className="sm:col-span-4">
                                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Subject</label>
                                            <div className="mt-2">
                                             <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">                                            
                                                <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} className="block flex-1 border-0 bg-transparent px-2 py-1.5  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm focus:outline-none sm:leading-6"/>
                                             </div>
                                            </div>
                                        </div>

                                        <div className="col-span-full">
                                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">Message</label>
                                            <div className="mt-2">
                                                <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows="3" className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:text-sm sm:leading-6"></textarea>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <button className="mt-10 justify-center w-72 px-4 py-2 text-md font-medium text-white bg-blue-500 border border-blue-500 rounded-md hover:bg-blue-600 ">
                            Send
                          </button>
                        </form>
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

export default CreateNotification