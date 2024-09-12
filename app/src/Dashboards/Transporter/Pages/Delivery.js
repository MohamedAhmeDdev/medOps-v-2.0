import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Api } from "../../../utils/Api";
import { TRANSPORTER_SERVER_URL } from "../../../constant/severUrl";
import axios from "axios";
import { useNotification } from '../../../context/NotificationContext';

function Delivery() {
  const [items, setItems] = useState([]);
  const { showErrorNotification ,  showSuccessNotification} = useNotification();



	const getDeliveries = async () => {
		  const data = await Api(`${TRANSPORTER_SERVER_URL}/delivery`, "GET");
			setItems(data.delivery);		
		};
	
    useEffect(() => {
		getDeliveries();
	}, []);

  
  const handleOrder = async (orderId) => {
    try {
      const response = await axios.patch(`${TRANSPORTER_SERVER_URL}/delivery/OrderDelivered/${orderId}`, {
        order_id: orderId,
      });
      showSuccessNotification(response.data.message);
      getDeliveries();
    } catch (error) {
      showErrorNotification(error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden ">
      <div className="flex flex-1 relative">
        <div className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
          <main className="max-h-screen flex flex-col  h-[100vh]"> 
          <div class="px-4 mt-8">
                <label for="" class="sr-only"> Search </label>
                <div class="relative">
                    <div class="absolute inset-y-0 right-0 flex items-center pl-3 pointer-events-none">
                    <button type="submit" className="cursor-pointer  px-10 py-2 text-sm font-medium text-white rounded-r-lg bg-blue-600 hover:bg-blue-800 focus:outline-none">
                      <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>
                    </div>
                    <input type="search" name="" id="" class="block w-full py-2 px-2 border border-gray-300 rounded-lg focus:outline-none sm:text-sm" placeholder="Search here" />
                </div>
            </div>
            
            <div className="w-full py-6 mx-auto">
               <div className="flex flex-wrap py-5">
                  <div className="flex-none w-full max-w-full">
                    <div className=" flex flex-col mb-10 break-words border-0 border-transparent border-solid bg-clip-border">     
                      <div className="flex-auto px-0 pt-0 pb-2">
                        <div className="p-0 overflow-x-auto">
                        <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500 ">
                           <thead className="align-bottom bg-slate-500">
                              <tr>
                                <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70">Order Id</th>
                                <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70">Phone Number</th>
                                <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70">Address</th>
                                <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70">Total Amount</th>
                                <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70">Status</th>
                                <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70">Action</th>
                                <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70"></th>
                              </tr>
                          </thead>
                            <tbody className="">
                            {items?.length === 0 &&(
                              <tr className="text-center">
                                <td className="p-4 text-md text-center text-gray-400">no deliveries</td>
                                </tr>
                            )}
                              {items.map((item, id) => (
                              <tr key={id} className="bg-gray-50">
                                <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">{item.order_id}</td>
                                <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">{item.order.user.phoneNumber}</td>
                                <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">{item.order.user.address}</td>
                                <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">{item.order.total_price}</td>       
                                <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                  {item.order.order_status === 'Assigned' && (
                                    <span className="bg-purple-100 text-purple-500 rounded-md text-sm mr-2 px-2.5 py-0.5 border border-purple-50">{item.order.order_status}</span>
                                  )}
                                   {item.order.order_status === 'Delivered' && (
                                    <span className="bg-green-100 text-green-500 rounded-md text-sm mr-2 px-2.5 py-0.5 border border-green-50">{item.order.order_status}</span>
                                  )}                          
                                </td>
                                <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                  <button onClick={() => handleOrder(item.order_id)} className="bg-gray-300 text-black rounded-md text-sm mr-2 px-2.5 py-1 border border-green-50" >Delivered</button>
                                </td>
                                <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                    <Link to={`/transporter/${item.order_id}`} className="text-md leading-tight font-semibold text-slate-400 hover:text-blue-500"> View </Link>
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