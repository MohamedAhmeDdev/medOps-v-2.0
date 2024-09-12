import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { LOGISTICS_SERVER_URL } from "../../../../constant/severUrl";
import {formatDate} from '../../../../constant/formatDate'
import axios from "axios";

function MedicineCategory() {
  const [medicineCategories, setMedicineCategories] = useState([]);

  useEffect(() => {
		const getMedicineCategory = async () => {
		  const data = await axios.get(`${LOGISTICS_SERVER_URL}/medicineCategories`);
      console.log(data.data.medicineCategory);
      
			setMedicineCategories(data.data.medicineCategory);									
		};
	
		getMedicineCategory();
	}, []);
   
  return (
    <div className="flex flex-col h-screen overflow-hidden ">
       <div className="flex flex-1 relative"> 
         <div className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto"> 
           <main className="max-h-screen flex flex-col  h-[100vh]"> 
 
           <div class="px-4 mt-8">
                <label for="" class="sr-only"> Search </label>
                <div class="relative">
                    <div class="absolute inset-y-0 right-0 flex items-center pl-3 pointer-events-none">
                    <button type="submit" className="cursor-pointer  px-10 py-2 text-sm font-medium text-white rounded-r-lg bg-blue-600 hover:bg-blue-800 focus:outline-none">
                      <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>
                    </div>
                    <input type="search" name="" id="" class="block w-full py-2 px-2 border border-gray-300 rounded-lg focus:outline-none sm:text-sm" placeholder="Search here" />
                </div>
            </div>
 
             <div className="w-full py-6 mx-auto">
                <Link to='/logistics/add-medicine-category'>
                    <div className="flex justify-end pr-5">
                      <div className="flex bg-gray-400  text-white text-sm font-bold cursor-pointer ml-auto px-2.5 py-1.5">
                        <p className="text-md capitalize">Add Medicine Category</p>
                      </div>
                    </div>
                </Link>
 
                <div className="flex flex-wrap py-3">
                   <div className="flex-none w-full max-w-full">
                     <div className=" flex flex-col mb-10 break-words border-0 border-transparent border-solid bg-clip-border">     
                       <div className="flex-auto px-0 pt-0 pb-2">
                         <div className="p-0 overflow-x-auto ">
                         <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500 ">
                           <thead className="align-bottom bg-slate-500">
                               <tr>
                                 <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70">Medicine_Category</th>
                                 <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70">Created At</th>
                                 <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70"></th>
                               </tr>
                           </thead>
                             <tbody className="">
                             {medicineCategories.length === 0 && (
                              <p className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">No item found</p>
                             )}
                              {medicineCategories.map((category, id) =>(
                               <tr key={id} className="bg-gray-50 ">
                                  <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">{category.medicine_category}</td>
                                  <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">{formatDate(category.createdAt)}</td>
                                  <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                     <Link to={`/logistics/updateMedicineCategory/${category.medicine_category_id}`} className="text-md font-semibold leading-tight text-slate-400 hover:text-blue-500">Edit </Link>
                                 </td>
                               </tr>  
                               ))}       
                             </tbody>
                           </table>
                             {/* <div className="grid w-full place-items-right rounded-lg p-6">
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
                           </div> */}
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