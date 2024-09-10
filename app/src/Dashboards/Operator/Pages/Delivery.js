import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { OPERATOR_SERVER_URL } from "../../../constant/severUrl";
import axios from "axios";
import { useParams } from "react-router-dom";

function Delivery() {
  const [deliveries, setDeliveries] = useState([]);
  const { id } = useParams();

  useEffect(() => {
		const getDeliveries = async () => {
      const data = await axios.get(`${OPERATOR_SERVER_URL}/delivery`);
			setDeliveries(data.data.delivery)																
		};
	
		getDeliveries();
	}, [id]);


  return (
    <div className="flex flex-col h-screen overflow-hidden ">
      <div className="flex flex-1 relative">
        <div className="flex flex-col flex-1  overflow-x-hidden overflow-y-auto">
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
                    <div className=" flex flex-col mb-10 break-words border-0 border-transparent border-solid">     
                      <div className="flex-auto px-0 pt-0 pb-2">
                        <div className="p-0 overflow-x-auto">
                          <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500 ">
                            <thead className="align-bottom bg-slate-500">
                              <tr>
                                <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70">Order Id</th>
                                <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70">Username</th>
                                <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70">Phone Number</th>
                                <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70">Total Amount</th>
                                <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70">Status</th>
                                <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70"></th>
                              </tr>
                          </thead>
                            <tbody className="">
                             {deliveries.length === 0 && (
                              <p className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">No item found</p>
                              )}
                              {deliveries?.map((delivery, id)=>(
                              <tr key={id} className="">
                                <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">{delivery.order_id}</td>
                                <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">{delivery.order.user.name}</td>
                                <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">{delivery.order.user.phoneNumber}</td>
                                <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">{delivery.order.total_price}</td>       
                                <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                  {delivery.order.order_status === 'Pending' && (
                                     <span className="bg-orange-100 text-orange-400 rounded-md text-sm mr-2 px-2.5 border border-orange-50">{delivery.order.order_status}</span>
                                  )}
                                   {delivery.order.order_status === 'Delivered' && (
                                  <span className="bg-green-100 text-green-500 rounded-md text-sm mr-2 px-2.5 border border-green-50">{delivery.order.order_status}</span>
                                  )}        
                                </td>
                                
                                <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                    <Link to={`/operator/singleOrder/${delivery.order_id}`} className="text-md font-semibold leading-tight text-slate-400 hover:text-blue-500"> View </Link>
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