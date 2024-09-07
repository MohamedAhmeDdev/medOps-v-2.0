import React, { useEffect, useState } from "react";
import Navbar from '../../Component/Navbar';
import Sidebar from '../../Component/Aside';
import UseSidebar from '../../utils/constant/useSidebar';
import { useParams } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "../../utils/constant/severUrl";
import {formatDate} from '../../utils/constant/formatDate'


function SingleOrder() {
  const { sidebarOpen, toggleSidebar } = UseSidebar();
  const [singleOrder, setSingleOrder] = useState({});
  const { id } = useParams();


  useEffect(() => {
    const getSingleOrder = async () => {
      try {
        const res = await axios.get(`${SERVER_URL}/Operator/Orders/${id}`);
         setSingleOrder(res.data.order)
              
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    getSingleOrder();
  }, [id]);



 return(
  <div className="flex flex-col h-screen overflow-hidden ">
  <div className="flex flex-1 relative">

    <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

    <div className="flex flex-col flex-1 bg-gray-50 overflow-x-hidden overflow-y-auto">
      <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

      <main className="max-h-screen flex flex-col  h-[100vh]"> 
       <div className="w-full px-3 lg:px-6 py-6 mx-auto">
      
     
        <h6 className="pb-5 font-bold text-lg lg:text-lg capitalize">Order Id 5454</h6>

         <div className="flex flex-wrap pb-20 -mx-3">
          <div className="w-full max-w-full px-3 mt-6 md:w-7/12 md:flex-none">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-lg bg-clip-border">
              <div className="p-6 px-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                <h6 className="mb-0 text-xl">Orders</h6>
              </div>
              <div className="flex-auto p-4 pt-6">
                <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                <li className="relative flex justify-around p-6 mb-2 border-0 rounded-t-inherit bg-gray-100">
                    <div className="flex items-center">
                      <div className="flex flex-col">
                      <span className="mb-2 font-semibold text-md lg:text-lg capitalize">Medicine Name</span>
                      <span className="mb-2 text-md capitalize">{singleOrder.orderLists?.[0]?.medicine?.medicine_name}</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <span className="mb-2 font-semibold text-md lg:text-lg">Price</span>
                      <span className="mb-2 text-md">{singleOrder.orderLists?.[0]?.price}</span>
                    </div>
                  </li>
                </ul>
              </div>
          </div>
          </div>
          <div className="w-full max-w-full px-3 mt-6 md:w-5/12 md:flex-none">
            <div className="relative flex flex-col h-full min-w-0 mb-6 break-words bg-white border-0 shadow-soft-xl bg-clip-border">    
              <div className="flex-auto p-4 pt-6">
                <h6 className="my-4 font-bold leading-tight uppercase text-xs text-slate-500">Customer information</h6>
                <ul className="flex flex-col px-10 mb-0 rounded-lg">
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 rounded-t-inherit text-inherit rounded-xl">
                    <div className="flex items-center">
                      <div className="flex flex-col">
                        <h6 className="mb-1 leading-normal text-sm text-black font-bold">Order Id:</h6>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <p className="relative inline-block m-0 leading-normal text-slate-700 text-sm bg-clip-text">{singleOrder.order_id}</p>
                    </div>
                  </li>
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 border-t-0 text-inherit rounded-xl">
                    <div className="flex items-center">
                      <div className="flex flex-col">
                        <h6 className="mb-1 leading-normal text-sm text-black font-bold">Order Date:</h6>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                         <p className="relative inline-block m-0 leading-normal text-slate-700 text-sm bg-clip-text capitalize">{formatDate(singleOrder.order_date)}</p>
                    </div>
                  </li>
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 border-t-0 text-inherit rounded-xl">
                    <div className="flex items-center">
                      <div className="flex flex-col">
                        <h6 className="mb-1 leading-normal text-sm text-black font-bold">Order Status:</h6>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                         {singleOrder.order_status === 'Pending' && (
                            <span className="bg-orange-100 text-orange-400 rounded-md text-sm mr-2 px-2.5 border border-orange-50">{singleOrder.order_status}</span>
                          )}
                          {singleOrder.order_status === 'Packed' && (
                            <span className="bg-purple-100 text-purple-500 rounded-md text-sm mr-2 px-2.5 border border-purple-50">{singleOrder.order_status}</span>
                          )}
                          {singleOrder.order_status === 'Delivered' && (
                             <span className="bg-green-100 text-green-500 rounded-md text-sm mr-2 px-2.5 border border-green-50">{singleOrder.order_status}</span>
                          )} 
                    </div>
                  </li>
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 border-t-0 text-inherit rounded-xl">
                    <div className="flex items-center">
                      <div className="flex flex-col">
                        <h6 className="mb-1 leading-normal text-sm text-black font-bold">Delivery Address:</h6>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                         <p className="relative inline-block m-0 leading-normal text-slate-700 text-sm bg-clip-text capitalize">{singleOrder.user?.address}</p>
                    </div>
                  </li>
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 border-t-0 text-inherit rounded-xl">
                    <div className="flex items-center">
                      <div className="flex flex-col">
                        <h6 className="mb-1 leading-normal text-sm text-black font-bold">Phone Number:</h6>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                         <p className="relative inline-block m-0 leading-normal text-slate-700 text-sm bg-clip-text">{singleOrder.user?.phoneNumber}</p>
                    </div>
                  </li>
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 border-t-0 text-inherit rounded-xl">
                    <div className="flex items-center">
                      <div className="flex flex-col">
                        <h6 className="mb-1 leading-normal text-sm text-black font-bold">Customer Name:</h6>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                         <p className="relative inline-block m-0 leading-normal text-slate-700 text-sm bg-clip-text capitalize">{singleOrder.user?.username}</p>
                    </div>
                  </li>
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 border-t-0 text-inherit rounded-xl">
                    <div className="flex items-center">
                      <div className="flex flex-col">
                        <h6 className="mb-1 leading-normal text-lg font-bold text-black">Total:</h6>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                         <p className="relative inline-block m-0 leading-normal text-slate-700 text-slg bg-clip-text">{singleOrder.total_price}</p>
                    </div>
                  </li>       
                </ul>
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

export default SingleOrder