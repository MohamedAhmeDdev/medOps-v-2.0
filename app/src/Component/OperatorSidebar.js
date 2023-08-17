import React  from "react";
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.jpg'


function OperatorSidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <aside  className={`flex flex-1 bg-gray-50 w-60 ${sidebarOpen ? 'block fixed md:static z-20' : 'hidden md:block'}`} style={{ height: '100vh', overflowY: 'auto' }}>
      <div className="">
        <div>
        <span onClick={toggleSidebar}className="absolute top-0 right-0  p-4 opacity-50 cursor-pointer fas fa-times text-slate-400 xl:hidden material-symbols-outlined">menu</span>
        <div className="flex flex-col items-center">
            <div className="px-8 py-6 m-0 text-sm whitespace-nowrap text-slate-700">
              <img src={logo} className=" mx-auto h-full max-w-full transition-all duration-200 ease-nav-brand max-h-8" alt="main_logo" />
              <span className="ml-1 font-semibold transition-all duration-200 ease-nav-brand">MedOPs</span>
            </div>
          </div>
        </div>

      <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />

        <ul className="flex flex-col pl-0 mb-0 pt-5 space-y-2.5 pb-10">
          <li className="mt-0.5 w-full">
            <Link to='/operator' className="py-3 px-10 hover:shadow-lg  hover:bg-white text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg font-semibold text-slate-700 transition-colors">
              <div className="shadow-lg mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center p-5">
              <span className="material-symbols-outlined">dashboard_customize</span>
              </div>
              <span className="ml-1 text-4.5 duration-300 opacity-100 pointer-events-none ease-soft">Dashboard</span>
            </Link>
          </li>

          <li className="mt-0.5 w-full">
            <Link to='/orders' className="py-3 px-10 text-sm hover:shadow-lg hover:bg-white ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg  font-semibold text-slate-700 transition-colors">
              <div className="shadow-lg mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center  p-5">
              <span className="material-symbols-outlined">list_alt</span>
              </div>
              <span className="ml-1 text-4.5 duration-300 opacity-100 pointer-events-none ease-soft">Orders</span>
            </Link>
          </li>

          <li className="mt-0.5 w-full">
            <Link to='/medicine' className="py-3 px-10 text-sm hover:shadow-lg hover:bg-white ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg  font-semibold text-slate-700 transition-colors">
              <div className="shadow-lg mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center  p-5">
              <span className="material-symbols-outlined">prescriptions</span>
              </div>
              <span className="ml-1 text-4.5 duration-300 opacity-100 pointer-events-none ease-soft">Medicine</span>
            </Link>
          </li>


          <li className="mt-0.5 w-full">
            <Link to='/supplier' className="py-3 px-10 text-sm hover:shadow-lg hover:bg-white ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg  font-semibold text-slate-700 transition-colors">
              <div className="shadow-lg mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center  p-5">
              <span className="material-symbols-outlined">prescriptions</span>
              </div>
              <span className="ml-1 text-4.5 duration-300 opacity-100 pointer-events-none ease-soft">Supplier</span>
            </Link>
          </li>

          <li className="mt-0.5 w-full">
            <Link to='/transport' className="py-3 px-10 text-sm hover:shadow-lg hover:bg-white ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg  font-semibold text-slate-700 transition-colors">
              <div className="shadow-lg mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center  p-5">
              <span className="material-symbols-outlined">prescriptions</span>
              </div>
              <span className="ml-1 text-4.5 duration-300 opacity-100 pointer-events-none ease-soft">Transport</span>
            </Link>
          </li>

          <li className="mt-0.5 w-full">
            <Link to='/staff' className="py-3 px-10 text-sm hover:shadow-lg hover:bg-white ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg  font-semibold text-slate-700 transition-colors">
              <div className="shadow-lg mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center  p-5">
              <span className="material-symbols-outlined">prescriptions</span>
              </div>
              <span className="ml-1 text-4.5 duration-300 opacity-100 pointer-events-none ease-soft">Staff</span>
            </Link>
          </li>

          <li className="mt-0.5 w-full">
            <Link to='/user' className="py-3 px-10 text-sm hover:shadow-lg hover:bg-white ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg  font-semibold text-slate-700 transition-colors">
              <div className="shadow-lg mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center  p-5">
              <span className="material-symbols-outlined">prescriptions</span>
              </div>
              <span className="ml-1 text-4.5 duration-300 opacity-100 pointer-events-none ease-soft">Users</span>
            </Link>
          </li>

          <li className="mt-0.5 w-full">
            <Link to='/Shift'  className="py-3 px-10 text-sm hover:shadow-lg hover:bg-white ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg  font-semibold text-slate-700 transition-colors">
              <div className="shadow-lg mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center  p-5">
              <span className="material-symbols-outlined">timer</span>
              </div>
              <span className="ml-1 text-4.5 duration-300 opacity-100 pointer-events-none ease-soft">Shift</span>
            </Link>
          </li>

          <li className="mt-0.5 w-full">
            <Link to='/Notification'  className="py-3 px-10 text-sm hover:shadow-lg hover:bg-white ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg  font-semibold text-slate-700 transition-colors">
              <div className="relative shadow-lg mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center  p-5">
                <span className="material-symbols-outlined">mail</span>
                <div className="absolute top-0 right-0 mt-1  flex items-center justify-center bg-green-500 rounded-full h-5 w-5 text-white text-sm font-bold">1</div>  
              </div>
              <span className="ml-1 text-4.5 duration-300 opacity-100 pointer-events-none ease-soft">Notification</span>
            </Link>
          </li>

          <li className="mt-0.5 w-full">
            <div className="py-3 px-10 text-sm hover:shadow-lg hover:bg-white ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg  font-semibold text-slate-700 transition-colors">
              <div className="shadow-lg mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center  p-5">
              <span className="material-symbols-outlined">logout</span>
              </div>
              <span className="ml-1 text-4.5 duration-300 opacity-100 pointer-events-none ease-soft">Log out</span>
            </div>
          </li>
        </ul>
      </div>
  </aside>  
  )
}

export default OperatorSidebar