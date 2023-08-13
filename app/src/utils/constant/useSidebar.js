import { useState } from 'react';

function useSidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };
  
    return { sidebarOpen, toggleSidebar };
  };
  

export default useSidebar