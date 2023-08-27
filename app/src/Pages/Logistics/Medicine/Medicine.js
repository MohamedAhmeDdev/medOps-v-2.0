import React, { useState } from 'react';
import Navbar from '../../../Component/Navbar';
import Sidebar from '../../../Component/Aside';
import { Link } from 'react-router-dom';
import UseSidebar from '../../../utils/constant/useSidebar';

function Medicine() {
  const { sidebarOpen, toggleSidebar } = UseSidebar();
  const [medicineDropdown, setMedicineDropdown] = useState(false);
  const [aisleDropdown, setAisleDropdown] = useState(false);

  const toggleDropdown = () => {
    setMedicineDropdown(!medicineDropdown);
  };


  const toggleAisleDropdown = () => {
    setAisleDropdown(!aisleDropdown);
  };


  return (
   <div className="flex flex-col h-screen overflow-hidden ">
      <div className="flex flex-1 relative">

        <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

        <div className="flex flex-col flex-1 bg-gray-50 overflow-x-hidden overflow-y-auto">
          <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

          <main className="max-h-screen flex flex-col  h-[100vh]"> 

          <nav className="bg-white py-2.5">
              <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex">
                  <div className=" mx-auto">                       
                      <input type="text" className="text-sm w-40 rounded-l-lg border border-gray-300 bg-white py-2.5 px-3 focus:outline-none" placeholder="search for Medicine" />
                      <button type="submit" className="px-2 py-3 text-sm font-medium text-white rounded-r-lg bg-blue-600 hover:bg-blue-800 focus:outline-none">Search</button>
                  </div>                   
              </div>
            </nav>

            <div className="w-full py-6 mx-auto">
            <h6 className="pb-5 font-bold px-1.5 lg:px-6 text-lg capitalize">Medicine</h6>
            <Link to='/createMedicine'>
                <div className="flex justify-end pr-5">
                  <div className="flex hover:bg-blue-200 text-blue-800 text-sm cursor-pointer ml-auto px-2.5 py-1.5">
                    <span className="material-symbols-outlined">add</span>
                    <p className="text-md text-blue-800 capitalize">Add medicine</p>
                  </div>
                </div>
              </Link>

               <div className="flex flex-wrap py-3">
                  <div className="flex-none w-full max-w-full">
                    <div className=" flex flex-col mb-10 break-words bg-white border-0 border-transparent border-solid bg-clip-border">     
                      <div className="flex-auto px-0 pt-0 pb-2">
                        <div className="p-0 overflow-x-auto ">
                          <table className="min-w-full divide-y divide-gray-200 ">
                          <thead className="align-bottom">
                              <tr>
                                <th className="relative p-4 text-md font-medium tracking-wider text-center text-black flex">Medicine_Category 
                                  {medicineDropdown ? (
                                      <span  onClick={toggleDropdown} class="material-symbols-outlined cursor-pointer">expand_less</span>
                                      ) : (
                                        <span  onClick={toggleDropdown} class="material-symbols-outlined cursor-pointer">expand_more</span>
                                  )}
                                {medicineDropdown && (
                                  <div className="absolute w-36 lg:w-44 mt-10 origin-top-right bg-white shadow-lg ring-black ring-opacity-5 focus:outline-none" onClick={() => setMedicineDropdown(false)}>
                                    <div className="py-1">
                                        <p className="flex px-4 py-2 text-sm text-gray-700 border-l-2 border-transparent dark:text-gray-400 dark:hover:text-gray-300 hover:text-black cursor-pointer capitalize">Pain Killer</p>
                                    </div>

                                    <div className="py-1">
                                        <p className="flex px-4 py-2 text-sm text-gray-700 border-l-2 border-transparent dark:text-gray-400 dark:hover:text-gray-300 hover:text-black cursor-pointer">Antibiotics</p>
                                    </div>

                                    <div className="py-1">
                                        <p className="flex px-4 py-2 text-sm text-gray-700 border-l-2 border-transparent dark:text-gray-400 dark:hover:text-gray-300 hover:text-black cursor-pointer">etc</p>
                                    </div>
                                  </div>
                               )}
                                </th>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Medicine</th>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Total_Quantity</th>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Price</th>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Barcode</th>
                                <th className="relative p-4 text-md font-medium tracking-wider text-center text-black flex">Aisle
                                {aisleDropdown ? (
                                      <span  onClick={toggleAisleDropdown} class="material-symbols-outlined cursor-pointer">expand_less</span>
                                      ) : (
                                        <span  onClick={toggleAisleDropdown} class="material-symbols-outlined cursor-pointer">expand_more</span>
                                  )}
                                {aisleDropdown && (
                                  <div className="absolute w-36 lg:w-28 mt-10 origin-top-right bg-white shadow-lg ring-black ring-opacity-5 focus:outline-none" onClick={() => setAisleDropdown(false)}>
                                    <div className="py-1">
                                        <p className="flex px-4 py-2 text-sm text-gray-700 border-l-2 border-transparent dark:text-gray-400 dark:hover:text-gray-300 hover:text-black cursor-pointer capitalize">Aisle 1</p>
                                    </div>

                                    <div className="py-1">
                                        <p className="flex px-4 py-2 text-sm text-gray-700 border-l-2 border-transparent dark:text-gray-400 dark:hover:text-gray-300 hover:text-black cursor-pointer">Aisle 2</p>
                                    </div>

                                    <div className="py-1">
                                        <p className="flex px-4 py-2 text-sm text-gray-700 border-l-2 border-transparent dark:text-gray-400 dark:hover:text-gray-300 hover:text-black cursor-pointer">Aisle 3</p>
                                    </div>
                                  </div>
                               )}
                                </th>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Expiry_Date</th>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Updated_Date</th>
                                <th className="p-4 text-md font-medium tracking-wider text-left text-black"></th>
                              </tr>
                          </thead>
                            <tbody className="bg-white ">
                              <tr className="bg-gray-50 ">
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400 capitalize">pain killer</td>
                                <td className="p-4 text-md text-center text-gray-500 whitespace-nowrap dark:text-gray-400 capitalize">Mara moja</td>
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400">44</td>       
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400">Ksh 55</td>  
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400">545445654</td>  
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400 capitalize">Aisle 5</td>
                                <td className="p-4 text-sm text-center text-gray-900 whitespace-nowrap dark:text-gray-400">7/5/2023</td>
                                <td className="p-4 text-sm text-center text-gray-900 whitespace-nowrap dark:text-gray-400">7/5/2023</td>
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400 cursor-pointer">
                                   < Link to='/updateMedicine' className="text-md font-semibold leading-tight text-slate-400 hover:text-blue-500">Edit </Link>
                                </td>
                              </tr>  
                              <tr>
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400 capitalize">pain killer</td>
                                <td className="p-4 text-md text-center text-gray-500 whitespace-nowrap dark:text-gray-400 capitalize">Mara moja</td>
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400">44</td>       
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400">Ksh 55</td>  
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400">545445654</td>  
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400 capitalize">Aisle 5</td>
                                <td className="p-4 text-sm text-center text-gray-900 whitespace-nowrap dark:text-gray-400">7/5/2023</td>
                                <td className="p-4 text-sm text-center text-gray-900 whitespace-nowrap dark:text-gray-400">7/5/2023</td>
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400 cursor-pointer">
                                  < Link to='/updateMedicine' className="text-md font-semibold leading-tight text-slate-400 hover:text-blue-500">Edit </Link>
                                </td>
                              </tr>
                              <tr className="bg-gray-50 ">
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400 capitalize">pain killer</td>
                                <td className="p-4 text-md text-center text-gray-500 whitespace-nowrap dark:text-gray-400 capitalize">Mara moja</td>
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400">44</td>       
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400">Ksh 55</td>  
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400">545445654</td>  
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400 capitalize">Aisle 5</td>
                                <td className="p-4 text-sm text-center text-gray-900 whitespace-nowrap dark:text-gray-400">7/5/2023</td>
                                <td className="p-4 text-sm text-center text-gray-900 whitespace-nowrap dark:text-gray-400">7/5/2023</td>
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400 cursor-pointer">
                                  < Link to='/updateMedicine' className="text-md font-semibold leading-tight text-slate-400 hover:text-blue-500">Edit </Link>
                                </td>
                              </tr>       
                              <tr>
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400 capitalize">pain killer</td>
                                <td className="p-4 text-md text-center text-gray-500 whitespace-nowrap dark:text-gray-400 capitalize">Mara moja</td>
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400">44</td>       
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400">Ksh 55</td>  
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400">545445654</td>  
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400 capitalize">Aisle 5</td>
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400">7/5/2023</td>
                                <td className="p-4 text-sm text-center text-gray-900 whitespace-nowrap dark:text-gray-400">7/5/2023</td>   
                                <td className="p-4 text-sm text-center text-gray-900 whitespace-nowrap dark:text-gray-400 cursor-pointer">
                                  < Link to='/updateMedicine' className="text-md font-semibold leading-tight text-slate-400 hover:text-blue-500">Edit </Link>
                                </td>  
                              </tr>
                              <tr className="bg-gray-50 ">
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400 capitalize">pain killer</td>
                                <td className="p-4 text-md text-center text-gray-500 whitespace-nowrap dark:text-gray-400 capitalize">Mara moja</td>
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400">44</td>       
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400">Ksh 55</td>  
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400">545445654</td>  
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400 capitalize">Aisle 5</td>
                                <td className="p-4 text-sm text-center text-gray-900 whitespace-nowrap dark:text-gray-400">7/5/2023</td>
                                <td className="p-4 text-sm text-center text-gray-900 whitespace-nowrap dark:text-gray-400">7/5/2023</td>     
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400 cursor-pointer">
                                   < Link to='/updateMedicine' className="text-md font-semibold leading-tight text-slate-400 hover:text-blue-500">Edit </Link>
                                  </td>
                              </tr>
                              <tr>
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400 capitalize">pain killer</td>
                                <td className="p-4 text-md text-center text-gray-500 whitespace-nowrap dark:text-gray-400 capitalize">Mara moja</td>
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400">44</td>       
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400">Ksh 55</td>  
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400">545445654</td>  
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400 capitalize">Aisle 5</td>
                                <td className="p-4 text-sm text-center text-gray-900 whitespace-nowrap dark:text-gray-400">7/5/2023</td>
                                <td className="p-4 text-sm text-center text-gray-900 whitespace-nowrap dark:text-gray-400">7/5/2023</td> 
                                <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400 cursor-pointer">
                                  < Link to='/updateMedicine' className="text-md font-semibold leading-tight text-slate-400 hover:text-blue-500">Edit </Link>
                                </td>     
                              </tr>
                            </tbody>
                          </table>
                            <div className="grid w-full place-items-right rounded-lg p-6">
                                <nav>
                                    <ul className="flex">
                                        <li>
                                            <a className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" href="#" aria-label="Previous">
                                            <span className="material-symbols-outlined">chevron_left</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-pink-600 to-pink-400 p-0 text-sm text-white shadow-md shadow-pink-500/20 transition duration-150 ease-in-out" href="#">1</a>
                                        </li>
                                        <li>
                                            <a className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" href="#">2</a>
                                        </li>
                                        <li>
                                            <a className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" href="#">3</a>
                                        </li>
                                        <li>
                                            <a className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" href="#" aria-label="Next">
                                            <span className="material-symbols-outlined">chevron_right</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                          </div>
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

export default Medicine