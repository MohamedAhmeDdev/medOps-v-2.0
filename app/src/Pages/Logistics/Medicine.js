import React, { useState } from 'react';
import Navbar from '../../Component/Navbar';
import Sidebar from '../../Component/Aside';
import { Link } from 'react-router-dom';
import UseSidebar from '../../utils/constant/useSidebar';

function Medicine() {
  const { sidebarOpen, toggleSidebar } = UseSidebar();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };



  return (
   <div className="flex flex-col h-screen overflow-hidden ">
      <div className="flex flex-1 relative">

        <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

        <div className="flex flex-col flex-1 bg-indigo-50 overflow-x-hidden overflow-y-auto">
          <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

          <main className="max-h-screen flex flex-col  h-[100vh]"> 

          <nav className="bg-white py-2.5">
              <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex">
                  <div className=" mx-auto">                       
                      <input type="text" className="text-md w-1/100 relative flex-auto rounded-lg border border-solid border-gray-300 bg-white py-2 px-3 text-black focus:outline-none" placeholder="search for medicine"/>
                  </div>   

                  <div className=" mx-auto">                       
                    <div className="flex items-center">
                       <div className="max-w-6xl px-4 mx-auto">
                          <div className="relative inline-block text-left">       
                              <button onClick={toggleDropdown} type="button" className="inline-flex justify-center  lg:w-56 px-4 py-2 text-sm bg-gray-200 font-medium rounded-lg focus:outline-none">
                                Filter Medicine
                                <svg
                                  className={`w-4 h-4 ml-2 -mr-1 fill-current ${ isOpen?'rotate-180':'rotate-0' }`}xmlns="http://www.w3.org/2000/svg" style={{ marginTop:'3px'}}><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                </svg>
                              </button>
                       
                            {isOpen && (
                              <div className="absolute  w-36 lg:w-56 mt-2 origin-top-right bg-white shadow-lg rounded-2xl ring-black ring-opacity-5 focus:outline-none" onClick={() => setIsOpen(false)}>
                                <div className="py-1">
                                    <p className="flex px-4 py-2 text-sm text-gray-700 border-l-2 border-transparent dark:text-gray-400 dark:hover:text-gray-300 hover:text-black cursor-pointer capitalize">Pain Killer</p>
                                </div>

                                <div class="py-1">
                                    <p className="flex px-4 py-2 text-sm text-gray-700 border-l-2 border-transparent dark:text-gray-400 dark:hover:text-gray-300 hover:text-black cursor-pointer">Antibiotics</p>
                                </div>

                                <div class="py-1">
                                    <p className="flex px-4 py-2 text-sm text-gray-700 border-l-2 border-transparent dark:text-gray-400 dark:hover:text-gray-300 hover:text-black cursor-pointer">etc</p>
                                </div>
                              </div>
                            )}
                          </div>
                       </div>
                    </div>
                  </div>                   
              </div>
            </nav>

            <div className="w-full px-1.5 lg:px-6 py-6 mx-auto">
    
          
            <h6 className="pb-5 font-bold text-4xl capitalize">Medicine</h6>

               <div className="flex flex-wrap py-5">
                  <div className="flex-none w-full max-w-full">
                    <div className=" flex flex-col mb-10 break-words bg-white border-0 border-transparent border-solid rounded-lg bg-clip-border">     
                      <div className="flex-auto px-0 pt-0 pb-2">
                        <div className="p-0 overflow-x-auto ">
                          <table className="min-w-full divide-y divide-gray-200 ">
                          <thead className="align-bottom">
                              <tr>
                                <th className="p-4 text-md lg:text-lg font-medium tracking-wider text-left text-black">Medicine_Category</th>
                                <th className="p-4 text-md lg:text-lg font-medium tracking-wider text-left text-black">Medicine</th>
                                <th className="p-4 text-md lg:text-lg font-medium tracking-wider text-left text-black">Total_Quantity</th>
                                <th className="p-4 text-md lg:text-lg font-medium tracking-wider text-left text-black">Price</th>
                                <th className="p-4 text-md lg:text-lg font-medium tracking-wider text-left text-black">Barcode</th>
                                <th className="p-4 text-md lg:text-lg font-medium tracking-wider text-left text-black">Aisle</th>
                                <th className="p-4 text-md lg:text-lg font-medium tracking-wider text-left text-black">Expiry_Date</th>
                                <th className="p-4 text-md lg:text-lg font-medium tracking-wider text-left text-black">Updated_Date</th>
                                <th className="p-4 text-md lg:text-lg font-medium tracking-wider text-left text-black"></th>
                              </tr>
                          </thead>
                            <tbody className="bg-white ">
                              <tr className="bg-gray-100 ">
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400 capitalize">pain killer</td>
                                <td className="p-4 text-md text-center font-normal text-gray-500 whitespace-nowrap dark:text-gray-400 capitalize">Mara moja</td>
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400">44</td>       
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400">Ksh 55</td>  
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400">545445654</td>  
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400 capitalize">Aisle 5</td>
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400">7/5/2023</td>
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400">7/5/2023</td>
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400 cursor-pointer">
                                   < Link to='/medicineU' className="text-md font-semibold leading-tight text-slate-400 hover:text-blue-500">Edit </Link>
                                </td>
                              </tr>  
                              <tr>
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400 capitalize">pain killer</td>
                                <td className="p-4 text-md text-center font-normal text-gray-500 whitespace-nowrap dark:text-gray-400 capitalize">Mara moja</td>
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400">44</td>       
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400">Ksh 55</td>  
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400">545445654</td>  
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400 capitalize">Aisle 5</td>
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400">7/5/2023</td>
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400">7/5/2023</td>
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400 cursor-pointer">
                                  < Link to='/medicineU' className="text-md font-semibold leading-tight text-slate-400 hover:text-blue-500">Edit </Link>
                                </td>
                              </tr>
                              <tr className="bg-gray-100 ">
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400 capitalize">pain killer</td>
                                <td className="p-4 text-md text-center font-normal text-gray-500 whitespace-nowrap dark:text-gray-400 capitalize">Mara moja</td>
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400">44</td>       
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400">Ksh 55</td>  
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400">545445654</td>  
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400 capitalize">Aisle 5</td>
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400">7/5/2023</td>
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400">7/5/2023</td>
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400 cursor-pointer">
                                  < Link to='/medicineU' className="text-md font-semibold leading-tight text-slate-400 hover:text-blue-500">Edit </Link>
                                </td>
                              </tr>       
                              <tr>
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400 capitalize">pain killer</td>
                                <td className="p-4 text-md text-center font-normal text-gray-500 whitespace-nowrap dark:text-gray-400 capitalize">Mara moja</td>
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400">44</td>       
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400">Ksh 55</td>  
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400">545445654</td>  
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400 capitalize">Aisle 5</td>
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400">7/5/2023</td>
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400">7/5/2023</td>   
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400 cursor-pointer">
                                  < Link to='/medicineU' className="text-md font-semibold leading-tight text-slate-400 hover:text-blue-500">Edit </Link>
                                </td>  
                              </tr>
                              <tr className="bg-gray-100 ">
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400 capitalize">pain killer</td>
                                <td className="p-4 text-md text-center font-normal text-gray-500 whitespace-nowrap dark:text-gray-400 capitalize">Mara moja</td>
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400">44</td>       
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400">Ksh 55</td>  
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400">545445654</td>  
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400 capitalize">Aisle 5</td>
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400">7/5/2023</td>
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400">7/5/2023</td>     
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400 cursor-pointer">
                                   < Link to='/medicineU' className="text-md font-semibold leading-tight text-slate-400 hover:text-blue-500">Edit </Link>
                                  </td>
                              </tr>
                              <tr>
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400 capitalize">pain killer</td>
                                <td className="p-4 text-md text-center font-normal text-gray-500 whitespace-nowrap dark:text-gray-400 capitalize">Mara moja</td>
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400">44</td>       
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400">Ksh 55</td>  
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400">545445654</td>  
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400 capitalize">Aisle 5</td>
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400">7/5/2023</td>
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400">7/5/2023</td> 
                                <td className="p-4 text-md text-center font-normal text-gray-900 whitespace-nowrap dark:text-gray-400 cursor-pointer">
                                  < Link to='/medicineU' className="text-md font-semibold leading-tight text-slate-400 hover:text-blue-500">Edit </Link>
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