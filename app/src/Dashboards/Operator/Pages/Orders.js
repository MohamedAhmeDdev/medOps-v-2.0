import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { OPERATOR_SERVER_URL } from "../../../constant/severUrl";
import axios from "axios";
import { useNotification } from '../../../context/NotificationContext';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [transports, setTransports] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState('Select');
  const [selectedOrders, setSelectedOrders] = useState([]);
  const { showErrorNotification ,  showSuccessNotification} = useNotification();

  const getOrders = async () => {
    try {
      const { data } = await axios.get(`${OPERATOR_SERVER_URL}/order`);
      setOrders(data.order);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    getOrders(); // Fetch orders on component mount
  }, []);



    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const handleSelection = (person) => {
      setSelectedPerson(person);
      setIsOpen(false); 
    };


    useEffect(() => {
        const getTransport = async () => {
          const data = await axios.get(`${OPERATOR_SERVER_URL}/transport`);
          setTransports(data.data.transport);								
        };
      
        getTransport();
    }, []);

 

    
    const handleCheckboxChange = (orderId) => {      
      setSelectedOrders((prevSelectedOrders) =>
        prevSelectedOrders.includes(orderId)
          ? prevSelectedOrders.filter((id) => id !== orderId)
          : [...prevSelectedOrders, orderId]
      );
    };

    const AssignOrders = async () => {
      if (!selectedPerson || selectedPerson === 'Select') {
        showErrorNotification('Please select a person.');
        return;
      }
  
      if (selectedOrders.length === 0) {
        showErrorNotification('Please select at least one order.');
        return;
      }
  
      try {
        const response = await axios.post(`${OPERATOR_SERVER_URL}/delivery/assignOrders`, {
          orders: selectedOrders,
          staff_id: selectedPerson.staff_id
        });
  
        showSuccessNotification(response.data.message);
  
        setSelectedPerson('Select');
        setSelectedOrders([]);
  
        getOrders();
      } catch (error) {
        console.error("Error assigning orders:", error.response.data);
        showErrorNotification(error.response.data.message);
      }
    };

  return (
     <div className="flex flex-col h-screen overflow-hidden ">
      <div className="flex flex-1 relative">
        <div className="flex flex-col flex-1  overflow-x-hidden overflow-y-auto">
          <main className="max-h-screen flex flex-col  h-[100vh]"> 
        
          <div class="px-4 mt-8">
                <label for="" class="sr-only"> Search </label>
                <div class="relative">
                    <div class="absolute inset-y-0 right-0 flex items-center pl-3 pointer-events-none">
                    <button type="submit" className="cursor-pointer  px-10 py-2 text-sm font-medium text-white rounded-r-lg bg-blue-600 hover:bg-blue-800 focus:outline-none">
                      <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>
                    </div>
                    <input type="search" name="" id="" class="block w-full py-2 px-2 border border-gray-300 rounded-lg focus:outline-none sm:text-sm" placeholder="Search here" />
                </div>
            </div>

            <div className="flex pt-10">
            <div className=" w-80">
                <label id="listbox-label" className="block text-sm font-medium leading-6 text-gray-900">Assigned to</label>
                <div className="relative mt-2">
                  <button type="button"className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    aria-haspopup="listbox" aria-expanded={isOpen} aria-labelledby="listbox-label" onClick={toggleDropdown}>
                    <span className="flex items-center">
                      {selectedPerson && selectedPerson.staff ? (
                        <span className="ml-3 block truncate">{selectedPerson.staff.name}</span>
                      ) : (
                        <span className="ml-3 block truncate">Select a person</span>
                      )}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                      <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd"  d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clipRule="evenodd"/>
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <ul className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" tabIndex="-1"role="listbox"aria-labelledby="listbox-label" >
                      {transports.map((person, index) => (
                        <li  key={index} className="relative hover:bg-gray-100 cursor-pointer select-none py-2 pl-3 pr-9 text-gray-900" role="option" onClick={() => handleSelection(person)}>
                          <div className="flex items-center">
                            {person.staff && (
                              <span className="ml-3 block truncate">{person.staff.name}</span>
                            )}
                          </div>
                          {selectedPerson && selectedPerson.staff_id === person.staff_id && (
                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                              </svg>
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="pt-4 mt-4">
              <button onClick={AssignOrders} className="py-2 px-2 ml-2  bg-gray-500 text-white text-sm rounded-md hover:bg-gray-600">
                Assign Orders
              </button>
            </div>
            </div>
          
            <div className="w-full py-6 mx-auto">
               <div className="flex flex-wrap py-5">
                  <div className="flex-none w-full max-w-full">
                    <div className=" flex flex-col mb-10 break-words border-0 border-transparent border-solid bg-clip-border">     
                      <div className="flex-auto px-0 pt-0 pb-2">
                        <div className="p-0 overflow-x-auto">
                        <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500 ">
                           <thead className="align-bottom bg-slate-500">
                              <tr>
                              <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70"></th>
                                <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70">Order Id</th>
                                <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70">Customer_Name</th>
                                <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70">Phone Number</th>
                                <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70">Total Amount</th>
                                <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70">Status</th>
                              </tr>
                          </thead>
                            <tbody className="">
                            {orders.length === 0 && (
                              <p className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">No item found</p>
                             )}
                              {orders.map((order, id) =>(
                              <tr key={id} className="bg-gray-50">
                                <td class="p-4 w-4">
                                  <div class="flex items-center">
                                      <input id="checkbox-table-2" 
                                    onChange={() => handleCheckboxChange(order.order_id)} type="checkbox" class="w-4 h-4 text-gray-600 bg-gray-100 rounded border-gray-300 foc dark:focus:ring-gray-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"/>
                                      <label for="checkbox-table-2" class="sr-only">checkbox</label>
                                  </div>
                                </td>
                                <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">{order.order_id}</td>
                                <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">{order.user.name}</td>
                                <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">{order.user.phoneNumber}</td>
                                <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">{order.total_price}</td>       
                                <td className="mb-0 text-sm leading-tight p-2 py-3 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                  {order.order_status === 'Packed' && (
                                    <span className="bg-purple-100 text-purple-500 rounded-md text-sm mr-2 px-2.5 py-0.5 border border-purple-50">{order.order_status}</span>
                                  )}
                                    {order.order_status === 'Delivered' && (
                                     <span className="bg-green-100 text-green-500 rounded-sm text-sm mr-2 px-2.5 py-0.5 border border-green-50">{order.order_status}</span>
                                  )}
                                    {order.order_status === 'Pending' && (
                                  <span className="bg-orange-100 text-orange-500 rounded-md text-sm mr-2 px-2.5 py-0.5 border border-orange-50">{order.order_status}</span>
                                  )}
                               
                                </td>
                              </tr>  
                              ))}
                            </tbody>
                          </table>
                            {/* <div className="grid w-full place-items-right rounded-lg p-6">
                                  <nav>
                                      <ul className="flex">
                                          <li>
                                              <a className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-900 transition duration-150 ease-in-out hover:bg-light-300" href="#" aria-label="Previous">
                                              <span className="material-symbols-outlined">chevron_left</span>
                                              </a>
                                          </li>
                                          <li>
                                              <a className="mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-pink-600 to-pink-400 p-0 text-sm text-white shadow-md shadow-pink-900/20 transition duration-150 ease-in-out" href="#">1</a>
                                          </li>
                                          <li>
                                              <a className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-900 transition duration-150 ease-in-out hover:bg-light-300" href="#">2</a>
                                          </li>
                                          <li>
                                              <a className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-900 transition duration-150 ease-in-out hover:bg-light-300" href="#">3</a>
                                          </li>
                                          <li>
                                              <a className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-900 transition duration-150 ease-in-out hover:bg-light-300" href="#" aria-label="Next">
                                              <span className="material-symbols-outlined">chevron_right</span>
                                              </a>
                                          </li>
                                      </ul>
                                  </nav>
                            </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
               </div>       
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Orders