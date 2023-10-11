import React, {useEffect, useState } from 'react';
import Navbar from '../Component/Navbar';
import Sidebar from '../Component/Aside'
import UseSidebar from '../utils/constant/useSidebar';
import { useParams } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "../utils/constant/severUrl";

function SingleNotification() {
  const { sidebarOpen, toggleSidebar } = UseSidebar();
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');
  const { id } = useParams();


  useEffect(() => {
    const getSingleNotification = async () => {
      try {
        const res = await axios.get(`${SERVER_URL}/notification/${id}`);
         setMessage(res.data.notification[0].message)
         setSubject(res.data.notification[0].subject)
         setUsername(res.data.notification[0].user.username)
         setRole(res.data.notification[0].user.role)
              
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    getSingleNotification();
  }, [id]);


  return(
        <div className="flex flex-col h-screen overflow-hidden ">
        <div className="flex flex-1 relative">
      
          <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      
          <div className="flex flex-col flex-1 bg-gray-50 overflow-x-hidden overflow-y-auto">
            <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      
            <main className="max-h-screen flex flex-col  h-[100vh]"> 
            <div className="w-full px-3 lg:px-6 py-6 mx-auto">
            
              <h6 className="pb-5 font-bold text-2xl capitalize">Notifications</h6>
    
              <div className="flex flex-wrap -mx-3 py-5">
              <div className="flex-none w-full max-w-full px-3">
                    <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid rounded-lg bg-clip-border"> 
                        <div className="p-4 leading-loose">
                            <p className="text-lg"><span className='font-semibold'>Subject: </span><span>{role}</span></p>
                            <p className="text-lg"><span className='font-semibold'>From:</span><span> {username}, [{role}]</span></p>
                                <div className='p-5'> 
                                <p>Hello ,</p>
                                
                                <p>{message}</p>
                                
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