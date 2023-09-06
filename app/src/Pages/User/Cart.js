import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Navbar from './Navbar';

function Cart() {

  const summaryRef = useRef();

  useEffect(() => {
    const summary = summaryRef.current;
    const summaryHeight = summary.getBoundingClientRect().height;
    const viewportHeight = window.innerHeight;
    const offset = (viewportHeight - summaryHeight) / 4;
  
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
    
    <section className="py-5 mt-20 lg:h-screen font-poppins">
        <h2 className='text-center text-2xl font-bold text-black'>Cart page</h2>
      <div className="justify-center px-6 md:flex space-x-2 space-y-6">
          <div className="justify-center flex-1 w-full px-6 py-6 mx-auto bg-white shadow-md border-gray-900 lg:py-10 md:px-7">
              <div className="flex flex-col items-start justify-start w-full border-b border-gray-200 md:mt-6 md:flex-row md:items-center md:space-x-6 xl:space-x-8">
                  <div className="flex flex-col items-start justify-between w-full pb-6 space-y-2 md:flex-row md:space-y-0">
                      <div className="flex flex-col items-start justify-start w-full space-y-4">
                          <h2 className="text-lg font-semibold leading-6 text-gray-800 ">Long Coat for women</h2>
                          <div className="flex flex-col items-start justify-start space-y-3">
                              <p className="text-sm leading-none text-gray-800">French Minimal Design</p>        
                          </div>
                      </div>
                      <div className="flex items-start justify-between w-full space-x-4">

                          <div className="flex justify-center w-1/5">
                            <button className="w-7 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer hover:bg-gray-400">
                            <span className="m-auto text-2xl font-thin">-</span>
                            </button>
                            <input className="mx-2 border text-center w-8 focus:outline-none" type="text"/>
                            <button className="w-7 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer hover:bg-gray-400">
                              <span className="m-auto text-2xl font-thin">+</span>
                            </button>
                          </div>
                          <p className="text-base leading-6 text-gray-400 xl:text-lg">$36.00</p>
                          <p className="text-base font-semibold leading-6 text-gray-800 xl:text-lg"> $36.00</p>
                      </div>
                  </div>
              </div>

              <div className="flex flex-col items-start justify-start w-full border-b border-gray-200 md:mt-6 md:flex-row md:items-center md:space-x-6 xl:space-x-8">
                  <div className="flex flex-col items-start justify-between w-full pb-6 space-y-2 md:flex-row md:space-y-0">
                      <div className="flex flex-col items-start justify-start w-full space-y-4">
                          <h2 className="text-lg font-semibold leading-6 text-gray-800 ">Long Coat for women</h2>
                          <div className="flex flex-col items-start justify-start space-y-3">
                              <p className="text-sm leading-none text-gray-800">French Minimal Design</p>        
                          </div>
                      </div>
                      <div className="flex items-start justify-between w-full space-x-4">

                          <div className="flex justify-center w-1/5">
                            <button className="w-7 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer hover:bg-gray-400">
                            <span className="m-auto text-2xl font-thin">-</span>
                            </button>
                            <input className="mx-2 border text-center w-8 focus:outline-none" type="text"/>
                            <button className="w-7 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer hover:bg-gray-400">
                              <span className="m-auto text-2xl font-thin">+</span>
                            </button>
                          </div>
                          <p className="text-base leading-6 text-gray-400 xl:text-lg">$36.00</p>
                          <p className="text-base font-semibold leading-6 text-gray-800 xl:text-lg"> $36.00</p>
                      </div>
                  </div>
              </div>

              <div className="flex flex-col items-start justify-start w-full border-b border-gray-200 md:mt-6 md:flex-row md:items-center md:space-x-6 xl:space-x-8">
                  <div className="flex flex-col items-start justify-between w-full pb-6 space-y-2 md:flex-row md:space-y-0">
                      <div className="flex flex-col items-start justify-start w-full space-y-4">
                          <h2 className="text-lg font-semibold leading-6 text-gray-800 ">Long Coat for women</h2>
                          <div className="flex flex-col items-start justify-start space-y-3">
                              <p className="text-sm leading-none text-gray-800">French Minimal Design</p>        
                          </div>
                      </div>
                      <div className="flex items-start justify-between w-full space-x-4">

                          <div className="flex justify-center w-1/5">
                            <button className="w-7 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer hover:bg-gray-400">
                            <span className="m-auto text-2xl font-thin">-</span>
                            </button>
                            <input className="mx-2 border text-center w-8 focus:outline-none" type="text"/>
                            <button className="w-7 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer hover:bg-gray-400">
                              <span className="m-auto text-2xl font-thin">+</span>
                            </button>
                          </div>
                          <p className="text-base leading-6 text-gray-400 xl:text-lg">$36.00</p>
                          <p className="text-base font-semibold leading-6 text-gray-800 xl:text-lg"> $36.00</p>
                      </div>
                  </div>
              </div>

              <div className="flex flex-col items-start justify-start w-full border-b border-gray-200 md:mt-6 md:flex-row md:items-center md:space-x-6 xl:space-x-8">
                  <div className="flex flex-col items-start justify-between w-full pb-6 space-y-2 md:flex-row md:space-y-0">
                      <div className="flex flex-col items-start justify-start w-full space-y-4">
                          <h2 className="text-lg font-semibold leading-6 text-gray-800 ">Long Coat for women</h2>
                          <div className="flex flex-col items-start justify-start space-y-3">
                              <p className="text-sm leading-none text-gray-800">French Minimal Design</p>        
                          </div>
                      </div>
                      <div className="flex items-start justify-between w-full space-x-4">

                          <div className="flex justify-center w-1/5">
                            <button className="w-7 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer hover:bg-gray-400">
                            <span className="m-auto text-2xl font-thin">-</span>
                            </button>
                            <input className="mx-2 border text-center w-8 focus:outline-none" type="text"/>
                            <button className="w-7 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer hover:bg-gray-400">
                              <span className="m-auto text-2xl font-thin">+</span>
                            </button>
                          </div>
                          <p className="text-base leading-6 text-gray-400 xl:text-lg">$36.00</p>
                          <p className="text-base font-semibold leading-6 text-gray-800 xl:text-lg"> $36.00</p>
                      </div>
                  </div>
              </div>

              <div className="flex flex-col items-start justify-start w-full border-b border-gray-200 md:mt-6 md:flex-row md:items-center md:space-x-6 xl:space-x-8">
                  <div className="flex flex-col items-start justify-between w-full pb-6 space-y-2 md:flex-row md:space-y-0">
                      <div className="flex flex-col items-start justify-start w-full space-y-4">
                          <h2 className="text-lg font-semibold leading-6 text-gray-800 ">Long Coat for women</h2>
                          <div className="flex flex-col items-start justify-start space-y-3">
                              <p className="text-sm leading-none text-gray-800">French Minimal Design</p>        
                          </div>
                      </div>
                      <div className="flex items-start justify-between w-full space-x-4">

                          <div className="flex justify-center w-1/5">
                            <button className="w-7 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer hover:bg-gray-400">
                            <span className="m-auto text-2xl font-thin">-</span>
                            </button>
                            <input className="mx-2 border text-center w-8 focus:outline-none" type="text"/>
                            <button className="w-7 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer hover:bg-gray-400">
                              <span className="m-auto text-2xl font-thin">+</span>
                            </button>
                          </div>
                          <p className="text-base leading-6 text-gray-400 xl:text-lg">$36.00</p>
                          <p className="text-base font-semibold leading-6 text-gray-800 xl:text-lg"> $36.00</p>
                      </div>
                  </div>
              </div>
          
              <div className="flex flex-wrap items-center justify-between gap-4">
                <Link to="/medicine" className="flex  text-indigo-600 text-sm mt-10">
                  <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
                  Continue Shopping
                </Link>
              </div>
          </div>

          <div  ref={summaryRef} className='lg:w-1/4 h-full px-8 py-10 border-4 border-gray-400 bg-gray-100'>
                <h1 className=" text-2xl border-b pb-2">Order Summary</h1>
              <div className="flex justify-between mt-5 mb-5">
                  <span className=" text-sm uppercase">Items 3</span>
                  <span className=" text-sm">590$</span>
              </div>  
              <div className="border-t mt-4">
                <div className="flex  justify-between py-6 text-sm uppercase">
                    <span>Total cost</span>
                    <span>$600</span>
                </div>
                <Link to='/checkout'>
                    <button className="bg-indigo-500  hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                </Link>
              </div>
          </div>
      </div>
    </section>
    </>
  )
}

export default Cart