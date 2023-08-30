import React  from "react";
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.jpg'
import ManagerSideBar from "./ManagerSideBar";
import AdminSidebar from "./AdminSidebar";
import OperatorSidebar from "./OperatorSidebar";
import LogisticSidebar from "./LogisticSidebar";
import TransporterSidebar from "./TransporterSidebar";


function Aside({ sidebarOpen, toggleSidebar }) {

  return (
    <div>
      <AdminSidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      {/* <ManagerSideBar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} /> */}
      {/* <OperatorSidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} /> */}
      {/* <LogisticSidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen}/> */}
      {/* <TransporterSidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen}/> */}
    </div> 
  )
}

export default Aside