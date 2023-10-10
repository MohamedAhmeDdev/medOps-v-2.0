import React, { useState, useEffect } from 'react';
import Navbar from '../../Component/Navbar';
import Sidebar from '../../Component/Aside';
import { Link } from 'react-router-dom';
import UseSidebar from '../../utils/constant/useSidebar';
import axios from "axios";
import { SERVER_URL } from "../../utils/constant/severUrl";
import { useParams } from "react-router-dom";

function Delivery() {
  const { sidebarOpen, toggleSidebar } = UseSidebar();
  const [deliveries, setDeliveries] = useState([]);
  const { id } = useParams();

  useEffect(() => {
		const getDeliveries = async () => {
      const data = await axios.get(`${SERVER_URL}/Manager/Deliveries/${id}`);
			setDeliveries(data.data.delivery)																																																																	
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
          
            <h6 className="pb-5 font-bold px-1.5 lg:px-6 text-lg capitalize">Deliveries</h6>

               <div className="flex flex-wrap py-5">
                  <div className="flex-none w-full max-w-full">
                    <div className=" flex flex-col mb-10 break-words bg-white border-0 border-transparent border-solid">     
                      <div className="flex-auto px-0 pt-0 pb-2">
                        <div className="p-0 overflow-x-auto">
                          <table className="min-w-full divide-y divide-gray-200 ">
                          <thead className="align-bottom">
                              <tr>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Order Id</th>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Username</th>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Phone Number</th>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Total Amount</th>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Status</th>
                              </tr>
                          </thead>
                            <tbody className="bg-white ">
                              {deliveries.length === 0 && (
                                <p className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">No item found</p>
                               )} 
                            {deliveries?.map((delivery, id)=>(
                              <tr key={id} className="bg-gray-50 ">
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap">{delivery.order_id}</td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap">{delivery.transport.user.username}</td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap">{delivery.transport.user.phoneNumber}</td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap">{delivery.order.total_price}</td>       
                                <td className="p-4 whitespace-nowrap text-center">
                                  {delivery.order.order_status === 'Pending' && (
                                     <span className="bg-orange-100 text-orange-400 rounded-md text-sm mr-2 px-2.5 border border-orange-50">{delivery.order.order_status}</span>
                                  )}
                                    {delivery.order.order_status === 'Packed' && (
                                    <span className="bg-purple-100 text-purple-500 rounded-md text-sm mr-2 px-2.5 border border-purple-50">{delivery.order.order_status}</span>
                                  )}
                                   {delivery.order.order_status === 'Delivered' && (
                                  <span className="bg-green-100 text-green-500 rounded-md text-sm mr-2 px-2.5 border border-green-50">{delivery.order.order_status}</span>
                                  )}        
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