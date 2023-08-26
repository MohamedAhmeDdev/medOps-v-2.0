import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.jpg'


function LogisticSidebar({ sidebarOpen, toggleSidebar }) {
  const [openCategory, setOpenCategory] = useState(false);
  const [openMedicine, setOpenMedicine] = useState(false);

  return (
    <aside  className={`flex flex-1 bg-gray-100 w-60 ${sidebarOpen ? 'block fixed md:static z-20' : 'hidden md:block'}`} style={{ height: '100vh', overflowY: 'auto' }}>
    <div className="">
       <div>
       <span onClick={toggleSidebar}className="absolute top-0 right-0  p-4 opacity-50 cursor-pointer fas fa-times text-slate-400 xl:hidden material-symbols-outlined">menu</span>
       <div className="flex flex-col items-center">
          <div className="px-8 py-6 m-0 text-sm whitespace-nowrap text-slate-700">
            <img src={logo} className=" mx-auto h-full max-w-full transition-all duration-200 max-h-8" alt="main_logo" />
            <span className="ml-1 font-semibold transition-all duration-200">MedOPs</span>
          </div>
        </div>
      </div>

    <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />

      <ul className="flex flex-col pl-0 mb-3 pb-40 pt-5 space-y-2.5">
        <li className="mt-0.5 w-full">
          <Link to='/logistics' className="py-2.5 px-10 hover:shadow-lg hover:bg-white text-sm my-0 mx-4 flex items-center whitespace-nowrap rounded-lg font-semibold text-slate-700 transition-colors">
            <div className="shadow-lg mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center p-5">
            <span className="material-symbols-outlined">dashboard_customize</span>
            </div>
            <span className="ml-1 text-4.5 duration-300 opacity-100 pointer-events-none ease-soft">Dashboard</span>
          </Link>
        </li>

        <li className="mt-0.5 w-full">
          <Link to='/order' className="py-2.5  px-10 text-sm hover:shadow-lg hover:bg-white my-0 mx-4 flex items-center whitespace-nowrap rounded-lg  font-semibold text-slate-700 transition-colors">
            <div className="shadow-lg mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center  p-5">
            <span className="material-symbols-outlined">list_alt</span>
            </div>
            <span className="ml-1 text-4.5 duration-300 opacity-100 pointer-events-none ease-soft">Orders</span>
          </Link>
        </li>

        <li>
          <Link onClick={() =>setOpenCategory(!openCategory)} className="py-2.5  px-10 text-sm hover:shadow-lg hover:bg-white my-0 mx-2.5 flex items-center whitespace-nowrap rounded-lg font-semibold text-slate-700 transition-colors">
             <div className="shadow-lg mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center  p-5">
                <span className="material-symbols-outlined">category</span>
              </div>
              <span className="text-4.5 duration-300 opacity-100 pointer-events-none ease-soft">M Category</span>
                {openCategory ? (
                 <span class="material-symbols-outlined">expand_less</span>
                 ) : (
                  <span class="material-symbols-outlined">expand_more</span>
               )}
          </Link>
          {openCategory && (
            <div className="pl-1 ml-1 transition border-gray-500 dropdown-section nested-menu">
              <ul className="text-sm">
                 <li className="mt-0.5 w-full">
                  <Link to='/medicineCategory' className="py-2.5  px-10 text-sm hover:shadow-lg hover:bg-white my-0 mx-4 flex items-center whitespace-nowrap rounded-lg font-semibold text-slate-700 transition-colors">
                    <span className="ml-5 text-4.5 duration-300 opacity-100 pointer-events-none ease-soft">Category</span>
                  </Link>
               </li>
                <li className="mt-0.5 w-full">
                  <Link to='/createCategory' className="py-2.5  px-10 text-sm hover:shadow-lg hover:bg-white my-0 mx-3 flex items-center whitespace-nowrap rounded-lg font-semibold text-slate-700 transition-colors">
                    <span className="ml-5 text-4.5 duration-300 opacity-100 pointer-events-none ease-soft">Create Category</span>
                  </Link>
                </li>
              </ul>
            </div>
           )}
        </li>

        <li>
          <Link onClick={() =>setOpenMedicine(!openMedicine)} className="py-2.5  px-10 text-sm hover:shadow-lg hover:bg-white my-0 mx-4 flex items-center whitespace-nowrap rounded-lg font-semibold text-slate-700 transition-colors">
            <div className="shadow-lg mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center  p-5">
              <span className="material-symbols-outlined">prescriptions</span>
              </div>
              <span className="text-4.5 duration-300 opacity-100 pointer-events-none ease-soft">Medicine</span>
               {openMedicine ? (
                 <span class="material-symbols-outlined">expand_less</span>
                 ) : (
                  <span class="material-symbols-outlined">expand_more</span>
               )}
          </Link>
          {openMedicine && (
            <div className="pl-1 ml-1 transition border-gray-500 dropdown-section nested-menu">
              <ul className="text-sm">
                 <li className="mt-0.5 w-full">
                  <Link to='/medicine' className="py-2.5  px-10 text-sm hover:shadow-lg hover:bg-white my-0 mx-4 flex items-center whitespace-nowrap rounded-lg font-semibold text-slate-700 transition-colors">
                    <span className="ml-5 text-4.5 duration-300 opacity-100 pointer-events-none ease-soft">Medicine</span>
                  </Link>
               </li>
                <li className="mt-0.5 w-full">
                  <Link to='/createMedicine' className="py-2.5  px-10 text-sm hover:shadow-lg hover:bg-white my-0 mx-3 flex items-center whitespace-nowrap rounded-lg font-semibold text-slate-700 transition-colors">
                    <span className="ml-5 text-4.5 duration-300 opacity-100 pointer-events-none ease-soft">Create Medicine</span>
                  </Link>
                </li>
              </ul>
            </div>
           )}
        </li>

        <li className="mt-0.5 w-full">
          <Link to='/Shift'  className="py-2.5  px-10 text-sm hover:shadow-lg hover:bg-white my-0 mx-4 flex items-center whitespace-nowrap rounded-lg  font-semibold text-slate-700 transition-colors">
            <div className="shadow-lg mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center  p-5">
            <span className="material-symbols-outlined">timer</span>
            </div>
            <span className="ml-1 text-4.5 duration-300 opacity-100 pointer-events-none ease-soft">Shift</span>
          </Link>
        </li>

        <li className="mt-0.5 w-full">
          <Link to='/Notification'  className="py-2.5  px-10 text-sm hover:shadow-lg hover:bg-white my-0 mx-4 flex items-center whitespace-nowrap rounded-lg  font-semibold text-slate-700 transition-colors">
            <div className="relative shadow-lg mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center  p-5">
              <span className="material-symbols-outlined">mail</span>
              <div className="absolute top-0 right-0 mt-1  flex items-center justify-center bg-green-500 rounded-full h-5 w-5 text-white text-sm font-bold">1</div>  
            </div>
            <span className="ml-1 text-4.5 duration-300 opacity-100 pointer-events-none ease-soft">Notification</span>
          </Link>
        </li>
      </ul>
      <ul className="bg-gray-100 flex flex-col pl-0 mb-0 pt-5 space-y-2.5 pb-10 absolute w-60 bottom-10">
          <li className="mt-0.5 w-full">
            <div className="py-2.5 px-10 text-sm hover:shadow-lg bg-white ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg  font-semibold text-slate-700 transition-colors">
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

export default LogisticSidebar