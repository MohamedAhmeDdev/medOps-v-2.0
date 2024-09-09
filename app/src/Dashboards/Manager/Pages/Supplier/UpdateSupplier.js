import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {MANAGER_SERVER_URL} from '../../../..//constant/severUrl';
import { useNotification } from '../../../../context/NotificationContext';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


function UpdateSupplier() {
  const { showErrorNotification ,  showSuccessNotification} = useNotification();
  const [company_name, setCompany_name] = useState("");
  const [contact_person, setContact_person] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company_address, setCompany_address] = useState("");
  const { id } = useParams();
  const navigate = useNavigate()
  

  const getSupplier = async () => {
    const response = await axios.get(`${MANAGER_SERVER_URL}/supplier/${id}`);
    console.log(response.data.supplier);
    
    setCompany_name(response.data.supplier[0].company_name);
    setContact_person(response.data.supplier[0].contact_person);
    setPhone(response.data.supplier[0].phone);
    setEmail(response.data.supplier[0].email);
    setPhone(response.data.supplier[0].phone);
    setCompany_address(response.data.supplier[0].company_address);
};

    useEffect(() => {
    getSupplier();
    }, []);

  const update_supplier = async (e) => {
    e.preventDefault();
  
    try {
      await axios.patch(`${MANAGER_SERVER_URL}/supplier/${id}`, {
        company_name: company_name,
        email: email,
        contact_person: contact_person,
       phone:phone,
        company_address: company_address,
      }).then((response) => {
        showSuccessNotification(response.data.message);
      });
    } catch (error) {
      showErrorNotification(error.response.data.message);
    }
  };
  
 return (
    <div className="flex flex-col h-screen overflow-hidden">
    <div className="flex flex-1 relative">
      <div className="flex flex-col flex-1  overflow-x-hidden overflow-y-auto">
        <main className="max-h-screen flex flex-col py-5 h-[100vh]"> 
          <div className="w-full px-3  mx-auto">
           <div className="max-w-full pb-20 lg:mb-0 lg:w-full lg:flex-none">
                <div className="relative flex flex-col min-w-0 mt-6 break-words border-0 border-transparent border-solid rounded-lg">
                <section >
                  <div>
                      <div className="p-6 rounded-lg">
                          <div className="pb-6 border-b">
                              <h2 className="text-xl font-bold text-gray-800 md:text-3xl dark:text-gray-300">Update Supplier</h2>
                          </div>

                        <form onSubmit={update_supplier}>
                          <div className="py-6 border-b border-gray-100">
                              <div className="w-full md:w-9/12">
                                  <div className="flex flex-wrap -m-3">
                                      <div className="w-full p-3 md:w-1/3">
                                          <p className="text-base font-semibold text-gray-700 dark:text-gray-400 capitalize">Company_Name</p>
                                      </div>
                                      <div className="w-full p-3 md:flex-1">
                                           <input value={company_name} onChange={(e) => setCompany_name(e.target.value)} type="text" className="w-full px-4 py-2.5 text-base text-black rounded-lg font-normal border border-gray-200 focus:outline-none"/>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="py-6 border-b border-gray-100">
                              <div className="w-full md:w-9/12">
                                  <div className="flex flex-wrap -m-3">
                                      <div className="w-full p-3 md:w-1/3">
                                          <p className="text-base font-semibold text-gray-700 dark:text-gray-400 capitalize">contact_person</p>
                                      </div>
                                      <div className="w-full p-3 md:flex-1">
                                           <input type="text" value={contact_person} onChange={(e) => setContact_person(e.target.value)} className="w-full px-4 py-2.5 text-base text-black rounded-lg font-normal border border-gray-200 focus:outline-none"/>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="py-6 border-b border-gray-100">
                              <div className="w-full md:w-9/12">
                                  <div className="flex flex-wrap -m-3">
                                      <div className="w-full p-3 md:w-1/3">
                                          <p className="text-base font-semibold text-gray-400 capitalize">company_email</p>
                                      </div>
                                      <div className="w-full p-3 md:flex-1">
                                           <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="w-full px-4 py-2.5 text-base text-black rounded-lg font-normal border border-gray-200 focus:outline-none"/>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="py-6 border-b border-gray-100">
                              <div className="w-full md:w-9/12">
                                  <div className="flex flex-wrap -m-3">
                                      <div className="w-full p-3 md:w-1/3">
                                          <p className="text-sm font-semibold text-gray-400 capitalize">phone_number</p>
                                      </div>
                                      <div className="w-full p-3 md:flex-1">
                                          <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" className="w-full px-4 py-2.5 text-base text-black rounded-lg font-normal border border-gray-200 focus:outline-none"/>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="py-6 border-b border-gray-100">
                              <div className="w-full md:w-9/12">
                                  <div className="flex flex-wrap -m-3">
                                      <div className="w-full p-3 md:w-1/3">
                                          <p className="text-sm font-semibold text-gray-400 capitalize">Company_Address</p>
                                      </div>
                                      <div className="w-full p-3 md:flex-1">
                                          <input value={company_address} onChange={(e) => setCompany_address(e.target.value)} type="text" className="w-full px-4 py-2.5 text-base text-black rounded-lg font-normal border border-gray-200 focus:outline-none"/>
                                      </div>
                                  </div>
                              </div>
                          </div>
                              <div className="w-full md:w-auto mt-10 p-1.5">
                                  <button
                                      className="flex flex-wrap justify-center w-full px-4 py-2 text-md font-medium text-white bg-gray-500 border border-gray-500 rounded-md hover:bg-gray-600 ">
                                      Update
                                  </button>
                              </div>
                       </form>
                      </div>
                  </div>
                </section>
                </div>
          </div>
          </div>
        </main>
      </div>
    </div>
  </div>
  )
}

export default UpdateSupplier