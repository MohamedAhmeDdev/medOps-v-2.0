import React, { useState } from 'react';
import Navbar from '../Component/Navbar';
import Sidebar from '../Component/Aside'
import UseSidebar from '../utils/constant/useSidebar';


function SingleNotification() {
  const { sidebarOpen, toggleSidebar } = UseSidebar();


      return(
        <div className="flex flex-col h-screen overflow-hidden ">
        <div className="flex flex-1 relative">
      
          <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      
          <div className="flex flex-col flex-1 bg-indigo-50 overflow-x-hidden overflow-y-auto">
            <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      
            <main class="max-h-screen flex flex-col  h-[100vh]"> 
            <div class="w-full px-3 lg:px-6 py-6 mx-auto">
            
              <h6 class="pb-5 font-bold text-4xl capitalize">Notifications</h6>
    
              <div class="flex flex-wrap -mx-3 py-5">
              <div class="flex-none w-full max-w-full px-3">
                    <div class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border"> 
                        <div class="p-4 leading-loose">
                            <p class="text-lg"><span className='font-semibold'>Subject: </span><span>Request for a Meeting</span></p>
                            <p class="text-lg"><span className='font-semibold'>From:</span><span> fdfdd , [Manager]</span></p>
                                <div className='p-5'> 
                                <p>Hello [Recipient's Name],</p>
                                
                                <p>I hope this email finds you well. I would like to request a meeting to discuss [briefly mention the topic or purpose of the meeting]. Given the importance of this matter, I believe that a discussion would greatly benefit our project/department/team.</p>
                                
                                <p>Could we please find a suitable time for the meeting? I suggest some possible time slots:</p>
                                
                                <ul>
                                    <li>[Date and Time Option 1]</li>
                                    <li>[Date and Time Option 2]</li>
                                    <li>[Date and Time Option 3]</li>
                                </ul>
                                
                                <p>Please let me know your availability or suggest any alternate timings that work for you. Your flexibility in this regard is highly appreciated.</p>
                                
                                <p>Looking forward to your response and the opportunity to discuss this matter further.</p>
                                
                                <p>Best regards,</p>
                                <p>[Your Name]</p>
                                <p>[Your Title/Position]</p>
                                <p>[Your Contact Information]</p>
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

export default SingleNotification