import React from 'react'
import Navbar from './Navbar'

function SingleOrder() {
    return (
        <>
        <Navbar/>
        
        <section className="py-5 mt-20 lg:h-screen font-poppins">
            <h2 className='text-center text-2xl font-bold text-black'>Order Details</h2>
          <div className="justify-center px-6 md:flex space-x-2 space-y-3">
              <div className="justify-center flex-1 w-full px-6 py-2 mx-auto bg-white lg:py-10 md:px-7">
                  <div className="flex flex-col items-start justify-start w-full border-b border-gray-200 md:mt-3 md:flex-row md:items-center md:space-x-6 xl:space-x-8">
                      <div className="flex flex-col items-start justify-between w-full pb-2 space-y-2 md:flex-row md:space-y-0">
                          <div className="flex flex-col items-start justify-start w-full space-y-2">
                              <h2 className="text-lg font-semibold leading-6 text-gray-800 ">Long Coat for women</h2>
                              <div className="flex flex-col items-start justify-start space-y-3">
                                  <p className="text-sm leading-none text-gray-800">French Minimal Design</p>        
                              </div>
                          </div>
                          <div className="flex items-start justify-between w-full space-x-4">
                              <p className="text-base leading-6 text-gray-400 xl:text-lg">4</p>
                              <p className="text-base leading-6 text-gray-400 xl:text-lg">$36.00</p>
                              <p className="text-base font-semibold leading-6 text-gray-800 xl:text-lg"> $36.00</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </section>
        </>
      )
}

export default SingleOrder