import React, { useEffect, useState } from "react";
import Navbar from './Navbar'
import { SERVER_URL } from "../../constant/severUrl";
import { formatDate } from "../../constant/formatDate";
import axios from "axios";
import { useParams } from "react-router-dom";

function SingleOrder() {
    const [singleOrder, setSingleOrder] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getSingleOrder = async () => {
            const res = await axios.get(`${SERVER_URL}/Orders/${id}`);
            setSingleOrder([res.data.order]);
        };
        getSingleOrder();
    }, [id]);

     // Calculate the total sum of all orders
     const totalSum = singleOrder.reduce((acc, item) => acc + item.total_price, 0);

     return (
         <>
             <Navbar />
 
             <section class="py-24 relative">
                 <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
                     <h2 class="font-manrope font-bold text-4xl leading-10 text-black text-center pb-10">
                         Payment Successful
                     </h2>
                     {singleOrder.map((item, id) => (
                         <div key={id} class="main-box border border-gray-200 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full">
                             <div class="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200">
                                 <div class="data">
                                     <p class="font-semibold text-base leading-7 text-black">
                                         Order Id: <span class="text-indigo-600 font-medium">#{item.order_id}</span>
                                     </p>
                                     <p class="font-semibold text-base leading-7 text-black mt-4">
                                         Order Payment: <span class="text-gray-400 font-medium">{formatDate(item.order_date)}</span>
                                     </p>
                                 </div>
                             </div>
                             <div class="w-full px-3 min-[400px]:px-6">
                                 <div class="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full">
                                     <div class="flex flex-row items-center w-full ">
                                         <div class="grid grid-cols-1 lg:grid-cols-2 w-full">
                                             <div class="flex items-center">
                                                 <div class="">
                                                     <h2 class="font-semibold text-xl leading-8 text-black mb-3">
                                                         {item.orderLists[0].medicine.medicine_name}
                                                     </h2>
                                                 </div>
                                             </div>
                                             <div class="grid grid-cols-5">
                                                 <div class="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                                                     <div class="flex gap-3 lg:block">
                                                         <p class="font-medium text-sm leading-7 text-black">Price</p>
                                                         <p class="lg:mt-4 font-medium text-sm leading-7 text-indigo-600">
                                                             Ksh {item.total_price}
                                                         </p>
                                                     </div>
                                                 </div>
                                                 <div class="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                                                     <div class="flex gap-3 lg:block">
                                                         <p class="font-medium text-sm leading-7 text-black">Qty</p>
                                                         <p class="font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600">
                                                             {item.orderLists[0].quantity}
                                                         </p>
                                                     </div>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                             <div class="w-full border-t border-gray-200 px-6 flex flex-col lg:flex-row items-center justify-between">
                                 <div class="flex flex-col sm:flex-row items-center max-lg:border-b border-gray-200">
                                     <p class="font-medium text-lg text-gray-900 pl-6 py-3 max-lg:text-center">
                                         Paid using <span class="text-gray-500">Mpesa</span>
                                     </p>
                                 </div>
                                 <p class="font-semibold text-lg text-black py-6">
                                     Total Price: <span class="text-indigo-600">Ksh {totalSum}</span>
                                 </p>
                             </div>
                         </div>
                     ))}
 
                 </div>
             </section>
         </>
     );
 }
 
 export default SingleOrder;