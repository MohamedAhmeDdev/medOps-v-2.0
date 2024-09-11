import React, { useEffect, useState } from "react";
import { Api } from "../../../utils/Api";
import {formatDate} from '../../../constant/formatDate'
import { useNotification } from '../../../context/NotificationContext';
import { MANAGER_SERVER_URL } from "../../../constant/severUrl";
import axios from "axios";

function PasswordRequest() {
  const [PasswordRequest, setPasswordRequest] = useState([]);
  const { showSuccessNotification, showErrorNotification } = useNotification();


  useEffect(() => {
		const getRequest = async () => {
		  const data = await axios.get(`${MANAGER_SERVER_URL}/passwordReport`);
			setPasswordRequest(data.data.report);	      																													
		};
	
		getRequest();
	}, []);

  
  const approveRequest = (id) => {
		Api(`${MANAGER_SERVER_URL}/passwordReport/${id}`, "PATCH", { status: "approved",})
		.then((response) => {
			setPasswordRequest((items) =>
				items.map((item) =>
				item.request_id === id ? { ...item, status: "approved" } : item
				));        
        showSuccessNotification(response.message);
		}).catch((error) => {
			showErrorNotification(error.response.message);
		});
	}
  
  return (
     <div className="flex flex-col h-screen overflow-hidden ">
      <div className="flex flex-1 relative">

        <div className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
          <main className="max-h-screen flex flex-col  h-[100vh]"> 

            <div className="w-full py-6">
            <h6 className="pb-5 font-bold text-lg  px-1.5 lg:px-6 capitalize">Password Request</h6>
               <div className="flex flex-wrap py-5">
                  <div className="flex-none w-full max-w-full">
                    <div className=" flex flex-col mb-10 break-words border-0 border-transparent border-solid bg-clip-border">     
                      <div className="flex-auto px-0 pt-0 pb-2">
                        <div className="p-0 overflow-x-auto ">
                        <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500 ">
                          <thead className="align-bottom bg-slate-500">
                              <tr>
                              <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70">No</th>
                                <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70">Staff_Name</th>
                                <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70">Reason</th>
                                <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70">submit_At</th>
                                <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70">Status</th>
                                <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70">Action</th>
                              </tr>
                          </thead>
                            <tbody className="">
                            {PasswordRequest.length === 0 && (
                                <p className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">No item found</p>
                               )} 
                              {PasswordRequest.map((request, id) =>(
                              <tr key={id} className='border-b bg-gray-50'>
                                  <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">{id+1}</td>
                                <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">{request.staff.name}</td>
                                <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                  <div className="text-center mx-auto w-60">
                                    {request.reason}
                                  </div>
                                </td>
                                <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">{formatDate(request.createdAt)}</td>  
                                <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                {request.status === 'pending' && (
                                      <span className="bg-red-100 text-red-500 rounded-md text-sm mr-2 px-2.5 py-0.5 border border-red-50">{request.status}</span>
                                  )}
                                  {request.status === 'approved' && (
                                    <span className="bg-green-100 text-green-500 rounded-md text-sm mr-2 px-2.5 py-0.5 border border-green-50">{request.status}</span>
                                  )}
                                </td>
                              
                                <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                  {request.status === 'pending' &&(
                                  <button onClick={() => approveRequest(request.request_id)} className="hover:bg-green-200 text-green-800 text-sm cursor-pointer mr-2 px-3 py-1 border border-green-200 capitalize">Accept</button>
                                  )}
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

export default PasswordRequest