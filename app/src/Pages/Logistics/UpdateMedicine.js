import React, { useState } from 'react';
import Navbar from '../../Component/Navbar';
import Sidebar from '../../Component/Aside';
import { Link } from 'react-router-dom';
import UseSidebar from '../../utils/constant/useSidebar';


function UpdateMedicine() {
   const { sidebarOpen, toggleSidebar } = UseSidebar();

  return (
    <div className="flex flex-col h-screen overflow-hidden ">
      <div className="flex flex-1 relative">

        <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

        <div className="flex flex-col flex-1 bg-indigo-50 overflow-x-hidden overflow-y-auto">
          <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

          <main class="max-h-screen flex flex-col  h-[100vh]"> 

          <nav class="bg-white py-2.5">
                <div class="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex">
                  <div class=" mx-auto">                       
                      <input type="text" class="text-md w-1/100 relative flex-auto rounded-lg border border-solid border-gray-300 bg-white py-2 px-3 text-black focus:outline-none" placeholder="search for Order" />
                    </div>                     
              </div>
            </nav>

            <div class="w-full px-1.5 lg:px-6 py-6 mx-auto">
    
          
            <h6 class="pb-5 font-bold text-4xl capitalize">Medicine</h6>

               <div class="flex flex-wrap py-5">
                  <div class="flex-none w-full max-w-full">
                    <div class=" flex flex-col mb-10 break-words bg-white border-0 border-transparent border-solid rounded-2xl bg-clip-border">     
                      <div class="flex-auto px-0 pt-0 pb-2">
                        <div class="p-0 overflow-x-auto">
                        <form>
                          <div class="px-4">
                            <div class="pb-12">
                              <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div class="sm:col-span-3">
                                  <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Medicine_Category</label>
                                  <div class="mt-2">
                                  <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                      <option>United States</option>
                                      <option>Canada</option>
                                      <option>Mexico</option>
                                    </select>
                                  </div>
                                </div>

                                <div class="sm:col-span-3">
                                  <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Medicine</label>
                                  <div class="mt-2">
                                    <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                  </div>
                                </div>

                                <div class="sm:col-span-3">
                                  <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Total_Quantity</label>
                                  <div class="mt-2">
                                    <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                  </div>
                                </div>

                                <div class="sm:col-span-3">
                                  <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Price</label>
                                  <div class="mt-2">
                                    <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                  </div>
                                </div>

                                <div class="sm:col-span-2 sm:col-start-1">
                                  <label for="city" class="block text-sm font-medium leading-6 text-gray-900">Barcode</label>
                                  <div class="mt-2">
                                    <input type="text" name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                  </div>
                                </div>

                                <div class="sm:col-span-2">
                                  <label for="region" class="block text-sm font-medium leading-6 text-gray-900">Aisle</label>
                                  <div class="mt-2">
                                    <input type="text" name="region" id="region" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                  </div>
                                </div>

                                <div class="sm:col-span-2">
                                  <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">Expiry_Date</label>
                                  <div class="mt-2">
                                    <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
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

export default UpdateMedicine