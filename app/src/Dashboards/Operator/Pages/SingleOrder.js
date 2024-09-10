import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { OPERATOR_SERVER_URL } from "../../../constant/severUrl";
import { formatDate } from "../../../constant/formatDate";

function SingleOrder() {
  const [singleOrder, setSingleOrder] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getSingleOrder = async () => {
      try {
        const res = await axios.get(`${OPERATOR_SERVER_URL}/delivery/${id}`);
        setSingleOrder(res.data.delivery);
        console.log(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getSingleOrder();
  }, [id]);


  const totalSum = singleOrder?.order?.orderLists?.reduce((acc, item) => acc + item.price, 0) || 0;


  return (
    <div className="flex flex-col h-screen overflow-hidden ">
      <div className="flex flex-1 relative">
        <div className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
          <main className="max-h-screen flex flex-col ">
            <div className="w-full px-3 lg:px-6 py-6 mx-auto">
              <h6 className="pb-5 font-bold text-lg lg:text-lg capitalize">
                Order ID: {singleOrder?.order?.order_id}
              </h6>

              <div className="flex flex-col xl:flex-row justify-center overflow-y-hidden items-stretch">
                {/* Order Details */}
                <div className="w-full max-w-full px-3 mt-6 lg:w-7/12">
                  <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-lg bg-clip-border">
                    <div className="p-6 px-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                    <h6 className="my-4 font-bold leading-tight uppercase text-xs text-slate-500"> Order Items</h6>
                    </div>
                    <section className="py-10 relative">
                      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
                        <div className="grid gap-6">
                          {singleOrder?.order?.orderLists?.map((item, index) => (
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

                {/* Customer Information */}
                <div className="w-full max-w-full px-3 mt-6 lg:w-5/12 md:flex-none">
                  <div className="relative flex flex-col h-full min-w-0 mb-6 break-words bg-white border-0 shadow-soft-xl bg-clip-border">
                    <div className="flex-auto p-4 pt-6">
                      <h6 className="my-4 font-bold leading-tight uppercase text-xs text-slate-500">
                        Customer Information
                      </h6>
                      <ul className="flex flex-col px-10 mb-0 rounded-lg">
                        <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 rounded-t-inherit text-inherit rounded-xl">
                          <div className="flex items-center">
                            <div className="flex flex-col">
                              <h6 className="mb-1 leading-normal text-sm text-black font-bold">
                                Order Date:
                              </h6>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-center">
                            <p className="relative inline-block m-0 leading-normal text-slate-700 text-sm bg-clip-text capitalize">
                              {formatDate(singleOrder?.order?.order_date)}
                            </p>
                          </div>
                        </li>

                        <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 rounded-xl">
                          <div className="flex items-center">
                            <div className="flex flex-col">
                              <h6 className="mb-1 leading-normal text-sm text-black font-bold">
                                Order Status:
                              </h6>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-center">
                            {singleOrder?.order?.order_status === "Pending" && (
                              <span className="bg-orange-100 text-orange-400 rounded-md text-sm mr-2 px-2.5 border border-orange-50">
                                {singleOrder?.order?.order_status}
                              </span>
                            )}
                            {singleOrder?.order?.order_status === "Packed" && (
                              <span className="bg-purple-100 text-purple-500 rounded-md text-sm mr-2 px-2.5 border border-purple-50">
                                {singleOrder?.order?.order_status}
                              </span>
                            )}
                            {singleOrder?.order?.order_status === "Delivered" && (
                              <span className="bg-green-100 text-green-500 rounded-md text-sm mr-2 px-2.5 border border-green-50">
                                {singleOrder?.order?.order_status}
                              </span>
                            )}
                          </div>
                        </li>

                        <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 rounded-xl">
                          <div className="flex items-center">
                            <div className="flex flex-col">
                              <h6 className="mb-1 leading-normal text-sm text-black font-bold">
                                Delivery Address:
                              </h6>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-center">
                            <p className="relative inline-block m-0 leading-normal text-slate-700 text-sm bg-clip-text capitalize">
                              {singleOrder?.delivery_address}
                            </p>
                          </div>
                        </li>

                        <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 rounded-xl">
                          <div className="flex items-center">
                            <div className="flex flex-col">
                              <h6 className="mb-1 leading-normal text-sm text-black font-bold">
                                Phone Number:
                              </h6>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-center">
                            <p className="relative inline-block m-0 leading-normal text-slate-700 text-sm bg-clip-text">
                            {singleOrder?.order?.user?.phoneNumber}
                            </p>
                          </div>
                        </li>

                        <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 rounded-xl">
                          <div className="flex items-center">
                            <div className="flex flex-col">
                              <h6 className="mb-1 leading-normal text-sm text-black font-bold">
                                Customer Name:
                              </h6>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-center">
                            <p className="relative inline-block m-0 leading-normal text-slate-700 text-sm bg-clip-text capitalize">
                              {singleOrder?.order?.user?.name}
                            </p>
                          </div>
                        </li>

                        <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 rounded-xl">
                          <div className="flex items-center">
                            <div className="flex flex-col">
                              <h6 className="mb-1 leading-normal text-lg font-bold text-black">
                                Total Price:
                              </h6>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-center">
                            <p className="relative inline-block m-0 leading-normal text-slate-700 text-lg bg-clip-text">
                              Ksh {totalSum}
                            </p>
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
  );
}

export default SingleOrder;
