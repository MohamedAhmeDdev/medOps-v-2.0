import React, { useEffect, useState } from "react";
import Navbar from '../../Component/Navbar';
import Sidebar from '../../Component/Aside';
import UseSidebar from '../../utils/constant/useSidebar';
import { Api } from "../../utils/Api";


function Supplier() {
  const { sidebarOpen, toggleSidebar } = UseSidebar();
  const [suppliers, setSupplier] = useState([]);

  useEffect(() => {
		const getSupplier = async () => {
		  const data = await Api("/Operator/Suppliers", "GET");
			setSupplier(data.supplier);														
		};
	
		getSupplier();
	}, []);


  return (
    <div className="flex flex-col h-screen overflow-hidden ">
    <div className="flex flex-1 relative">
  
      <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
  
      <div className="flex flex-col flex-1 bg-gray-50 overflow-x-hidden overflow-y-auto">
        <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
  
        <main className="max-h-screen flex flex-col  h-[100vh]"> 
        <div className="w-full py-6 mx-auto">
          <h6 className="pb-5 font-bold px-3 lg:px-6 text-2xl lg:text-lg capitalize">Supplier</h6> 

          <div className="flex flex-wrap py-5">
          <div className="flex-none w-full max-w-full pb-5">
            <div className="relative flex flex-col mb-6 break-words bg-white border-0 border-transparent border-solid">
              <div className="flex-auto px-0 pt-0 pb-2">
                <div className="p-0 overflow-x-auto">
                  <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                    <thead className="align-bottom">
                      <tr>
                        <th className="px-4 py-3 font-medium text-center border-b border-gray-400 text-md border-b-solid whitespace-nowrap text-black">Company_Name</th>
                        <th className="px-4 py-3 font-medium text-center border-b border-gray-400 text-md border-b-solid whitespace-nowrap text-black">Contact_Person</th>
                        <th className="px-4 py-3 font-medium text-center border-b border-gray-400 text-md border-b-solid whitespace-nowrap text-black">Email</th>
                        <th className="px-4 py-3 font-medium text-center border-b border-gray-400 text-md border-b-solid whitespace-nowrap text-black">Phone_Number</th>
                        <th className="px-4 py-3 font-medium text-center border-b border-gray-400 text-md border-b-solid whitespace-nowrap text-black">Company_Address</th>
                      </tr>
                    </thead>
                    <tbody>
                      {suppliers.length === 0 && (
                         <p className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">No item found</p>
                      )}
                      {suppliers.map((supplier, id) =>(
                      <tr key={id}>
                        <td className="p-2 px-5 text-md text-center text-slate-400  border-b whitespace-nowrap capitalize">{supplier.company_name}</td>
                         <td className="p-2 px-5 text-md text-center text-slate-400  border-b whitespace-nowrap capitalize">{supplier.contact_person}</td>
                         <td className="p-2 px-5 text-md   text-center text-slate-400  border-b whitespace-nowrap">{supplier.email}</td>
                         <td className="p-2 px-5 text-md text-center text-slate-400  border-b whitespace-nowrap">{supplier.phone}</td>
                         <td className="p-2 px-5 text-md text-center text-slate-400  border-b whitespace-nowrap capitalize">{supplier.company_address}</td>
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