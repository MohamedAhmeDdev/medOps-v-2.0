import React from 'react';


function Navbar({ sidebarOpen, toggleSidebar  }) {
  return (
 
   <nav className="relative flex bg-gray-100  items-center justify-between px-5 py-5  transition-all shadow-none duration-250 ease-soft-in lg:flex-nowrap lg:justify-start">
           
        <div className="flex items-center">
          <div className="md:hidden">
            <button className="text-black px-5" onClick={toggleSidebar}>
              {sidebarOpen ? <span className="material-symbols-outlined">menu</span>:<span className="material-symbols-outlined">menu</span>}
            </button>
          </div>
      </div>
  </nav>
  );
}

export default Navbar;
