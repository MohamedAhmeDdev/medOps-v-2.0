import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { OPERATOR_SERVER_URL } from "../../../constant/severUrl";
import axios from "axios";


function Transport() {
  const [transports, setTransports] = useState([]);

  useEffect(() => {
		const getTransport = async () => {
		  const data = await axios.get(`${OPERATOR_SERVER_URL}/transport`);
			setTransports(data.data.transport);		      							
		};
	
		getTransport();
	}, []);




  return (
    <div className="flex flex-col h-screen overflow-hidden ">
      <div className="flex flex-1 relative">
        <div className="flex flex-col flex-1  overflow-x-hidden overflow-y-auto">    
          <main className="max-h-screen flex flex-col  h-[100vh]"> 
          <div className="w-full py-6 mx-auto">
            <div className="flex flex-wrap py-5">
                  <div className="flex-none w-full max-w-full">
                    <div className=" flex flex-col mb-10 break-words border-0 border-transparent border-solid">     
                      <div className="flex-auto px-0 pt-0 pb-2">
                        <div className="p-0 overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 ">
                          <thead className="align-bottom">
                              <tr>
                                <th className="p-4 text-md font-medium  border-gray-400 text-center text-black">Driver</th>
                                <th className="p-4 text-md font-medium border-gray-400 text-center text-black">Truck_Number</th>
                                <th className="p-4 text-md font-medium border-gray-400 text-center text-black">Driving_License</th>
                              </tr>
                          </thead>
                            <tbody className="">
                            {transports.length === 0 && (
                              <p className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">No item found</p>
                             )}

                              {transports?.map((item, id) =>(
                              <tr key={id}>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap border-b">{item.staff.name}</td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap border-b">{item.truck_number}</td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap border-b">{item.driver_license_number}</td>       
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