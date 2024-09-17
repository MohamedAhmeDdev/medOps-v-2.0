import React, { useState } from 'react';
import axios from 'axios'
import {MANAGER_SERVER_URL} from '../../../../constant/severUrl';
import { useNotification } from '../../../../context/NotificationContext';


function CreateRole() {
  const { showErrorNotification ,  showSuccessNotification} = useNotification();
  const [role, setRole] = useState("");

  const create_supplier = async (e) => {
    e.preventDefault();
  
    try {
      await axios.post(`${MANAGER_SERVER_URL}/role`, {
        role: role,
      }).then((response) => {
        showSuccessNotification(response.data.message);
      });
      setRole("");
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

                            <form onSubmit={create_supplier}>
                            <div className="py-6 border-b border-gray-100">
                                <div className="w-full md:w-9/12">
                                    <div className="flex flex-wrap -m-3">
                                        <div className="w-full p-3 md:w-1/3">
                                            <p className="text-base font-semibold text-gray-700 dark:text-gray-400 capitalize">role</p>
                                        </div>
                                        <div className="w-full p-3 md:flex-1">
                                            <input type="text" value={role} onChange={(e) => setRole(e.target.value)} className="w-full px-4 py-2.5 text-base text-black rounded-lg font-normal border border-gray-200 focus:outline-none"/>
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

export default CreateRole