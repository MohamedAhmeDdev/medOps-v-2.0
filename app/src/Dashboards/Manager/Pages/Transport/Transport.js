import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Api } from "../../../../utils/Api";
import { MANAGER_SERVER_URL } from "../../../../constant/severUrl";
import axios from "axios";

function Transport() {
  const [transports, setTransports] = useState([]);

  useEffect(() => {
		const getTransport = async () => {
		  const data = await axios.get(`${MANAGER_SERVER_URL}/transports`);
			setTransports(data.data.transport);	

      																
		};
	
		getTransport();
	}, []);




  return (
    <div className="flex flex-col h-screen overflow-hidden ">
      <div className="flex flex-1 relative">
    
        <div className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto">    
          <main className="max-h-screen flex flex-col  h-[100vh]"> 
          <div className="w-full py-6 mx-auto">

               <Link to='/manager/add-transport'>
                  <div className="flex justify-end pr-5">
                    <div className="flex bg-gray-400  text-white text-sm font-bold cursor-pointer ml-auto px-2.5 py-1.5">
                      <p className="text-md capitalize">Add Transport</p>
                    </div>
                  </div>
              </Link>

            <div className="flex flex-wrap py-5">
                  <div className="flex-none w-full max-w-full">
                    <div className=" flex flex-col mb-10 break-words border-0 border-transparent border-solid">     
                      <div className="flex-auto px-0 pt-0 pb-2">
                        <div className="p-0 overflow-x-auto">
                        <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500 ">
                          <thead className="align-bottom bg-slate-500">
                              <tr>
                                <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70">Driver</th>
                                <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70">Truck_Number</th>
                                <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70">Driving_License</th>
                                <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70"></th>
                              </tr>
                          </thead>
                            <tbody className="">
                             {transports.length === 0 && (
                               <p className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">No item found</p>
                               )} 
                              {transports.map((transport,id) => (
                              <tr key={id} className='bg-gray-50'>
                                <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">{transport.staff.name}</td>
                                <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">{transport.truck_number}</td>
                                <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">{transport.driver_license_number}</td>        
                                <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                   <Link to={`/manager/transport/${transport.transport_id}`} className="text-sm font-semibold leading-tight text-slate-400">Edit</Link>
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

export default Transport