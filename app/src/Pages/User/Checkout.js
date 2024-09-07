import React, { useRef, useEffect, useState } from 'react';
import Navbar from './Navbar';
import { UseCartContext } from "../../Hook/UseCartContext";
import { SERVER_URL } from "../../constant/severUrl";
import { Api } from "../../utils/Api";
import { getUserInfo } from "../../utils/Token";
import {useNavigate } from 'react-router-dom';

function Checkout() {
  const summaryRef = useRef();
  const { cartItems, clear } = UseCartContext();
  const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);
  const userInfo = getUserInfo();
  const address = userInfo ? userInfo.address : null;
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errors] = useState("");
  const navigate = useNavigate();

  const placeOrder = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const order = {
      medicineOrders: cartItems.map((item) => ({
        medicine_id: item.medicine_id,
        quantity: item.quantity,
        price: item.price,
      })),
      delivery_address: address,
    };
    try {
    Api("/Orders", "POST", order)
      .then((res) => {  setSuccessMessage("Order Confirmed.");
      setTimeout(() => {
       navigate('/order');
       }, 2000); 

        clear()//its clears the cart
      })
    } catch (error) {
      if (error.response?.status === 400) {
       console.log('All Fields Are Required.');
      }
      setSuccessMessage("");
    } finally {
      setIsLoading(false);
    }
  };


  useEffect(() => {
    const summary = summaryRef.current;
    const summaryHeight = summary.getBoundingClientRect().height;
    const viewportHeight = window.innerHeight;
    const offset = (viewportHeight - summaryHeight) / 2;
  
    const handleScroll = () => {
      const summaryTop = summary.getBoundingClientRect().top;
  
      if (summaryTop <= offset) {
        summary.style.position = 'sticky';
        summary.style.top = `${offset}px`;
      } else {
        summary.style.position = 'static';
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <Navbar/>

    <div className='py-5 mt-20'>
      <h2 className='text-center text-2xl font-bold text-black'>Checkout</h2>
                 {isLoading && (
                    <div className="flex justify-center">
                      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-green-500 border-opacity-50"></div>
                    </div>
                  )}
                  {(errors || successMessage) && (
                    <div className={`p-3 rounded-lg mt-2 mx-2 ${errors ? "text-red-500 text-center bg-red-100": "text-green-500 text-center bg-green-100"}`}>
                      {errors || successMessage}
                    </div>
                  )}

      {cartItems.length === 0 && (
          <p className="px-6 py-4 mx-auto text-center whitespace-nowrap text-sm text-gray-500">No item added to the cart</p>
        )} 

        <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 mb-10">
          {cartItems.length  >= 1 && (
            <div className="px-4 pt-8">
              <p className="text-xl font-medium">Order Summary</p>
              <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                {cartItems.map((item, id) => (
                  <div key={id} className="flex flex-col rounded-lg bg-white sm:flex-row">
                    <div className="flex w-full justify-around px-4 py-4">
                      <span className="font-semibold">{item.medicine_name}</span>
                      <p className="text-lg font-bold">Ksh {item.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-lg font-medium pb-5">Shipping Methods</p>      
                  
                  <div className="peer-checked:bg-gray-50 flex rounded-lg border border-gray-300 p-4">
                    <div className="ml-5">
                      <p className="ext-slate-500 text-sm leading-6">We ship the orders for free</p>
                    </div>
                  </div>

                  <div className='pt-3'>
                  <p className="font-semibold text-gray-900">Shipping address</p>
                  <p className="text-gray-900">{address}</p>
                  </div>
            </div>
            )}

            <div ref={summaryRef}>
              {cartItems.length  >= 1 && (
                <div className="mt-10 my-auto bg-gray-50 px-4 py-10 lg:mt-10">
                  <form onSubmit={placeOrder}>
                  <p className="text-xl font-medium">Payment Details</p>
                  <div className="">
                    {/* <label htmlFor="number" className="mt-4 mb-2 block text-sm font-medium">Phone Number</label>
                    <div className="relative">
                      <input type="text" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"/>
                      <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                        <span className="material-symbols-outlined">call</span>
                      </div>
                    </div> */}
                  
                    <div className="mt-6 border-t border-b py-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">Shipping</p>
                        <p className="font-semibold text-gray-900">0.0</p>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">Total</p>
                      <p className="text-2xl font-semibold text-gray-900">Ksh {totalPrice}</p>
                    </div>
                  </div>
                  <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Place Order</button>
                  </form>
                </div>
              )}
            </div>
        </div>
    </div>
    </>
  )
}

export default Checkout