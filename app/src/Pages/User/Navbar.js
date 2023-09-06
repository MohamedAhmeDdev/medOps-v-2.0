import React, { useState } from 'react';
import logo from '../../assets/img/logo.jpg'
import { Link } from 'react-router-dom'

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  
  return (
    <section className="relative bg-gray-100">
        <div className="container mx-auto">
            <nav className="flex justify-between px-5 bg-gray-100 fixed top-0 left-0 right-0 z-10">
                <div className="flex items-center justify-between w-full px-4 py-2 lg:px-2 ">
                    <Link to="/medicine" className="text-2xl text-gray-700"> 
                      <img src={logo} className=" mx-auto h-full max-w-full transition-all duration-200 max-h-8" alt="main_logo" />
                    </Link>
                    <ul className="hidden font-medium lg:flex">
                        <li className="mr-12">
                            <Link  to="/medicine" className="text-gray-700 hover:text-gray-600">Home</Link>
                        </li>
                        <li className="mr-12">
                            <Link to="/order" className="text-gray-700 hover:text-gray-600">Orders</Link>
                        </li>
                    </ul>
                    <div  className="items-center max-w-xs pl-4  lg:flex">
                    <div type="search" className="pt-2 relative mx-auto text-gray-600">
                        <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" name="search" placeholder="Search"/>
                        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                          <span className="material-symbols-outlined">search</span>
                        </button>
                    </div>
                    </div>
                    <div className="items-center justify-end flex">
                        <Link to="/cart" className="flex items-center">
                          <span className="material-symbols-outlined">shopping_cart</span>
                        </Link>

                        <Link to="/profile" className="items-center mr-5 lg:mr-0 pl-6 text-sm font-semibold lg:flex">
                          <span className="material-symbols-outlined">person</span>
                        </Link>

                        <span className="material-symbols-outlined lg:hidden cursor-pointer"  onClick={toggleMobileMenu}>menu</span>
                    </div>
                </div>
            </nav>

             {/* Mobile menu */}
             {isMobileMenuOpen && (
                    <ul className="lg:hidden px-5 py-2 mt-16">
                        <li className="mb-3 border-b">
                            <Link to="/medicine" className="text-gray-700 hover:text-gray-600">Home</Link>
                        </li>
                        <li className="mb-3">
                            <Link to="/order" className="text-gray-700 hover:text-gray-600">Orders</Link>
                        </li>
                    </ul>
                )}
        </div>
  </section>

  )
}

export default Navbar