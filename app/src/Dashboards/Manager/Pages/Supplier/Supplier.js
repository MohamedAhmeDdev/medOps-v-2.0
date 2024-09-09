import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Api } from "../../../../utils/Api";
import {MANAGER_SERVER_URL} from '../../../..//constant/severUrl';
import axios from 'axios'

function Supplier() {
  const [suppliers, setSupplier] = useState([]);

  useEffect(() => {
		const getSupplier = async () => {
		  const data = await Api(`${MANAGER_SERVER_URL}/supplier`);
      console.log(data.supplier);
      
			setSupplier(data.supplier);			
		};
	
		getSupplier();
	}, []);


  return (
    <div className="flex flex-col h-screen overflow-hidden ">
    <div className="flex flex-1 relative">  
      <div className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto"> 
        <main className="max-h-screen flex flex-col  h-[100vh]"> 
        <div className="w-full py-6 mx-auto">
          <Link to='/manager/add-supplier'>
                  <div className="flex justify-end pr-5">
                    <div className="flex bg-gray-400  text-white text-sm font-bold cursor-pointer ml-auto px-2.5 py-1.5">
                      <p className="text-md capitalize">Add Supplier</p>
                    </div>
                  </div>
              </Link>

          <div className="flex flex-wrap py-5">
          <div className="flex-none w-full max-w-full pb-5">
            <div className="relative flex flex-col mb-6 break-words border-0 border-transparent border-solid">
              <div className="flex-auto px-0 pt-0 pb-2">
                <div className="p-0 overflow-x-auto">
                <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500 ">
                   <thead className="align-bottom bg-slate-500">
                      <tr>
                        <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70">Company_Name</th>
                        <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70">Contact_Person</th>
                        <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70">Email</th>
                        <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70">Phone_Number</th>
                        <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70">Company_Address</th>
                        <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70"></th>
                      </tr>
                    </thead>
                    <tbody>
                       {suppliers.length === 0 && (
                              <p className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">No item found</p>
                        )} 
                      {suppliers.map((supplier,id) => (
                      <tr key={id}>
                        <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">{supplier.company_name}</td>
                         <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">{supplier.contact_person}</td>
                         <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">{supplier.email}</td>
                         <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">{supplier.phone}</td>
                         <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">{supplier.company_address}</td>
                         <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                           <Link to={`/manager/supplier/${supplier.supplier_id}`} className="text-sm font-semibold leading-tight text-slate-400">Edit</Link>
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
          </div>
        </main>
      </div>
    </div>
    </div>
  )
}

export default Supplier