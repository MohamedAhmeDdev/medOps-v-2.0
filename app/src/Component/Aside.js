import React  from "react";
import ManagerSideBar from "./ManagerSideBar";
import OperatorSidebar from "./OperatorSidebar";
import LogisticSidebar from "./LogisticSidebar";
import TransporterSidebar from "./TransporterSidebar";


function Aside({ sidebarOpen, toggleSidebar }) {

  return (
    <div>
      {/* <ManagerSideBar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} /> */}
      <OperatorSidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      {/* <LogisticSidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen}/> */}
      {/* <TransporterSidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen}/> */}
    </div> 
  )
}

export default Aside