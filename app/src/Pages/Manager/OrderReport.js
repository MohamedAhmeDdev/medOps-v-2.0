import React, { useEffect, useState } from "react";
import Navbar from '../../Component/Navbar';
import Sidebar from '../../Component/Aside';
import UseSidebar from '../../utils/constant/useSidebar';
import * as XLSX from "xlsx";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Api } from "../../utils/Api";
import {formatDate} from '../../utils/constant/formatDate'

function OrderReport() {
  const { sidebarOpen, toggleSidebar } = UseSidebar();
  const [fromDateDropdown, setFromDateDropdown] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [orderReports, setOrderReports] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  const toggleFromDateDropdown = () => {
    setFromDateDropdown(!fromDateDropdown);
  };


  useEffect(() => {
		const getOrderReport = async () => {
		  const data = await Api("/Manager/orderReport", "GET");
			setOrderReports(data.orderReport);																																																												
		};
	
		getOrderReport();
	}, []);



  const handleOnExport = () =>{
    const ws = XLSX.utils.json_to_sheet(orderReports);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Orders Report");
    XLSX.writeFile(wb, "Orders Report.xlsx");
  }


  return (
     <div className="flex flex-col h-screen overflow-hidden ">
      <div className="flex flex-1 relative">

        <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

        <div className="flex flex-col flex-1 bg-gray-50 overflow-x-hidden overflow-y-auto">
          <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

          <main className="max-h-screen flex flex-col  h-[100vh]"> 

          <nav className="bg-white py-2.5">
              <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex">
                 <div className=" mx-auto">                       
                      <input type="text" className="text-sm w-40 rounded-l-lg border border-gray-300 bg-white py-2.5 px-3 focus:outline-none" placeholder="search for Medicine" />
                      <button type="submit" className="px-2 py-3 text-sm font-medium text-white rounded-r-lg bg-blue-600 hover:bg-blue-800 focus:outline-none">Search</button>
                  </div>                                       
              </div>
          </nav>

            <div className="w-full py-6">
            <h6 className="pb-5 font-bold text-lg  px-1.5 lg:px-6 capitalize">Medicine</h6>

                <div className="flex justify-end pr-5">
                  <div className="flex bg-blue-200 text-blue-800 text-sm cursor-pointer rounded-md ml-auto px-3 py-1.5">
                     <button onClick={handleOnExport}><p className="text-lg text-blue-600  capitalize">Export</p>
                    </button>
                  </div>
                </div>
                   
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 px-2">
                    <div className="relative">
                        <DatePicker  placeholderText={'From'}  selected={selectedDate} onChange={handleDateChange} className="input text-sm md:w-40 2xl:w-60 rounded-lg border text-white border-gray-600 bg-gray-600 py-2.5 px-3 focus:bg-white focus:text-black focus:outline-none" />
                    </div>
                    <div className="relative">
                      <DatePicker  placeholderText={'To'}  selected={selectedDate} onChange={handleDateChange} className="input text-sm md:w-40 2xl:w-60 rounded-lg border text-white border-gray-600 bg-gray-600 py-2.5 px-3 focus:bg-white focus:text-black focus:outline-none"/>
                    </div>
                    <div className="relative flex items-center justify-center cursor-pointer text-white font-medium rounded-lg text-sm px-5 py-2 bg-gray-600 border border-gray-600 hover:bg-gray-700 hover:border-gray-600">
                        Ranking
                        <span
                            onClick={toggleFromDateDropdown}
                            className="material-symbols-outlined cursor-pointer"
                        >
                            {fromDateDropdown ? "expand_less" : "expand_more"}
                        </span>
                        {fromDateDropdown && (
                            <div className="absolute w-36 lg:w-32 mt-48 z-40 bg-white shadow-lg focus:outline-none">
                                <div className="py-1">
                                    <p className="px-4 py-2 text-sm text-gray-700 border-l-2 border-transparent dark:text-gray-400 dark:hover:text-gray-300 hover:text-black cursor-pointer capitalize">
                                        1
                                    </p>
                                </div>
                                <div className="py-1">
                                    <p className="px-4 py-2 text-sm text-gray-700 border-l-2 border-transparent dark:text-gray-400 dark:hover:text-gray-300 hover:text-black cursor-pointer">
                                        Aisle 2
                                    </p>
                                </div>
                                <div className="py-1">
                                    <p className="px-4 py-2 text-sm text-gray-700 border-l-2 border-transparent dark:text-gray-400 dark:hover:text-gray-300 hover:text-black cursor-pointer">
                                        Aisle 3
                                    </p>
                                </div>
                            </div>
                        )}
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
                          <thead className="relative align-bottom">
                              <tr>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Medicine</th>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Quantity_Sold</th>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Total_Sale</th>
                                <th className=" p-4 text-md font-medium tracking-wider text-center text-black ">From_Date</th>
                                <th className="relative p-4 text-md font-medium tracking-wider text-center text-black flex">To_Date</th>
                              </tr>
                          </thead>
                            <tbody className="bg-white ">
                                {orderReports.map((data, id) => (
                                <tr className="bg-gray-50" key={id}>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap capitalize">{data.medicine_name}</td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap capitalize">{data.quantity_sold}</td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap capitalize">{data.total_sale}</td>
                                <td className="p-4 text-sm text-center text-gray-400 whitespace-nowrap">{formatDate(data.startDate)}</td>  
                                <td className="p-4 text-sm text-center text-gray-400 whitespace-nowrap">{formatDate(data.endDate)}</td>  
                                </tr> 
                              ))}
                             
                            </tbody>
                          </table>
                            {/* <div className="grid w-full place-items-right rounded-lg p-6">
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
                          </div> */}
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

export default OrderReport