import React, { useState, useEffect, useRef  } from 'react';
import { LOGISTICS_SERVER_URL } from '../../../constant/severUrl';
import { useNotification } from '../../../context/NotificationContext';
import { UseAuthContext } from "../../../Hook/StaffAuth";
import axios from 'axios';
import { useReactToPrint } from "react-to-print";
import logo  from '../../../assets/img/logo2.jpg'
import jwtDecode from 'jwt-decode';

function MedicineInventoryForm() {
  const [medicineList, setMedicineList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [supplierList, setSupplierList] = useState([]);
  const [batchNo, setBatchNo] = useState('');
  const { showErrorNotification, showSuccessNotification } = useNotification();
  const [showModal, setShowModal] = React.useState(false);
  const {user} = UseAuthContext()
  const componentRef = useRef();
  const decodedToken = jwtDecode(user);
  const username = decodedToken.username
  const date = new Date().toLocaleDateString();



  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
    onAfterPrint: () => {
      setShowModal(false);  
    }
  });
  
  

  useEffect(() => {
    const getMedicine = async () => {
      try {
        const { data } = await axios.get(`${LOGISTICS_SERVER_URL}/medicineInventory/medicine`);        
        setMedicineList(data.medicine);
      } catch (error) {
        showErrorNotification("Failed to fetch medicines");
      }
    };
    getMedicine();
  }, []);



  useEffect(() => {
    const getMedicineCategory = async () => {
      try {
        const response = await axios.get(`${LOGISTICS_SERVER_URL}/medicineInventory/medicineCategory`);
        setCategoryList(response.data.medicineCategory);
      } catch (error) {
        showErrorNotification("Failed to fetch categories");
      }
    };
    getMedicineCategory();
  }, []);




  useEffect(() => {
    const getSupplier = async () => {
      try {
        const response = await axios.get(`${LOGISTICS_SERVER_URL}/medicineInventory/supplier`);
        setSupplierList(response.data.supplier);
      } catch (error) {
        showErrorNotification("Failed to fetch suppliers");
      }
    };
    getSupplier();
  }, []);




  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="flex flex-1 relative">
        <div className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
          <main className="max-h-screen flex flex-col h-[100vh]">
            <div className="w-full py-6 mx-auto">
              <div className="flex flex-wrap py-5">
                <div className="flex-none w-full max-w-full">
                  <div className="flex flex-col mb-10 break-words border-0 border-transparent bg-clip-border">
                    <div className="flex-auto px-0 pt-0 pb-2">
                      <div className="w-full  px-3  md:flex-0 m-auto">
                        <h6 className="pb-5  font-bold px-1.5 lg:px-6 text-lg capitalize">Create Medicine Inventory</h6>

      
                        <div class="w-80 flex">
                          <label className='w-40 pt-1 uppercase'>Bach No: </label>
                          <span className='flex w-20  mr-40'> 
                             <span>#</span>
                             <input type="text" value={batchNo} onChange={(e) => setBatchNo(e.target.value)} class="w-20  text-md outline-none b focus:outline-none flex transform border-b-2 bg-transparent duration-300 "/>
                          </span>
                        </div>
                        <div className="relative  flex flex-col min-w-0 break-words border-0 rounded-2xl bg-clip-border">
                            <div className="flex-auto p-6">
                              <div className="-mx-3">
                                <div className="flex flex-wrap py-3">
                                  <div className="flex-none w-full ">
                                    <div className="flex flex-col mb-10 break-words border-0 bg-clip-border">
                                      <div className="flex-auto px-0 pt-0 pb-2">
                                        <div className="p-0 overflow-x-auto">
                                          <table className="items-center w-full mb-0 align-top border-gray-200 text-black">
                                            <thead  className="align-bottom bg-slate-500">
                                              <tr>
                                                <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 text-white">Medicine</th>
                                                <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 text-white">Category</th>
                                                <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 text-white">Supplier</th>
                                                <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 text-white">Quantity</th>
                                                <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 text-white">Expiry Date</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                                {medicineList.map((medicine, index) => (
                                                  <tr key={index} className="bg-gray-50">
                                                    <td className="text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b">
                                                      {medicine.medicine_name}
                                                    </td>

                                                    <td className="text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b">
                                                      <select  className="w-full rounded-md border px-3 py-2 text-gray-700 outline-none"
                                                         value={medicine.medicine_category || ""}
                                                         onChange={(e) => {
                                                          const updatedList = [...medicineList];
                                                          updatedList[index].medicine_category = e.target.value;
                                                          setMedicineList(updatedList);
                                                         }}
                                                      >
                                                        <option value="">Choose Category</option>
                                                        {categoryList.map((category, id) => (
                                                          <option key={id} value={category.medicine_category}>
                                                            {category.medicine_category}
                                                          </option>
                                                        ))}
                                                      </select>
                                                    </td>

                                                    <td className="text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b">
                                                      <select  className="w-full rounded-md border px-3 py-2 text-gray-700 outline-none"
                                                        value={medicine.supplier || ""}
                                                        onChange={(e) => {
                                                          const updatedList = [...medicineList];
                                                          updatedList[index].supplier = e.target.value;
                                                          setMedicineList(updatedList);
                                                        }}
                                                       
                                                      >
                                                        <option value="">Choose Supplier</option>
                                                        {supplierList.map((supplier, id) => (
                                                          <option key={id} value={supplier.company_name}>
                                                            {supplier.company_name}
                                                          </option>
                                                        ))}
                                                      </select>
                                                    </td>

                                                    <td className="text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b">
                                                      <input  className="w-full rounded-md border px-3 py-2 text-gray-700 outline-none"
                                                        type="number"
                                                        value={medicine.quantity || ""}
                                                        onChange={(e) => {
                                                          const updatedList = [...medicineList];
                                                          updatedList[index].quantity = e.target.value;
                                                          setMedicineList(updatedList);
                                                        }}
                                                       
                                                        placeholder="Enter quantity"
                                                      />
                                                    </td>

                                                    <td className="text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b">
                                                      <input  className="w-full rounded-md border px-3 py-2 text-gray-700 outline-none"
                                                        type="date"
                                                        value={medicine.expiry_date || ""}
                                                        onChange={(e) => {
                                                          const updatedList = [...medicineList];
                                                          updatedList[index].expiry_date = e.target.value;
                                                          setMedicineList(updatedList);
                                                        }}
                                                       
                                                      />
                                                    </td>
                                                  </tr>
                                                ))}
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <button onClick={() => setShowModal(true)} type="submit" className="px-8 mt-3 py-3 w-11/12 ml-5 font-bold text-center text-white bg-gray-500 rounded-lg shadow-md">
                                  Submit
                                </button>
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>


                        {showModal ? (
                          <>
                            <div className="justify-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                              <div className="relative mx-20 m-auto w-full my-6 ">
                                <div ref={componentRef} className="border-0 rounded-lg  relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                  <div className="flex items-center justify-between rounded-t">
                                   
                                    <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                      onClick={() => setShowModal(false)} >
                                    </button>
                                  </div>

                                  <h3 className="text-3xl py-4 text-center font-semibold">Medicine Inventory</h3>
                                  <div class="w-full flex-col  mb-10 lg:gap-14 gap-8 flex">
                                  <div class="w-full flex-col  mb-10 justify-start items-center lg:gap-14 gap-8 flex">
                                      <div className="h-36 w-48 font-semibold text-xl">
                                            <img className="w-full  h-full" src={logo} alt="Logo"/>
                                            <h1 class="w-full text-center pt-5 text-black text-lg font-bold font-manrope leading-normal">MedOps</h1>
                                      </div>
                                      </div>

                                    <div className='pl-20 pb-4'>
                                        <div class="flex-col justify-start items-start flex">
                                            <p class="space-x-4">
                                              <span class="text-black text-md font-medium leading-8 uppercase">Batch No:</span>
                                              <span className='text-black text-md border-b border-dotted border-black'>#{batchNo}</span>
                                            </p>
                                            <p class="space-x-4">
                                             <span class="text-black text-md font-medium leading-8 uppercase">Report By:</span>
                                              <span className='text-black text-md border-b border-dotted border-black'>{username}</span>
                                            </p>
                                            <p class="space-x-4">
                                             <span class="text-black text-md font-medium leading-8 uppercase">Date:</span>
                                              <span className='text-black text-md border-b border-dotted border-black'>{date}</span>
                                            </p>
                                        </div>
                                    </div>
                                  </div>
                                
                                  <div className='px-10'>
                                        <table className="items-center w-full mb-0 align-top mb-5 border-gray-200 text-slate-500 ">
                                          <thead className="align-bottom bg-slate-500">
                                            <tr>
                                              <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 text-white">Medicine</th>
                                              <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 text-white">Category</th>
                                              <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 text-white">Supplier</th>
                                              <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 text-white">Quantity</th>
                                              <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 text-white">Expiry Date</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                              {medicineList.map((list, id) => (
                                                <tr key={id} className="bg-gray-50">
                                                  <td className="text-sm leading-tight p-2 py-3 text-center align-middle border-b whitespace-nowrap shadow-transparent">
                                                    {list.medicine_name || "-"}
                                                  </td>
                                                  <td className="text-sm leading-tight p-2 py-3 text-center align-middle border-b whitespace-nowrap shadow-transparent">
                                                    {list.medicine_category > 0 ? list.medicine_category : "-"}
                                                  </td>
                                                  <td className="text-sm leading-tight p-2 py-3 text-center align-middle border-b whitespace-nowrap shadow-transparent">
                                                    {list.supplier || "-"}
                                                  </td>
                                                  <td className="text-sm leading-tight p-2 py-3 text-center align-middle border-b whitespace-nowrap shadow-transparent">
                                                    {list.quantity > 0 ? list.quantity : "-"}
                                                  </td>
                                                  <td className="text-sm leading-tight p-2 py-3 text-center align-middle border-b whitespace-nowrap shadow-transparent cursor-pointer">
                                                    {list.expiry_date ? new Date(list.expiry_date).toLocaleDateString() : "-"}
                                                  </td>
                                                </tr>
                                              ))}
                                            </tbody>
                                      </table>
                                  </div>
                                </div>
                                <div className="flex items-center justify-end p-6 rounded-b">
                                    <button
                                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                      type="button"
                                      onClick={() => setShowModal(false)}
                                    >
                                      Close
                                    </button>
                                    <button type="button" className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
                                      onClick={handlePrint}
                                    >
                                      Save
                                    </button>
                                  </div>

                              </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                          </>
                        ) : null}
                  </div>
                </div>
              </div>       
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default MedicineInventoryForm;
