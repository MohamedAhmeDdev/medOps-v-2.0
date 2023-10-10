import React, { useEffect, useState } from "react";
import Navbar from '../../../Component/Navbar';
import Sidebar from '../../../Component/Aside';
import UseSidebar from '../../../utils/constant/useSidebar';
import {SERVER_URL} from '../../../utils/constant/severUrl';
import { useNotification } from '../../../utils/context/NotificationContext';
import axios from 'axios'
import { useParams } from "react-router-dom";

function UpdateMedicineCategory() {
  const { sidebarOpen, toggleSidebar } = UseSidebar();
  const [medicine_category, setMedicine_category] = useState("");
  const { showErrorNotification ,  showSuccessNotification} = useNotification();
  const { id } = useParams();


  useEffect(() => {
    const getSingCategory = async () => {
        const res = await axios.get(`${SERVER_URL}/Logistic/MedicineCategories/${id}`);
         setMedicine_category(res.data.medicineCategory[0].medicine_category)
    };
  
    getSingCategory();
  }, [id]);

  
  const update_medicine_category = async (e) => {
    e.preventDefault();

    try {
      await axios.patch(`${SERVER_URL}/Logistic/MedicineCategories/${id}`, {
        medicine_category: medicine_category,
    
      }).then((response) => {
        showSuccessNotification('medicine category updated successfully.');
      });
      setMedicine_category("");
 
    } catch (error) {
      if (error.response?.status === 400) {
        showErrorNotification('All Fields Are Required.');
      }
    }
  };


 return (
    <div className="flex flex-col h-screen overflow-hidden ">
      <div className="flex flex-1 relative">

        <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

        <div className="flex flex-col flex-1 bg-gray-50 overflow-x-hidden overflow-y-auto">
          <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

          <main className="max-h-screen flex flex-col  h-[100vh]">          
           <div className="w-full py-6 mx-auto">
           <h6 className="pb-5 font-bold px-1.5 lg:px-6 text-lg capitalize">Update medicine Category</h6>

           <div className="flex flex-wrap py-5">
                 <div className="flex-none w-full max-w-full">
                   <div className=" flex flex-col mb-10 break-words border-0 border-transparent border-solid bg-clip-border">     
                      <div className="flex-auto px-0 pt-0 pb-2">
                          <div className="w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-0 m-auto">
                              <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                              <form onSubmit={update_medicine_category}>
                                <div className="flex-auto p-6">
                                  <div className="flex flex-wrap -mx-3">
                                    <div className="w-full max-w-full px-3 md:w-full md:flex-0">
                                      <div className="mb-4 py-3">
                                        <label htmlFor="email" className="inline-block mb-2 ml-1 font-bold text-md text-slate-700 capitalize">Medicine Name</label>
                                        <input type="text"  value={medicine_category} onChange={(e) => setMedicine_category(e.target.value)} className="focus:shadow-lg focus:shadow-blue-100 text-sm ease block w-full rounded-md border border-solid border-gray-300 bg-white px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"/>
                                      </div>
                                    </div>
                                 
                                  </div>
                                  <button className="px-8 mt-3 py-3 w-11/12 ml-5 font-bold leading-normal text-center text-white transition-all ease-in bg-blue-500 border-0 rounded-lg shadow-md cursor-pointer text-lg hover:shadow-xs hover:-translate-y-px active:opacity-85">Update</button>
                                </div>
                                </form>
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

export default UpdateMedicineCategory