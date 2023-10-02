import React from "react";
import ManagerSideBar from "./ManagerSideBar";
import OperatorSidebar from "./OperatorSidebar";
import LogisticSidebar from "./LogisticSidebar";
import TransporterSidebar from "./TransporterSidebar";
import { getUserInfo } from "../utils/Token";

function Aside({ sidebarOpen, toggleSidebar }) {
  const userInfo = getUserInfo();
  const role = userInfo ? userInfo.role : null;

  let sidebarComponent;

  switch (role) {
    case "Manager":
      sidebarComponent = <ManagerSideBar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />;
      break;
    case "Operator":
      sidebarComponent = <OperatorSidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />;
      break;
    case "Logistics":
      sidebarComponent = <LogisticSidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />;
      break;
    case "Transporter":
      sidebarComponent = <TransporterSidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />;
      break;
    default:
  }

  return (
    <div>
      {sidebarComponent}
    </div>
  );
}

export default Aside;
