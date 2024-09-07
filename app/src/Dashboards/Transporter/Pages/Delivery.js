import React, { useEffect, useState } from "react";
import Navbar from '../../Component/Navbar';
import Sidebar from '../../Component/Aside';
import { Link } from 'react-router-dom';
import UseSidebar from '../../utils/constant/useSidebar';
import { Api } from "../../utils/Api";

function Delivery() {
  const { sidebarOpen, toggleSidebar } = UseSidebar();
  const [items, setItems] = useState([]);


  useEffect(() => {
		const getDeliveries = async () => {
		  const data = await Api("/Transport/Deliveries", "GET");
			setItems(data.delivery);			
		};
	
		getDeliveries();
	}, []);


  return (
    <div className="flex flex-col h-screen overflow-hidden ">
      <div className="flex flex-1 relative">

        <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

        <div className="flex flex-col flex-1 bg-gray-50 overflow-x-hidden overflow-y-auto">
          <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

          <main className="max-h-screen flex flex-col  h-[100vh]"> 
            <div className="w-full py-6 mx-auto">
          
            <h6 className="pb-5 font-bold text-lg px-1.5 lg:px-6 capitalize">Deliveries</h6>

               <div className="flex flex-wrap py-5">
                  <div className="flex-none w-full max-w-full">
                    <div className=" flex flex-col mb-10 break-words bg-white border-0 border-transparent border-solid bg-clip-border">     
                      <div className="flex-auto px-0 pt-0 pb-2">
                        <div className="p-0 overflow-x-auto">
                          <table className="min-w-full divide-y divide-gray-200 ">
                          <thead className="align-bottom">
                              <tr>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Order Id</th>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Phone Number</th>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Total Amount</th>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Status</th>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black"></th>
                              </tr>
                          </thead>
                            <tbody className="bg-white ">
                            {items?.length === 0 &&(
                              <tr className="text-center">
                                <td className="p-4 text-md text-center text-gray-400">no deliveries</td>
                                </tr>
                            )}
                              {items.map((item, id) => (
                              <tr key={id} className="bg-gray-50">
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap">{item.order_id}</td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap">{item.transport.user.phoneNumber}</td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap">{item.order.total_price}</td>       
                                <td className="p-4 whitespace-nowrap text-center">
                                  {item.order.order_status === 'Packed' && (
                                    <span className="bg-purple-100 text-purple-500 rounded-md text-sm mr-2 px-2.5 py-0.5 border border-purple-50">{item.order.order_status}</span>
                                  )}
                                   {item.order.order_status === 'Delivered' && (
                                    <span className="bg-green-100 text-green-500 rounded-md text-sm mr-2 px-2.5 py-0.5 border border-green-50">{item.order.order_status}</span>
                                  )}                          
                                </td>
                                
                                <td className="p-4 text-md text-gray-400 whitespace-nowrap">
                                    <Link to={`/SingleOrderDelivery/${item.order_id}`} className="text-md leading-tight font-semibold text-slate-400 hover:text-blue-500"> View </Link>
                                </td>
                              </tr>  
                              ))}
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
  );
}

export default Delivery