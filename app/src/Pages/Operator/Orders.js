import React, { useEffect, useState } from "react";
import Navbar from '../../Component/Navbar';
import Sidebar from '../../Component/Aside';
import { Link } from 'react-router-dom';
import UseSidebar from '../../utils/constant/useSidebar';
import { Api } from "../../utils/Api";

function Orders() {
  const { sidebarOpen, toggleSidebar } = UseSidebar();
  const [statusDropdown, setStatusDropdown] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
		const getOrders = async () => {
		  const data = await Api("/Operator/Orders", "GET");
			setOrders(data.order);																										
		};
	
		getOrders();
	}, []);


  const toggleDropdown = () => {
    setStatusDropdown(!statusDropdown);
  };



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
                      <input type="text" className="text-sm w-40 rounded-l-lg border border-gray-300 bg-white py-2.5 px-3 focus:outline-none" placeholder="search for Order" />
                      <button type="submit" className="px-2 py-3 text-sm font-medium text-white rounded-r-lg bg-blue-600 hover:bg-blue-800 focus:outline-none">Search</button>
                  </div>                    
               </div>
            </nav>
          
            <div className="w-full py-6 mx-auto">
            <h6 className="pb-5 font-bold text-lg px-1.5 lg:px-6 capitalize">Orders</h6>

               <div className="flex flex-wrap py-5">
                  <div className="flex-none w-full max-w-full">
                    <div className=" flex flex-col mb-10 break-words bg-white border-0 border-transparent border-solid bg-clip-border">     
                      <div className="flex-auto px-0 pt-0 pb-2">
                        <div className="p-0 overflow-x-auto">
                          <table className="min-w-full divide-y divide-gray-200 ">
                          <thead className="align-bottom">
                              <tr>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Order Id</th>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Customer_Name</th>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Phone Number</th>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Total Amount</th>
                                <th className="relative p-4 text-md font-medium tracking-wider text-left text-black  flex">Status
                                    {statusDropdown ? (
                                            <span  onClick={toggleDropdown} className="material-symbols-outlined cursor-pointer">expand_less</span>
                                            ) : (
                                              <span  onClick={toggleDropdown} className="material-symbols-outlined cursor-pointer">expand_more</span>
                                        )}
                                      {statusDropdown && (
                                        <div className="absolute w-36 lg:w-28 mt-10 origin-top-right bg-white shadow-lg ring-black ring-opacity-5 focus:outline-none" onClick={() => setStatusDropdown(false)}>
                                          <div className="py-1">
                                              <p className="flex px-4 py-2 text-sm text-gray-700 border-l-2 border-transparent dark:text-gray-400 dark:hover:text-gray-300 hover:text-black cursor-pointer capitalize">Delivered</p>
                                          </div>
                                          <div className="py-1">
                                              <p className="flex px-4 py-2 text-sm text-gray-700 border-l-2 border-transparent dark:text-gray-400 dark:hover:text-gray-300 hover:text-black cursor-pointer">Packed</p>
                                          </div>
                                          <div className="py-1">
                                              <p className="flex px-4 py-2 text-sm text-gray-700 border-l-2 border-transparent dark:text-gray-400 dark:hover:text-gray-300 hover:text-black cursor-pointer">Cancelled</p>
                                          </div>
                                          <div className="py-1">
                                              <p className="flex px-4 py-2 text-sm text-gray-700 border-l-2 border-transparent dark:text-gray-400 dark:hover:text-gray-300 hover:text-black cursor-pointer">Pending</p>
                                          </div>
                                        </div>
                                    )}
                                </th>
                                <th className="p-4 text-md font-medium tracking-wider text-left text-black"></th>
                              </tr>
                          </thead>
                            <tbody className="bg-white">
                            {orders.length === 0 && (
                              <p className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">No item found</p>
                             )}
                              {orders.map((order, id) =>(
                              <tr key={id} className="bg-gray-50">
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap">{order.order_id}</td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap">{order.user.username}</td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap">{order.user.phoneNumber}</td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap">{order.total_price}</td>       
                                <td className="p-4 whitespace-nowrap">
                                  {order.order_status === 'Packed' && (
                                    <span className="bg-purple-100 text-purple-500 rounded-md text-sm mr-2 px-2.5 py-0.5 border border-purple-50">{order.order_status}</span>
                                  )}
                                    {order.order_status === 'Delivered' && (
                                     <span className="bg-green-100 text-green-500 rounded-sm text-sm mr-2 px-2.5 py-0.5 border border-green-50">{order.order_status}</span>
                                  )}
                                    {order.order_status === 'Pending' && (
                                  <span className="bg-orange-100 text-orange-500 rounded-md text-sm mr-2 px-2.5 py-0.5 border border-orange-50">{order.order_status}</span>
                                  )}
                               
                                </td>
                                <td className="p-4 text-md text-gray-400 whitespace-nowrap">
                                    <Link to={`/SingleOrder/${order.order_id}`} className="text-md font-semibold leading-tight text-slate-400"> View </Link>
                                </td>
                              </tr>  
                              ))}
                            </tbody>
                          </table>
                            {/* <div className="grid w-full place-items-right rounded-lg p-6">
                                  <nav>
                                      <ul className="flex">
                                          <li>
                                              <a className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-900 transition duration-150 ease-in-out hover:bg-light-300" href="#" aria-label="Previous">
                                              <span className="material-symbols-outlined">chevron_left</span>
                                              </a>
                                          </li>
                                          <li>
                                              <a className="mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-pink-600 to-pink-400 p-0 text-sm text-white shadow-md shadow-pink-900/20 transition duration-150 ease-in-out" href="#">1</a>
                                          </li>
                                          <li>
                                              <a className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-900 transition duration-150 ease-in-out hover:bg-light-300" href="#">2</a>
                                          </li>
                                          <li>
                                              <a className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-900 transition duration-150 ease-in-out hover:bg-light-300" href="#">3</a>
                                          </li>
                                          <li>
                                              <a className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-900 transition duration-150 ease-in-out hover:bg-light-300" href="#" aria-label="Next">
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

export default Orders