import React from 'react'

function Header(){

return(      
    <>
        <div className="navbar lg:hidden sticky top-0 bg-base-100 h-5 z-10 shadow-md">
            <div className="flex-1">
                <label htmlFor="left-sidebar-drawer" className="btn drawer-button lg:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                </label>
            </div>
        </div>
     </>
    )
}

export default Header


