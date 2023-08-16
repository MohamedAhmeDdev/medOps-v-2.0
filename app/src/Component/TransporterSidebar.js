import React  from "react";
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.jpg'


function TransporterSidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <aside  className={`flex flex-1 bg-gray-50 w-60 flex-none ${sidebarOpen ? 'block fixed md:static z-20' : 'hidden md:block'}`} style={{ height: '100vh', overflowY: 'auto' }}>
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

      <ul className="flex flex-col pl-0 mb-0 pt-5 space-y-2.5">
        <li className="mt-0.5 w-full">
          <Link to='/transporter' className="py-3 px-10 hover:shadow-lg  hover:bg-white text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg font-semibold text-slate-700 transition-colors">
            <div className="shadow-lg mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center p-5">
            <span className="material-symbols-outlined">dashboard_customize</span>
            </div>
            <span className="ml-1 text-4.5 duration-300 opacity-100 pointer-events-none ease-soft">Dashboard</span>
          </Link>
        </li>

        <li className="mt-0.5 w-full">
          <Link to='/delivery' className="py-3 px-10 text-sm hover:shadow-lg hover:bg-white ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg  font-semibold text-slate-700 transition-colors">
            <div className="shadow-lg mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center  p-5">
            <span className="material-symbols-outlined">local_shipping</span>
            </div>
            <span className="ml-1 text-4.5 duration-300 opacity-100 pointer-events-none ease-soft">Deliveries</span>
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

export default TransporterSidebar