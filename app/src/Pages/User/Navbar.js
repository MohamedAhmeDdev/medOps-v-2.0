import { Fragment, useState} from "react";
import { Menu, Transition } from "@headlessui/react";
import logo from '../../assets/img/logo2.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { UseCartContext } from "../../Hook/UseCartContext";
import { SERVER_URL } from "../../constant/severUrl";
import { UseAuthContext } from "../../Hook/StaffAuth";
import axios from 'axios';

function Navbar({ searchQuery, setSearchQuery, setMedicine}) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { cartItems} = UseCartContext(); 
    const { dispatch, user } = UseAuthContext();
    const navigate = useNavigate();


    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

   

    const logoutUser = () => {
        localStorage.removeItem("user");
        dispatch({ type: "LOGOUT" });

        navigate("/");
    };

    const handleSearch = async () => {
        try {
          const response = await axios.get(`${SERVER_URL}/medicine/search`, {
            params: { medicine_name: searchQuery },
          });
          setMedicine(response.data.medicine);
    
        } catch (error) {
          console.error("Error fetching medicines:", error);
        }
    };

  return (
    <section className="relative bg-gray-100">
        <div className="container mx-auto">
            <nav className="flex justify-between px-5 bg-gray-100 fixed top-0 left-0 right-0 z-10">
                <div className="flex items-center justify-between w-full px-4 py-2 lg:px-2 ">
                   <div>
                   <Link to="/medicine" className="text-2xl text-gray-700"> 
                      <img src={logo} className=" mx-auto h-full max-w-full transition-all duration-200 max-h-8" alt="main_logo" />
                    </Link>

                    <span className="text-black text-md">MedOps</span>
                   </div>

                    <ul className="hidden font-medium lg:flex">
                      {user && (
                        <li className="mr-12">
                          <Link to="/order" className="text-gray-700 hover:text-gray-600">Orders</Link>
                      </li>
                      )}
                    </ul>
                    
                    <div  className="items-center max-w-xs pl-4  lg:flex">
                    <div type="search" className="pt-2 relative mx-auto text-gray-600">
                        <input   value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" placeholder="Search"/>
                        <button type="button" onClick={handleSearch} className="absolute right-0 top-0 mt-5 mr-4">
                          <span  className="material-symbols-outlined">search</span>
                        </button>
                    </div>
                    </div>

                    <div className="items-center justify-between flex">
                        <div>
                          <div className='relative'>
                            <p className="cursor-pointer absolute top-0 right-0  left-5 flex items-center justify-center bg-red-500 rounded-full h-5 w-5 text-white text-sm font-bold">{cartItems.length}</p>
                          </div>

                          <Link to="/cart" className="flex items-center">
                            <span className="material-symbols-outlined">shopping_cart</span>
                          </Link>
                        </div>


                        <Menu as="div" className="">
                          <Menu.Button>
                            <div className="items-center  mr-10 lg:mr-0 pl-6 text-sm font-semibold lg:flex">
                              <span className="material-symbols-outlined">person</span>
                            </div>
                            </Menu.Button>
               
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                            <Menu.Items className="absolute right-5 z-10 mt-2 w-32 origin-top-right  space-y-2 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                  
                              {user && (
                                  <Menu.Item>
                                  {({ active }) => (
                                    <p className={( active ? "bg-gray-100" : "", "block px-4 py-1.5 mx-1 text-sm text-gray-700 hover:bg-blue-200 cursor-pointer")} onClick={logoutUser}>
                                      Log out
                                    </p>
                                  )}
                                </Menu.Item>
                              )}
                        
                             {!user && (
                                  <Menu.Item>
                                  {({ active }) => (
                                  <>
                                    <Link to='/' className={( active ? "bg-gray-100" : "", "block px-4 py-1.5 mx-1 text-sm text-gray-700 hover:bg-blue-200 cursor-pointer")}>
                                     Sign In
                                    </Link>
                                      <Link to='/signup' className={( active ? "bg-gray-100" : "", "block px-4 py-1.5 mx-1 text-sm text-gray-700 hover:bg-blue-200 cursor-pointer")}>
                                      Sign Up
                                     </Link>
                                  </>
                                  )}
                                </Menu.Item>
                              )}

                          </Menu.Items>
                        </Transition>
                        </Menu>

                        <span className="material-symbols-outlined lg:hidden cursor-pointer" onClick={toggleMobileMenu}>menu</span>
                    </div>
                </div>
            </nav>

             {/* Mobile menu */}
             {isMobileMenuOpen && (
                    <ul className="lg:hidden px-5 py-2 mt-20">
                        <li className="mb-3 border-b">
                            <Link to="/medicine" className="text-gray-700 hover:text-gray-600">Home</Link>
                        </li>
                       {user && (
                         <li className="mb-3">
                         <Link to="/order" className="text-gray-700 hover:text-gray-600">Orders</Link>
                        </li>
                       )}
                    </ul>
                )}
        </div>
  </section>

  )
}

export default Navbar