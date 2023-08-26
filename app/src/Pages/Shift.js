import React, { useState, useEffect } from 'react';
import Navbar from '../Component/Navbar';
import Sidebar from '../Component/Aside';
import UseSidebar from '../utils/constant/useSidebar';


function Shift() {
  const { sidebarOpen, toggleSidebar } = UseSidebar();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const handleLoginClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const isAfter7AM = currentTime.getHours() >= 7;



  return(
    <div className="flex flex-col h-screen overflow-hidden ">
    <div className="flex flex-1 relative">
  
      <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
  
      <div className="flex flex-col flex-1 bg-gray-50 overflow-x-hidden overflow-y-auto">
        <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
  
        <main className="max-h-screen flex flex-col  h-[100vh]"> 
        <div className="w-full py-6 mx-auto">
          <h6 className="pb-5 font-bold text-2xl px-3 lg:px-6 lg:text-lg capitalize">Shift</h6>

          <h6 className='text-lg py-3 font-bold px-3 lg:px-6'>Clock IN </h6>
              <div className='w-32 px-3  mb-6 sm:flex-none xl:mb-0 '>
                <div className="relative flex flex-col bg-white shadow-soft-xl rounded-lg bg-clip-border w-32">
                  <div className="flex flex-row py-2 px-5">
                    {isAfter7AM ? (
                      <>
                       <button className={`w-20 h-12 text-center rounded-lg ${isLoggedIn ? 'bg-green-500 text-white' : 'bg-red-500 text-white'} transition-all`}
                         onClick={handleLoginClick}
                       >
                        {isLoggedIn ? 'Logout' : 'Login'}
                      </button>
                      </>
                    ) : (
                      <p className='text-center capitalize font-semibold text-red-500'>Wait Until 7 am</p>
                    )}
                  </div>
                </div>
              </div>

          <div className="flex flex-wrap py-5">
            <div className="flex-none w-full max-w-full pb-2 lg:pb-1">
            <div className="relative flex flex-col mb-1.5 break-words bg-white border-0 border-transparent border-solid">
              <div className="p-3 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                <h6 className='text-lg'>shift weekly report</h6>
              </div>
              <div className="flex-auto px-0 pt-0 pb-2">
                <div className="p-0 overflow-x-auto">
                  <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                    <thead className="align-bottom">
                      <tr>
                        <th className="px-4 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-400 shadow-none text-md lg:text-lg border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Date</th>
                        <th className="px-4 py-3 pl-2 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-400 shadow-none text-md lg:text-lg border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Clock In Time</th>
                        <th className="px-4 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-400 shadow-none text-md lg:text-lg border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Clock Out Time</th>
                        <th className="px-4 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-400 shadow-none text-md lg:text-lg border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 px-5 text-md text-center text-slate-400 align-middle bg-transparent  border-b whitespace-nowrap shadow-transparent">23/04/18</td>
                         <td className="p-2 px-5 text-md text-center text-slate-400 align-middle bg-transparent  border-b whitespace-nowrap shadow-transparent uppercase">8: 00 AM</td>
                         <td className="p-2 px-5 text-md text-center text-slate-400 align-middle bg-transparent  border-b whitespace-nowrap shadow-transparent uppercase">4: 30 PM</td>
                        <td className="p-2 px-5 text-sm text-center leading-normal align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="bg-gradient-to-tl from-green-600 to-lime-400 px-2.5 text-md rounded-1.8 py-2 rounded-lg inline-block whitespace-nowrap text-center align-baseline leading-none text-white">Logged IN</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 px-5 text-md text-center text-slate-400 align-middle bg-transparent  border-b whitespace-nowrap shadow-transparent">23/04/18</td>
                         <td className="p-2 px-5 text-md text-center text-slate-400 align-middle bg-transparent  border-b whitespace-nowrap shadow-transparent uppercase">8: 00 AM</td>
                         <td className="p-2 px-5 text-md text-center text-slate-400 align-middle bg-transparent  border-b whitespace-nowrap shadow-transparent uppercase">4: 30 PM</td>
                        <td className="p-2 px-5 text-sm text-center leading-normal align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="bg-gradient-to-tl from-green-600 to-lime-400 px-2.5 text-md rounded-1.8 py-2 rounded-lg inline-block whitespace-nowrap text-center align-baseline leading-none text-white">Logged IN</span>
                        </td>
                      </tr> 
                      <tr>
                        <td className="p-2 px-5 text-md text-center text-slate-400 align-middle bg-transparent  border-b whitespace-nowrap shadow-transparent">23/04/18</td>
                         <td className="p-2 px-5 text-md text-center text-slate-400 align-middle bg-transparent  border-b whitespace-nowrap shadow-transparent uppercase">8: 00 AM</td>
                         <td className="p-2 px-5 text-md text-center text-slate-400 align-middle bg-transparent  border-b whitespace-nowrap shadow-transparent uppercase">4: 30 PM</td>
                        <td className="p-2 px-5 text-sm text-center leading-normal align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="bg-gradient-to-tl from-red-600 to-red-400 px-2.5 text-md rounded-1.8 py-2 rounded-lg inline-block whitespace-nowrap text-center align-baseline leading-none text-white">Logged Out</span>
                        </td>
                      </tr> 
                      <tr>
                        <td className="p-2 px-5 text-md text-center text-slate-400 align-middle bg-transparent  border-b whitespace-nowrap shadow-transparent">23/04/18</td>
                         <td className="p-2 px-5 text-md text-center text-slate-400 align-middle bg-transparent  border-b whitespace-nowrap shadow-transparent uppercase">8: 00 AM</td>
                         <td className="p-2 px-5 text-md text-center text-slate-400 align-middle bg-transparent  border-b whitespace-nowrap shadow-transparent uppercase">4: 30 PM</td>
                        <td className="p-2 px-5 text-sm text-center leading-normal align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="bg-gradient-to-tl from-red-600 to-red-400 px-2.5 text-md rounded-1.8 py-2 rounded-lg inline-block whitespace-nowrap text-center align-baseline leading-none text-white">Logged Out</span>
                        </td>
                      </tr> 
                      <tr>
                        <td className="p-2 px-5 text-md text-center text-slate-400 align-middle bg-transparent  border-b whitespace-nowrap shadow-transparent">23/04/18</td>
                         <td className="p-2 px-5 text-md text-center text-slate-400 align-middle bg-transparent  border-b whitespace-nowrap shadow-transparent uppercase">8: 00 AM</td>
                         <td className="p-2 px-5 text-md text-center text-slate-400 align-middle bg-transparent  border-b whitespace-nowrap shadow-transparent uppercase">4: 30 PM</td>
                        <td className="p-2 px-5 text-sm text-center leading-normal align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="bg-gradient-to-tl from-red-600 to-red-400 px-2.5 text-md rounded-1.8 py-2 rounded-lg inline-block whitespace-nowrap text-center align-baseline leading-none text-white">Logged Out</span>
                        </td>
                      </tr>      
                      <tr>
                        <td className="p-2 px-5 text-md text-center text-slate-400 align-middle bg-transparent  border-b whitespace-nowrap shadow-transparent">23/04/18</td>
                         <td className="p-2 px-5 text-md text-center text-slate-400 align-middle bg-transparent  border-b whitespace-nowrap shadow-transparent uppercase">8: 00 aM</td>
                         <td className="p-2 px-5 text-md text-center text-slate-400 align-middle bg-transparent  border-b whitespace-nowrap shadow-transparent uppercase">4: 30 PM</td>
                        <td className="p-2 px-5 text-sm text-center leading-normal align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="bg-gradient-to-tl from-red-600 to-red-400 px-2.5 text-md rounded-1.8 py-2 rounded-lg inline-block whitespace-nowrap text-center align-baseline leading-none text-white">Logged  Out</span>
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