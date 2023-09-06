import React from 'react'
import Navbar from './Navbar'

function ProductDetail() {
  return (
    <>
    <Navbar/>
    
    <section className="mt-20 bg-white py-11 font-poppins">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
            <div className="flex flex-wrap -mx-4">
                <div className="w-full px-4 md:w-1/2 ">
                    <div className="sticky top-0 z-50 ">
                        <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                            <img src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg" alt="" className="object-cover w-full h-96"/>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                    <div className="lg:pl-20">
                        <div className="mb-4">
                            <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold  md:text-4xl">Shoes</h2>
                            <p className="max-w-md mb-4 text-gray-700 ">Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet </p>
                            <p className="inline-block text-4xl font-bold text-gray-700 ">$1000.99</p>
                        </div>
                        <div className="p-4 mb-4">
                                <p className="mb-1 text-xs font-medium text-gray-700 ">Hurry up! left 23 in Stock</p>
                                <div className="w-full bg-gray-200 rounded-full h-2.5  dark:bg-gray-600">
                                    <div className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full"></div>
                                </div>
                         </div>
                        <div className="w-32 mb-4">
                            <p className="w-full text-xl font-semibold text-gray-700 ">Quantity</p>
                            <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                                <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-400">
                                    <span className="m-auto text-2xl font-thin">-</span>
                                </button>
                                <input className="flex items-center w-full text-center text-gray-700 border bg-white outline-none focus:outline-none text-md hover:text-black"/>
                                <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-400">
                                    <span className="m-auto text-2xl font-thin">+</span>
                                </button>
                            </div>
                        </div>
                        <div className="w-32 mb-4">
                            <button className="w-full h-10 p-2 mr-4 bg-blue-500 dark:text-gray-200 text-gray-50 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500">
                               Buy Now
                            </button>
                       </div>
                    </div>
                </div>
            </div>
         </div>
    </section>
    </>
  )
}

export default ProductDetail