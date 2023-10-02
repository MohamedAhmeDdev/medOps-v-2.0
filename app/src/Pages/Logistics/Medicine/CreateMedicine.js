import React, { useState, useEffect } from 'react';
import Navbar from '../../../Component/Navbar';
import Sidebar from '../../../Component/Aside';
import { Link } from 'react-router-dom';
import UseSidebar from '../../../utils/constant/useSidebar';
import {SERVER_URL} from '../../../utils/constant/severUrl';
import { useNotification } from '../../../utils/context/NotificationContext';
import axios from 'axios'

function CreateMedicine() {
  const { sidebarOpen, toggleSidebar } = UseSidebar();
  const [categoryList, setCategoryList] = useState([]);
  const [supplierList, setSupplierList] = useState([]);
  const [medicine_image, setMedicine_image] = useState("");
  const [company_name, setCompany_name] = useState("");
  const [medicine_category, setMedicine_category] = useState("");
  const [medicine_name, setMedicine_name] = useState("");
  const [total_quantity, setTotal_quantity] = useState("");
  const [price, setPrice] = useState("");
  const [barcode, setBarcode] = useState("");
  const [aisle, setAisle] = useState("");
  const [expiry_date, setExpiry_date] = useState("");
  const { showErrorNotification ,  showSuccessNotification} = useNotification();
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMedicine_image(URL.createObjectURL(file));
    } else {
      setMedicine_image(null);
    }
  };


  const getMedicineCategory = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/Logistic/Medicines/medicineCategory`);
      setCategoryList(response.data.medicineCategory);
    } catch (error) {
      console.error('Error fetching transporter data:', error);
    }
  };

  useEffect(() => {
    getMedicineCategory();
  }, []);

  const getSupplier = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/Logistic/Medicines/supplier`);
      setSupplierList(response.data.supplier);
    } catch (error) {
      console.error('Error fetching transporter data:', error);
    }
  };

  useEffect(() => {
    getSupplier();
  }, []);

  const create_medicine = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("medicine_image", medicine_image);
      formData.append("medicine_name", medicine_name);
      formData.append("medicine_category", medicine_category);
      formData.append("company_name", company_name);
      formData.append("total_quantity", total_quantity);
      formData.append("price", price);
      formData.append("barcode", barcode);
      formData.append("aisle", aisle);
      formData.append("expiry_date", expiry_date);

      await axios.post(`${SERVER_URL}/Logistic/Medicines`,  formData, {
        "Content-Type": "multipart/form-data",
      }).then((response) => {
        showSuccessNotification('transport created successfully.');
      });
        setCompany_name("");
        setMedicine_image("");
        setMedicine_name("");
        setTotal_quantity("");
        setPrice("");
        setBarcode("");
        medicine_category("");
    } catch (error) {
      if (error.response?.status === 400) {
        showErrorNotification('All Fields Are Required.');
      } if (error.response?.status === 402) {
        showErrorNotification('"No file uploaded.');
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
           <h6 className="pb-5 font-bold px-1.5 lg:px-6 text-lg capitalize">create medicine</h6>

              <div className="flex flex-wrap py-5">
                 <div className="flex-none w-full max-w-full">
                   <div className=" flex flex-col mb-10 break-words border-0 border-transparent border-solid bg-clip-border">     
                      <div className="flex-auto px-0 pt-0 pb-2">
                          <div className="w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-0 m-auto">
                              <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                              <form onSubmit={create_medicine}>
                                <div className="flex-auto p-6">
                                  <div className="flex flex-wrap -mx-3">

                                  <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                                      <div className="mb-4 py-3 ">
                                        <label htmlFor="first name" className="inline-block mb-2 ml-1 font-bold text-md text-slate-700 capitalize">Medicine_Image</label>
                                        <input type="file"  accept="image/*"  onChange={handleImageChange} className="focus:shadow-lg focus:shadow-blue-100 text-sm ease block w-full rounded-md border border-solid border-gray-300 bg-white px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"/>
                                      
                                         {medicine_image && (
                                            <img className="w-20 h-20 mt-2" src={medicine_image} alt="preview" />
                                          )}
                                      </div>
                                    </div>

                                    <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                                      <div className="mb-4 py-3">
                                        <label htmlFor="username" className="inline-block mb-2 ml-1 font-bold text-md text-slate-700 capitalize">medicine Category</label>
                                            <select value={medicine_category} onChange={(e) => setMedicine_category(e.target.value)} className="focus:shadow-lg focus:shadow-blue-100 text-sm ease block w-full rounded-md border border-solid border-gray-300 bg-white px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none">
                                            <option value="">Choose</option>
                                            {categoryList.map((category, id) => (
                                                <option key={id} value={category.medicine_category}>
                                                {category.medicine_category}
                                                </option>
                                            ))}
                                            </select>
                                      </div>
                                    </div>
                                    <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                                      <div className="mb-4 py-3">
                                        <label htmlFor="email" className="inline-block mb-2 ml-1 font-bold text-md text-slate-700 capitalize">Medicine Name</label>
                                        <input type="text" value={medicine_name} onChange={(e) => setMedicine_name(e.target.value)} className="focus:shadow-lg focus:shadow-blue-100 text-sm ease block w-full rounded-md border border-solid border-gray-300 bg-white px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"/>
                                      </div>
                                    </div>
                                    <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                                      <div className="mb-4 py-3">
                                        <label htmlFor="first name" className="inline-block mb-2 ml-1 font-bold text-md text-slate-700 capitalize">Supplier_name</label>
                                        <select type="text" value={company_name} onChange={(e) => setCompany_name(e.target.value)} className="focus:shadow-lg focus:shadow-blue-100 text-sm ease block w-full rounded-md border border-solid border-gray-300 bg-white px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none">
                                        <option value="">Choose</option>
                                            {supplierList.map((company, id) => (
                                                <option key={id} value={company.company_name}>
                                                {company.company_name}
                                                </option>
                                                 ))}
                                        </select>
                                      </div>
                                    </div>
                                    <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                                      <div className="mb-4 py-3">
                                        <label htmlFor="first name" className="inline-block mb-2 ml-1 font-bold text-md text-slate-700 capitalize">expiry_date</label>
                                        <input type="date" value={expiry_date} onChange={(e) => setExpiry_date(e.target.value)} className="focus:shadow-lg focus:shadow-blue-100 text-sm ease block w-full rounded-md border border-solid border-gray-300 bg-white px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"/>
                                      </div>
                                    </div>
                                    <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                                      <div className="mb-4 py-3">
                                        <label htmlFor="first name" className="inline-block mb-2 ml-1 font-bold text-md text-slate-700 capitalize">Barcode</label>
                                        <input type="text" value={barcode} onChange={(e) => setBarcode(e.target.value)} className="focus:shadow-lg focus:shadow-blue-100 text-sm ease block w-full rounded-md border border-solid border-gray-300 bg-white px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"/>
                                      </div>
                                    </div>
                                    <div className="w-full max-w-full mx-auto px-3 shrink-0 md:w-6/12 md:flex-0">
                                      <div className="mb-4 py-3">
                                        <label htmlFor="country" className="inline-block mb-2 ml-1 font-bold text-md text-slate-700 capitalize">Total_Quantity</label>
                                        <input type="text" value={total_quantity} onChange={(e) => setTotal_quantity(e.target.value)} className="focus:shadow-lg focus:shadow-blue-100 text-sm ease block w-full rounded-md border border-solid border-gray-300 bg-white px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"/>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="flex justify-around flex-wrap -mx-3">
                                    <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                                      <div className="mb-4 py-3">
                                        <label htmlFor="country" className="inline-block mb-2 ml-1 font-bold text-md text-slate-700 capitalize">price</label>
                                        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className="focus:shadow-lg focus:shadow-blue-100 text-sm ease block w-full rounded-md border border-solid border-gray-300 bg-white px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"/>
                                      </div>
                                    </div>
                                    <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                                      <div className="mb-4 py-3">
                                        <label htmlFor="postal code" className="inline-block mb-2 ml-1 font-bold text-md text-slate-700 capitalize">aisle</label>
                                        <input type="text" value={aisle} onChange={(e) => setAisle(e.target.value)} className="focus:shadow-lg focus:shadow-blue-100 text-sm ease block w-full rounded-md border border-solid border-gray-300 bg-white px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"/>
                                      </div>
                                    </div>
                                  </div>

                                  <button className="px-8 mt-3 py-3 w-11/12 ml-5 font-bold leading-normal text-center text-white transition-all ease-in bg-blue-500 border-0 rounded-lg shadow-md cursor-pointer text-lg hover:shadow-xs hover:-translate-y-px active:opacity-85">Create</button>
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

export default CreateMedicine