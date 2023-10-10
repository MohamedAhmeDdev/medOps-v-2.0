import React, { useEffect, useState } from "react";
import Navbar from '../../Component/Navbar';
import Sidebar from '../../Component/Aside';
import UseSidebar from '../../utils/constant/useSidebar';
import { Api } from "../../utils/Api";

function User() {
  const { sidebarOpen, toggleSidebar } = UseSidebar();
  const [users, setUsers] = useState([]);


    useEffect(() => {
		const getUsers = async () => {
		  const data = await Api("/Operator/Users", "GET");
			setUsers(data.user);					
		};
	
		getUsers();
	}, []);


  return (
    <div className="flex flex-col h-screen overflow-hidden ">
      <div className="flex flex-1 relative">
    
        <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
    
        <div className="flex flex-col flex-1 bg-gray-50 overflow-x-hidden overflow-y-auto">
          <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
    
          <main className="max-h-screen flex flex-col  h-[100vh]"> 
              <nav className="bg-white py-2.5">
              <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex">
                 <div className=" mx-auto">                       
                      <input type="text" className="text-md w-40 relative flex-auto rounded-l-lg border border-solid border-gray-300 bg-white py-2.5 px-3 text-black focus:outline-none" placeholder="search for User" />
                      <button type="submit" className="px-2 py-3 text-sm font-medium text-white rounded-r-lg bg-blue-600 hover:bg-blue-800 focus:outline-none">Search</button>
                  </div>       
              </div>
             </nav>
            <div className="w-full  py-6 mx-auto">
            <h6 className="pb-5 font-bold px-3 lg:px-6 text-2xl lg:text-lg capitalize">User</h6> 

            <div className="flex flex-wrap py-5">
            <div className="flex-none w-full max-w-full pb-5">
              <div className="relative flex flex-col mb-6 break-words bg-white border-0 border-transparent border-solid">
                <div className="flex-auto px-0 pt-0 pb-2">
                  <div className="p-0 overflow-x-auto">
                    <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                      <thead className="align-bottom">
                        <tr>
                          <th className="px-6 py-5 font-semibold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">User</th>
                          <th className="px-6 py-5 font-semibold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Phone_Number</th>
                          <th className="px-6 py-5 font-semibold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Address</th>
                          <th className="px-6 py-5 font-semibold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Role</th>
                        </tr>
                      </thead>z
                      <tbody>
                         {users.length === 0 && (
                              <p className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">No item found</p>
                           )}

                        {users.map((user, id)=> (
                        <tr key={id}>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">                            
                              <h6 className="mb-0 text-sm text-center leading-normal capitalize">{user.username}</h6>
                              <p className="mb-0 text-sm  text-center leading-tight text-slate-400">{user.email}</p>                      
                          </td>
                          <td className="p-2 align-middle text-center bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <p className="mb-0 text-sm leading-tight">{user.phoneNumber}</p>
                          </td>
                          <td className="p-2 align-middle text-center bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <p className="mb-0 text-sm leading-tight capitalize">{user.address}</p>
                          </td>
                          <td className="p-2 align-middle text-center bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <p className="mb-0 text-sm leading-tight">{user.role}</p>
                          </td>
                        </tr>
                        ))}
                      </tbody>
                    </table>
                      {/* <div className="grid w-full place-items-right rounded-lg p-6">
                                  <nav>
                                      <ul className="flex">
                                          <li>
                                              <a className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" href="#" aria-label="Previous">
                                              <span className="material-symbols-outlined">chevron_left</span>
                                              </a>
                                          </li>
                                          <li>
                                              <a className="mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-pink-600 to-pink-400 p-0 text-sm text-white shadow-md shadow-pink-500/20 transition duration-150 ease-in-out" href="#">1</a>
                                          </li>
                                          <li>
                                              <a className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" href="#">2</a>
                                          </li>
                                          <li>
                                              <a className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" href="#">3</a>
                                          </li>
                                          <li>
                                              <a className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" href="#" aria-label="Next">
                                              <span className="material-symbols-outlined">chevron_right</span>
                                              </a>
                                          </li>
                                      </ul>
                                  </nav>
                      </div> */}
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

export default User