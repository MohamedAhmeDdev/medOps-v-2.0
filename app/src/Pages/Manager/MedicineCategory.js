import React, { useEffect, useState } from "react";
import Navbar from '../../Component/Navbar';
import Sidebar from '../../Component/Aside';
import { Link } from 'react-router-dom';
import UseSidebar from '../../utils/constant/useSidebar';
import { Api } from "../../utils/Api";
import {formatDate} from '../../utils/constant/formatDate'

function MedicineCategory() {
  const { sidebarOpen, toggleSidebar } = UseSidebar();
  const [medicineCategories, setMedicineCategories] = useState([]);

  useEffect(() => {
		const getMedicineCategory = async () => {
		  const data = await Api("/Manager/medicineCategory", "GET");
			setMedicineCategories(data.medicineCategory);									
		};
	
		getMedicineCategory();
	}, []);
   

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
                       <input type="text" className="text-sm w-40 rounded-l-lg border border-gray-300 bg-white py-2.5 px-3 focus:outline-none" placeholder="search for M Category" />
                       <button type="submit" className="px-2 py-3 text-sm font-medium text-white rounded-r-lg bg-blue-600 hover:bg-blue-800 focus:outline-none">Search</button>
                   </div>                    
               </div>
             </nav>
 
             <div className="w-full py-6 mx-auto">
             <h6 className="pb-5 font-bold px-1.5 lg:px-6 text-lg capitalize">Medicine Category</h6>
 
                <div className="flex flex-wrap py-3">
                   <div className="flex-none w-full max-w-full">
                     <div className=" flex flex-col mb-10 break-words bg-white border-0 border-transparent border-solid bg-clip-border">     
                       <div className="flex-auto px-0 pt-0 pb-2">
                         <div className="p-0 overflow-x-auto ">
                           <table className="min-w-full divide-y divide-gray-200 ">
                           <thead className="align-bottom">
                               <tr>
                                 <th className="p-4 text-md font-medium tracking-wider text-center text-black">Medicine_Category</th>
                                 <th className="p-4 text-md font-medium tracking-wider text-center text-black">Created At</th>
                               </tr>
                           </thead>
                             <tbody className="bg-white ">
                              {medicineCategories.length === 0 && (
                                <p className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">No item found</p>
                               )} 
                              {medicineCategories.map((category, id) => (  
                               <tr key={id} className="bg-gray-50 ">
                                 <td className="p-4 text-md text-center text-gray-900 whitespace-nowrap dark:text-gray-400 capitalize">{category.medicine_category}</td>
                                 <td className="p-4 text-md text-center text-gray-500 whitespace-nowrap dark:text-gray-400 capitalize">{formatDate(category.createdAt)}</td>
                               </tr>  
                               ))}      
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

export default MedicineCategory