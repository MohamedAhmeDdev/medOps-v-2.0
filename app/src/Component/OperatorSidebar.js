import React  from "react";
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.jpg'


function OperatorSidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <aside  className={`flex flex-1 bg-gray-50 w-60 flex-none ${sidebarOpen ? 'block fixed md:static z-20' : 'hidden md:block'}`} style={{ height: '100vh', overflowY: 'auto' }}>
    <div class="">
       <div>
       <span onClick={toggleSidebar}class="absolute top-0 right-0  p-4 opacity-50 cursor-pointer fas fa-times text-slate-400 xl:hidden material-symbols-outlined">menu</span>
       <div class="flex flex-col items-center">
          <a class="px-8 py-6 m-0 text-sm whitespace-nowrap text-slate-700" href="javascript:;" target="_blank">
            <img src={logo} class=" mx-auto h-full max-w-full transition-all duration-200 ease-nav-brand max-h-8" alt="main_logo" />
            <span class="ml-1 font-semibold transition-all duration-200 ease-nav-brand">MedOPs</span>
          </a>
        </div>
      </div>

    <hr class="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />

      <ul class="flex flex-col pl-0 mb-0 pt-5 space-y-2.5">
        <li class="mt-0.5 w-full">
          <Link to='/transporter' class="py-3 px-10 hover:shadow-lg  hover:bg-white text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg font-semibold text-slate-700 transition-colors">
            <div class="shadow-lg mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center p-5">
            <span class="material-symbols-outlined">dashboard_customize</span>
            </div>
            <span class="ml-1 text-4.5 duration-300 opacity-100 pointer-events-none ease-soft">Dashboard</span>
          </Link>
        </li>

        <li class="mt-0.5 w-full">
          <Link to='/delivery' class="py-3 px-10 text-sm hover:shadow-lg hover:bg-white ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg  font-semibold text-slate-700 transition-colors">
            <div class="shadow-lg mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center  p-5">
            <span class="material-symbols-outlined">local_shipping</span>
            </div>
            <span class="ml-1 text-4.5 duration-300 opacity-100 pointer-events-none ease-soft">Deliveries</span>
          </Link>
        </li>

        <li class="mt-0.5 w-full">
          <Link to='/Shift'  class="py-3 px-10 text-sm hover:shadow-lg hover:bg-white ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg  font-semibold text-slate-700 transition-colors">
            <div class="shadow-lg mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center  p-5">
            <span class="material-symbols-outlined">timer</span>
            </div>
            <span class="ml-1 text-4.5 duration-300 opacity-100 pointer-events-none ease-soft">Clock in</span>
          </Link>
        </li>

        <li class="mt-0.5 w-full">
          <Link to='/Notification'  class="py-3 px-10 text-sm hover:shadow-lg hover:bg-white ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg  font-semibold text-slate-700 transition-colors">
            <div class="relative shadow-lg mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center  p-5">
              <span class="material-symbols-outlined">mail</span>
              <div className="absolute top-0 right-0 mt-1  flex items-center justify-center bg-green-500 rounded-full h-5 w-5 text-white text-sm font-bold">1</div>  
            </div>
            <span class="ml-1 text-4.5 duration-300 opacity-100 pointer-events-none ease-soft">Notification</span>
          </Link>
        </li>

        <li class="mt-0.5 w-full">
          <div class="py-3 px-10 text-sm hover:shadow-lg hover:bg-white ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg  font-semibold text-slate-700 transition-colors">
            <div class="shadow-lg mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center  p-5">
            <span class="material-symbols-outlined">logout</span>
            </div>
            <span class="ml-1 text-4.5 duration-300 opacity-100 pointer-events-none ease-soft">Log out</span>
          </div>
        </li>
      </ul>
    </div>
  </aside>  
  )
}

export default OperatorSidebar