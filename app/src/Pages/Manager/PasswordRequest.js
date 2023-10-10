import React, { useEffect, useState } from "react";
import Navbar from '../../Component/Navbar';
import Sidebar from '../../Component/Aside';
import UseSidebar from '../../utils/constant/useSidebar';
import { Api } from "../../utils/Api";
import {formatDate} from '../../utils/constant/formatDate'
import { useNotification } from '../../utils/context/NotificationContext';

function PasswordRequest() {
  const { sidebarOpen, toggleSidebar } = UseSidebar();
  const [PasswordRequest, setPasswordRequest] = useState([]);
  const { showSuccessNotification, showErrorNotification } = useNotification();


  useEffect(() => {
		const getRequest = async () => {
		  const data = await Api("/Manager/PasswordReport", "GET");
			setPasswordRequest(data.report);																														
		};
	
		getRequest();
	}, []);

  const approveRequest = (id) => {
		Api(`/Manager/PasswordReport/${id}`, "PATCH", { status: "Approved",})
		.then((response) => {
		 if (response.success) {
			setPasswordRequest((items) =>
				items.map((item) =>
				item.request_id === id ? { ...item, status: "Approved" } : item
				));
				showSuccessNotification('status updated')
		} else {
			showErrorNotification("Failed to mark order as delivered");
		  }
		}).catch((error) => {
			showErrorNotification("Error:", error);
		});
	}
  
  return (
     <div className="flex flex-col h-screen overflow-hidden ">
      <div className="flex flex-1 relative">

        <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

        <div className="flex flex-col flex-1 bg-gray-50 overflow-x-hidden overflow-y-auto">
          <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

          <main className="max-h-screen flex flex-col  h-[100vh]"> 

            <div className="w-full py-6">
            <h6 className="pb-5 font-bold text-lg  px-1.5 lg:px-6 capitalize">Password Request</h6>
               <div className="flex flex-wrap py-5">
                  <div className="flex-none w-full max-w-full">
                    <div className=" flex flex-col mb-10 break-words bg-white border-0 border-transparent border-solid bg-clip-border">     
                      <div className="flex-auto px-0 pt-0 pb-2">
                        <div className="p-0 overflow-x-auto ">
                          <table className="min-w-full divide-y divide-gray-200 ">
                          <thead className="align-bottom">
                              <tr className='border'>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Staff_Name</th>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Reason</th>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Status</th>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">submit_At</th>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Action</th>
                              </tr>
                          </thead>
                            <tbody className="bg-white">
                            {PasswordRequest.length === 0 && (
                                <p className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">No item found</p>
                               )} 
                              {PasswordRequest.map((request, id) =>(
                              <tr key={id} className='border-b'>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap capitalize">{request.user.username}</td>
                                <td className="py-4 text-md text-center text-gray-400">
                                  <div className="text-center mx-auto w-60">
                                    {request.reason}
                                  </div>
                                </td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap capitalize">
                                {request.status === 'Pending' && (
                                      <span className="bg-red-100 text-red-500 rounded-md text-sm mr-2 px-2.5 py-0.5 border border-red-50">{request.status}</span>
                                  )}
                                  {request.status === 'Approved' && (
                                    <span className="bg-green-100 text-green-500 rounded-md text-sm mr-2 px-2.5 py-0.5 border border-green-50">{request.status}</span>
                                  )}
                                </td>
                                <td className="p-4 text-sm text-center text-gray-400 whitespace-nowrap">{formatDate(request.createdAt)}</td>  
                                <td className="p-4 text-sm text-center text-gray-400 whitespace-nowrap">
                                  {request.status === 'Pending' &&(
                                  <button onClick={() => approveRequest(request.request_id)} className="hover:bg-green-200 text-green-800 text-sm cursor-pointer mr-2 px-3 py-1 border border-green-400 capitalize">Accept</button>
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