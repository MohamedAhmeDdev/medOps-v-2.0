import { Fragment, useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import logo from '../../assets/img/logo.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { UseCartContext } from "../../utils/Hook/UseCartContext";
import { SERVER_URL } from "../../utils/constant/severUrl";
import { UseAuthContext } from "../../utils/Hook/StaffAuth";
import axios from 'axios';

function Navbar({ searchQuery, setSearchQuery, setMedicine}) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [medicineDropdown, setMedicineDropdown] = useState(false);
    const { cartItems, removeFromCart, updateItemQuantity} = UseCartContext(); 
    const { dispatch } = UseAuthContext();
    const navigate = useNavigate();


    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleDropdown = () => {
        setMedicineDropdown(!medicineDropdown);
      };
    

      const logoutUser = () => {
        localStorage.removeItem("user");
        dispatch({ type: "LOGOUT" });

        navigate("/");
      };

      const handleSearch = async () => {
        try {
          // Fetch medicines based on the search query
          const response = await axios.get(`${SERVER_URL}/medicine/search`, {
            params: { medicine_name: searchQuery },
          });
          setMedicine(response.data.medicine);
          
        } catch (error) {
          console.error("Error fetching medicines:", error);
          // Handle the error, e.g., show an error message to the user
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
                        <li className="mr-12">
                            <Link  to="/medicine" className="text-gray-700 hover:text-gray-600">Home</Link>
                        </li>
                        <li className="mr-12">
                            <Link to="/order" className="text-gray-700 hover:text-gray-600">Orders</Link>
                        </li>
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
                            <p onClick={toggleDropdown} className="cursor-pointer absolute top-0 right-0  left-5 flex items-center justify-center bg-red-500 rounded-full h-5 w-5 text-white text-sm font-bold">{cartItems.length}</p>
                            <div className='relative'>
                                {medicineDropdown && (
                                 <div className="absolute right-0 top-10 flex flex-col max-w-3xl p-2  w-72 bg-gray-300 dark:text-gray-100" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                                     <div className='flex'>
                                       <h2 className="text-xl text-center text-black py-2 font-semibold">Your cart</h2>
                                       <div onClick={toggleDropdown} className="cursor-pointer text-xl text-center py-2 text-black font-semibold ml-auto"><span className="material-symbols-outlined">close</span></div>
                                     </div>

                                    <ul className="flex flex-col divide-y  overflow-y-auto">
                                        {cartItems.map((item, id) => (
                                        <li key={id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
                                            <div className="flex w-full space-x-2 sm:space-x-4">
                                                <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={`${SERVER_URL}/${item?.image}`} alt="Polaroid camera"/>
                                                <div className="flex flex-col justify-between w-full pb-4">
                                                    <div className="flex justify-between w-full pb-2 space-x-2">
                                                        <div className="space-y-1">
                                                            <p className="text-sm text-black">{item.medicine_name}</p>
                                                            <p className="text-lg text-black font-semibold">Ksh {item.price}</p>
                                                            <span className="text-black text-sm">{item.quantity}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex text-sm divide-x">
                                                        <button className="flex items-center px-2 py-1 pl-0 text-black space-x-1" 
                                                        onClick={() => { 
                                                            if (item.quantity > 1) {
                                                               updateItemQuantity({ id: item.medicine_id, quantity: item.quantity - 1, });
                                                            } else {
                                                             removeFromCart(item.medicine_id); } }} 
                                                        >Remove</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        ))}
                                    </ul>
                                    {cartItems.length  >= 1 && (
                                        <div className="flex justify-center space-x-4">
                                            <Link to='/checkout'>
                                              <button className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">Checkout</button>
                                            </Link>
                                        </div>
                                     )}  

                                    {cartItems.length === 0 && (
                                     <p className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">No item added to the cart</p>
                                    )}  
                                </div>
                               )}
                            </div>
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
                        
                              <Menu.Item>
                                    {({ active }) => (
                                    <Link to="/profile" className={( active ? "bg-gray-100" : "", "block px-4 py-1.5 mx-1 text-sm text-gray-700 hover:bg-blue-200")}>Profile</Link>
                                    )}
                                </Menu.Item>
                          
                                <Menu.Item>
                                {({ active }) => (
                                  <p className={( active ? "bg-gray-100" : "", "block px-4 py-1.5 mx-1 text-sm text-gray-700 hover:bg-blue-200 cursor-pointer")} onClick={logoutUser}>
                                    Sign out
                                  </p>
                                )}
                              </Menu.Item>
                        
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