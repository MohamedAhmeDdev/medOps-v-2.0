import React, { useState, useEffect} from 'react';
import Navbar from '../../../Component/Navbar';
import Sidebar from '../../../Component/Aside';
import UseSidebar from '../../../utils/constant/useSidebar';
import { Link } from 'react-router-dom'
import { Api } from "../../../utils/Api";

function Staff() {
  const { sidebarOpen, toggleSidebar } = UseSidebar();
  const [staffs, setStaff] = useState([]);

  useEffect(() => {
		const getUsers = async () => {
		  const data = await Api("/Manager/StaffWarehouse", "GET");
			setStaff(data.staff);																														
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
                      <input type="text" className="text-md w-40 relative flex-auto rounded-l-lg border border-solid border-gray-300 bg-white py-2.5 px-3 text-black focus:outline-none" placeholder="search for Staff" />
                      <button type="submit" className="px-2 py-3 text-sm font-medium text-white rounded-r-lg bg-blue-600 hover:bg-blue-800 focus:outline-none">Search</button>
                  </div>      
              </div>
             </nav>
            <div className="w-full  py-6 mx-auto">
            <h6 className="pb-5 font-bold px-3 lg:px-6 text-2xl lg:text-lg capitalize">Staff</h6> 

            <Link to='/createStaff'>
                 <div className="flex justify-end pr-5">
                   <div className="flex hover:bg-blue-200 text-blue-800 text-sm cursor-pointer ml-auto px-2.5 py-1.5">
                     <span className="material-symbols-outlined">add</span>
                     <p className="text-md text-blue-800 capitalize">Add Staff</p>
                   </div>
                 </div>
            </Link>

            <div className="flex flex-wrap py-5">
            <div className="flex-none w-full max-w-full pb-5">
              <div className="relative flex flex-col mb-6 break-words bg-white border-0 border-transparent border-solid">
                <div className="flex-auto px-0 pt-0 pb-2">
                  <div className="p-0 overflow-x-auto">
                    <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                      <thead className="align-bottom">
                        <tr>
                          <th className="px-6 py-5 font-semibold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Staff</th>
                          <th className="px-6 py-5 font-semibold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Phone_Number</th>
                          <th className="px-6 py-5 font-semibold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Address</th>
                          <th className="px-6 py-5 font-semibold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Role</th>
                          <th className="px-6 py-5 font-semibold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Function</th>
                          <th className="px-6 py-5 font-semibold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Shift Status</th>
                          <th className="px-6 py-5 font-semibold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Shift</th>
                          <th className="px-6 py-5 font-semibold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                        </tr>
                      </thead>
                      <tbody>
                      {staffs.map((staff, id) => (
                        <tr key={id}>
                          <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">                            
                              <h6 className="mb-0 text-sm text-center leading-normal capitalize">{staff.username}</h6>
                              <p className="mb-0 text-sm  text-center leading-tight text-slate-400">{staff.email}</p>                      
                          </td>
                          <td className="p-2 align-middle text-center bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <p className="mb-0 text-sm leading-tight">{`0${staff.phoneNumber}`}</p>
                          </td>
                          <td className="p-2 align-middle text-center bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <p className="mb-0 text-sm leading-tight capitalize">{staff.address}</p>
                          </td>
                          <td className="p-2 align-middle text-center bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <p className="mb-0 text-sm leading-tight">{staff.role}</p>
                          </td>
                          <td className="p-2 align-middle text-center bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <p className="mb-0 text-sm leading-tight">{staff.role}</p>
                          </td>
                          <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <span className="bg-gradient-to-tl from-green-600 to-lime-400 rounded-md text-sm  px-2 py-2 inline-block whitespace-nowrap text-center align-baseline font-semibold leading-none text-white">Logged in</span>
                          </td>
                          <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <Link to={`/StaffShift/${staff.user_id}`} className="text-sm font-semibold leading-tight text-slate-400">Shifts</Link>
                          </td>
                          <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                            <Link to={`/updateStaffInfo/${staff.user_id}`} className="text-sm font-semibold leading-tight text-slate-400">Edit</Link>
                          </td>
                        </tr>
                        ))}
                      </tbody>
                    </table>
                      <div className="grid w-full place-items-right rounded-lg p-6">
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
                      </div>
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

export default Staff