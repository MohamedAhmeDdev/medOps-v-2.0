import React, { useState } from 'react';
import axios from 'axios'
import {MANAGER_SERVER_URL} from '../../../..//constant/severUrl';
import { useNotification } from '../../../../context/NotificationContext';


function CreateSupplier() {
  const { showErrorNotification ,  showSuccessNotification} = useNotification();
  const [company_name, setCompany_name] = useState("");
  const [contact_person, setContact_person] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company_address, setCompany_address] = useState("");

  const create_supplier = async (e) => {
    e.preventDefault();
  
    try {
      await axios.post(`${MANAGER_SERVER_URL}/supplier`, {
        company_name: company_name,
        email: email,
        contact_person: contact_person,
        phone:phone,
        company_address: company_address,
      }).then((response) => {
        showSuccessNotification(response.data.message);
      });
      setCompany_name("");
      setEmail("");
      setContact_person("");
      setPhone("");
      setCompany_address("");

    } catch (error) {
      showErrorNotification(error.response.data.message);
    }
  };

 return (
    <div className="flex flex-col h-screen overflow-hidden">
    <div className="flex flex-1 relative">
      <div className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
        <main className="max-h-screen flex flex-col py-5 h-[100vh]"> 
          <div className="w-full px-3  mx-auto">
           <div className="max-w-full pb-20 lg:mb-0 lg:w-full lg:flex-none">
                <div className="relative flex flex-col min-w-0 mt-6 break-words border-0 border-transparent border-solid rounded-lg">
                <section >
                  <div>
                      <div className="p-6 rounded-lg">
                          <div className="pb-6 border-b">
                              <h2 className="text-xl font-bold text-gray-800 md:text-3xl dark:text-gray-300">Create Supplier</h2>
                          </div>
                         <form onSubmit={create_supplier}>
                          <div className="py-6 border-b border-gray-100">
                              <div className="w-full md:w-9/12">
                                  <div className="flex flex-wrap -m-3">
                                      <div className="w-full p-3 md:w-1/3">
                                          <p className="text-base font-semibold text-gray-700 dark:text-gray-400 capitalize">Company_Name</p>
                                      </div>
                                      <div className="w-full p-3 md:flex-1">
                                           <input type="text" value={company_name} onChange={(e) => setCompany_name(e.target.value)} className="w-full px-4 py-2.5 text-base text-black rounded-lg font-normal border border-gray-200 focus:outline-none"/>
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
                                          <p className="text-base font-semibold text-gray-400 capitalize">company_Email</p>
                                      </div>
                                      <div className="w-full p-3 md:flex-1">
                                           <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2.5 text-base text-black rounded-lg font-normal border border-gray-200 focus:outline-none"/>
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
                                          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-4 py-2.5 text-base text-black rounded-lg font-normal border border-gray-200 focus:outline-none"/>
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
                                          <input type="text" value={company_address} onChange={(e) => setCompany_address(e.target.value)} className="w-full px-4 py-2.5 text-base text-black rounded-lg font-normal border border-gray-200 focus:outline-none"/>
                                      </div>
                                  </div>
                              </div>
                          </div>
                              <div className="w-full md:w-auto mt-10 p-1.5">
                                  <button
                                      className="flex flex-wrap justify-center w-full px-4 py-2 text-md font-medium text-white bg-gray-500 border border-gray-500 rounded-md hover:bg-gray-600 ">
                                      Create
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

export default CreateSupplier