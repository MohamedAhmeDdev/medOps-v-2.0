import React, {useEffect, useState, useRef } from 'react';
import ReactToPrint from "react-to-print";
import { useParams } from "react-router-dom";
import axios from "axios";
import { LOGISTICS_SERVER_URL } from "../../..//constant/severUrl";
import logo  from '../../../assets/img/logo2.jpg'



function SingleOrder() {
  let componentRef = useRef();
  const [singleOrder, setSingleOrder] = useState({});
  const { id } = useParams();


  useEffect(() => {
    const getSingleOrder = async () => {
      try {
        const res = await axios.get(`${LOGISTICS_SERVER_URL}/order/${id}`);
         setSingleOrder(res.data.order)       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    getSingleOrder();
  }, [id]);


  return (
    <div className="flex flex-col h-screen overflow-hidden ">
  <div className="flex flex-1 relative">
    <div className="flex flex-col flex-1  overflow-x-hidden overflow-y-auto">
      <main className="max-h-screen flex flex-col  h-[100vh]"> 
       <div className="w-full px-3 lg:px-6 py-6 mx-auto">
          <h6 className="pb-5 font-bold text-lg lg:text-4xl capitalize">Order Id {singleOrder.order_id}</h6>

          <div className="w-full text-right">
            <ReactToPrint trigger={() => <button className='bg-gray-400 text-black text-sm cursor-pointer mr-2 px-2.5 py-1.5'>Print Shipping Label</button>} content={() => componentRef} />
          </div>

          <div className="flex flex-wrap pb-20 -mx-3">
          <div className="w-full max-w-full px-3 mt-6 ">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 rounded-lg bg-clip-border">
              <div className="p-6 px-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                <h6 className="mb-0 text-xl">Orders</h6>
              </div>
              <section className="py-10 relative">
                  <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
                        <div className="grid gap-6">
                          {singleOrder?.orderLists?.map((item, index) => (
                            <div
                              key={index}
                              className="rounded-md p-2 bg-gray-100 border border-gray-200 flex flex-col md:flex-row md:items-center gap-5"
                            >
                              <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3 md:gap-8">
                                <div>
                                  <h2 className="font-medium text-md leading-8 text-black mb-3">
                                    {item.medicine.medicine_name}
                                  </h2>
                                </div>
                                <div className="flex items-center justify-around gap-8">
                                  <h6 className="font-medium text-md leading-8 text-black">
                                    Ksh {item.price}
                                  </h6>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                    </div>
              </section>
          </div>
          </div>
          <div className="w-full max-w-full px-3 mt-6 md:w-5/12 hidden">
          <div className="relative flex flex-col h-full min-w-0 mb-6 break-words bg-white  border border-black" ref={(el) => (componentRef = el)}>
            <div className="flex-auto p-4 pt-6">
            <div className="text-center border-b pb-5 border-black">
                <h2 className="text-xl text-black font-semibold">Shipping Label</h2>
                  <div className="mb-2  h-36 font-semibold text-xl">
                    <img className="w-full  h-full" src={logo} alt="Logo"/>
                  </div>
                <p className="text-lg text-black">MedOps</p>
              </div>

              <div className="mb-6">
                <h6 className="my-4 font-bold leading-tight uppercase text-xs text-slate-500">Sender's Information:</h6>
                <p className="text-sm font-medium">MedOps</p>
                <p>789 Pharmacy Lane</p>
                <p>Cityville, State 54321</p>
                <p>Phone: (123) 456-7890</p>
                <p>Email: pharmacy@example.com</p>
              </div>
              
              <div className="mb-6">
                <h6 className="my-4 font-bold leading-tight uppercase text-xs text-slate-500">Recipient's Information:</h6>
                <p className="text-sm">customer name: {singleOrder.user?.name}</p>
                <p>address: {singleOrder.user?.address}</p>
                <p>Phone: {`0${singleOrder.user?.phoneNumber}`}</p>
              </div>
              
              <div className="mb-6 border-t border-black">
                <h6 className="my-4 font-bold leading-tight uppercase text-xs text-slate-500">Order Number:</h6>
                <p className="text-sm font-medium">#{singleOrder.order_id}</p>
              </div>
              
              <div className="mb-6">
                <img src="[BarcodeImage]" alt="Barcode" className="w-2/3 mx-auto" />
              </div>
              
              <div className="mb-6">
                <img src="[QRCodeImage]" alt="QR Code" className="w-1/2 mx-auto" />
              </div>
              
              <div className="mb-6 border-t border-black">
                <h6 className="my-4 font-bold leading-tight uppercase text-xs text-slate-500">Special Instructions:</h6>
                <p className="text-sm font-medium">Store in Cool, Dry Place.</p>
                <p className="text-sm font-medium">Handle with Care.</p>
                <p className="text-sm font-medium">Keep Out of Reach of Children.</p>
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

export default SingleOrder