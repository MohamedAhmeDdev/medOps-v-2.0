import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Api } from "../../../../utils/Api";
import {MANAGER_SERVER_URL} from '../../../..//constant/severUrl';
import axios from 'axios'

function Roles() {
  const [roles, setRole] = useState([]);

  useEffect(() => {
		const getRole = async () => {
		  const data = await axios.get(`${MANAGER_SERVER_URL}/role`);
      
			setRole(data.data.role);			
		};
	
		getRole();
	}, []);


  return (
    <div className="flex flex-col h-screen overflow-hidden ">
    <div className="flex flex-1 relative">  
      <div className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto"> 
        <main className="max-h-screen flex flex-col  h-[100vh]"> 
        <div className="w-full py-6 mx-auto">
          <Link to='/manager/add-role'>
                  <div className="flex justify-end pr-5">
                    <div className="flex bg-gray-400  text-white text-sm font-bold cursor-pointer ml-auto px-2.5 py-1.5">
                      <p className="text-md capitalize">Add Role</p>
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
                        <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70">No:</th>
                        <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70">Role</th>
                      </tr>
                    </thead>
                    <tbody>
                       {roles.length === 0 && (
                              <p className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">No item found</p>
                        )} 
                      {roles.map((role,id) => (
                      <tr key={id} className='bg-gray-50'>
                        <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">{id+1}</td>
                         <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">{role.role}</td>  
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


export default Roles