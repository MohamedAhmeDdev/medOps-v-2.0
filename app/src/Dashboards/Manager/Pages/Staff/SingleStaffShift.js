import React, { useState } from 'react';
import Navbar from '../../../Component/Navbar';
import Sidebar from '../../../Component/Aside';
import UseSidebar from '.././../../utils/constant/useSidebar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function SingleStaffShift() {
  const { sidebarOpen, toggleSidebar } = UseSidebar();
  const [fromDateDropdown, setFromDateDropdown] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  const toggleFromDateDropdown = () => {
    setFromDateDropdown(!fromDateDropdown);
  };


  return (
     <div className="flex flex-col h-screen overflow-hidden ">
      <div className="flex flex-1 relative">

        <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

        <div className="flex flex-col flex-1 bg-gray-50 overflow-x-hidden overflow-y-auto">
          <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

          <main className="max-h-screen flex flex-col h-[100vh]"> 

            <div className="w-full py-6">
            <h6 className="pb-5 font-bold text-lg  px-1.5 lg:px-6 capitalize">Weekly Shift</h6>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 px-2">
                      <div className="relative">
                          <DatePicker  placeholderText={'From'}  selected={selectedDate} onChange={handleDateChange} className="input text-sm md:w-40 2xl:w-60 rounded-lg border text-white border-gray-600 bg-gray-600 py-2.5 px-3 focus:bg-white focus:text-black focus:outline-none" />
                      </div>

                      <div className="relative">
                        <DatePicker  placeholderText={'To'}  selected={selectedDate} onChange={handleDateChange} className="input text-sm md:w-40 2xl:w-60 rounded-lg border text-white border-gray-600 bg-gray-600 py-2.5 px-3 focus:bg-white focus:text-black focus:outline-none"/>
                      </div>
                
                      <button className="relative flex items-center justify-center cursor-pointer text-white font-medium rounded-lg text-sm px-5 py-2 bg-gray-600 border border-gray-600 hover:bg-gray-700 hover:border-gray-600">
                          Filter
                      </button>
              </div>

              <div className="flex flex-wrap py-5">
                  <div className="flex-none w-full max-w-full">
                    <div className=" flex flex-col mb-10 break-words bg-white border-0 border-transparent border-solid bg-clip-border">     
                      <div className="flex-auto px-0 pt-0 pb-2">
                        <div className="p-0 overflow-x-auto ">
                          <table className="min-w-full divide-y divide-gray-200 ">
                          <thead className="align-bottom">
                              <tr>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black"></th>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Logged In At</th>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Logged Out At</th>
                              </tr>
                          </thead>
                            <tbody>           
                               <tr className="border-b">
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap capitalize">Monday</td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap uppercase">7: 10 am</td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap uppercase">40: 10 pm</td>
                              </tr>
                              <tr className="border-b">
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap capitalize">Tuesday</td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap uppercase">7: 10 am</td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap uppercase">40: 10 pm</td> 
                              </tr>       
                               <tr className="border-b">
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap capitalize">Wednesday</td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap uppercase">7: 10 am</td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap uppercase">40: 10 pm</td>      
                              </tr>
                              <tr className="border-b">
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap capitalize">Thursday</td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap uppercase">7: 10 am</td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap uppercase">40: 10 pm</td>      

                              </tr>
                               <tr className="border-b">
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap capitalize">Friday</td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap uppercase">7: 10 am</td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap uppercase">40: 10 pm</td>     
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

export default SingleStaffShift