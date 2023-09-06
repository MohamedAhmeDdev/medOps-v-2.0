import React, { useRef, useEffect } from 'react';
import Navbar from './Navbar';

function Checkout() {
  const summaryRef = useRef();

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
        <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
          <div className="px-4 pt-8">
            <p className="text-xl font-medium">Order Summary</p>
            <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
              <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                
                <div className="flex w-full flex-col px-4 py-4">
                  <span className="font-semibold">Nike Air Max Pro 8888 - Super Light</span>
                  <p className="text-lg font-bold">$138.99</p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                <div className="flex w-full flex-col px-4 py-4">
                  <span className="font-semibold">Nike Air Max Pro 8888 - Super Light</span>
                  <p className="mt-auto text-lg font-bold">$238.99</p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                <div className="flex w-full flex-col px-4 py-4">
                  <span className="font-semibold">Nike Air Max Pro 8888 - Super Light</span>
                  <p className="mt-auto text-lg font-bold">$238.99</p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                <div className="flex w-full flex-col px-4 py-4">
                  <span className="font-semibold">Nike Air Max Pro 8888 - Super Light</span>
                  <p className="mt-auto text-lg font-bold">$238.99</p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                <div className="flex w-full flex-col px-4 py-4">
                  <span className="font-semibold">Nike Air Max Pro 8888 - Super Light</span>
                  <p className="mt-auto text-lg font-bold">$238.99</p>
                </div>
              </div>
            </div>

            <p className="mt-8 text-lg font-medium pb-5">Shipping Methods</p>      
                
                <div className="peer-checked:bg-gray-50 flex rounded-lg border border-gray-300 p-4">
                  <div className="ml-5">
                    <p className="ext-slate-500 text-sm leading-6">We ship the orders for free</p>
                  </div>
                </div>
          </div>

          <div ref={summaryRef} className="mt-10 my-auto bg-gray-50 px-4 py-10 lg:mt-10">
            <p className="text-xl font-medium">Payment Details</p>
            <div className="">
              <label htmlFor="number" className="mt-4 mb-2 block text-sm font-medium">Phone Number</label>
              <div className="relative">
                <input type="text" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"/>
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <span className="material-symbols-outlined">call</span>
                </div>
              </div>
            
              <div className="mt-6 border-t border-b py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Subtotal</p>
                  <p className="font-semibold text-gray-900">$399.00</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Shipping</p>
                  <p className="font-semibold text-gray-900">0.0</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Total</p>
                <p className="text-2xl font-semibold text-gray-900">$408.00</p>
              </div>
            </div>
            <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Place Order</button>
          </div>
        </div>
    </div>
    </>
  )
}

export default Checkout