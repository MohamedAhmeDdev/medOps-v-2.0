import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { UseCartContext } from "../../utils/Hook/UseCartContext";
import { SERVER_URL } from "../../utils/constant/severUrl";
import axios from "axios";
import { useNotification } from '../../utils/context/NotificationContext';

function Medicine() {
    const [medicine, setMedicine] = useState([]);
      const [searchQuery, setSearchQuery] = useState('');
    const { addToCart, } = UseCartContext();
    const { showSuccessNotification } = useNotification();

    const handleAddToCart = (item) => {
      // Add the item to the cart
      addToCart(item);
  
      // Show a success notification
      showSuccessNotification('Item added to cart successfully');
    };

    useEffect(() => {
      const getMedicine = async () => {
        let url = `${SERVER_URL}/medicine`;
    
        if (searchQuery) {
          url += `?medicine_name=${searchQuery}`;
        }
    
        const data = await axios.get(url);
        setMedicine(data.data.medicine);
      };
    
      getMedicine();
    }, [searchQuery]);
      

    return (
      <>
        <Navbar
          searchQuery={searchQuery} setSearchQuery={setSearchQuery} setMedicine={setMedicine}
        />
        <section className="py-5 mt-20 lg:h-screen font-poppins">
          <div className="mx-auto bg-white rounded-lg overflow-hidden">
            <ul className="divide-y divide-gray-300">
              {medicine?.length === 0 ? (
                <li className="py-2 px-2 text-center">No match found</li>
              ) : (
                medicine?.map((item, id) => (
                  <li key={id} className="py-2 px-2 flex items-center">
                    <Link to={`/productDetail/${item.medicine_id}`}>
                      <img src={`${SERVER_URL}/${item?.medicine_image}`} alt="Medicine 1" className="w-16 h-16 mr-4"/>
                    </Link>
                    <div className="flex text-center mx-auto">
                      <Link to={`/productDetail/${item.medicine_id}`}><h2 className="text-xl font-semibold"> {item.medicine_name} </h2> </Link>
                    </div>
  
                    <div className="flex text-center mx-auto">
                      <p className="text-green-600 font-semibold">Ksh {item.price}</p>
                    </div>
                    <button onClick={() => handleAddToCart(item)}className="ml-auto bg-blue-500 hover:bg-blue-600 text-white px-1.5 py-2 rounded-md"> Add to Cart </button>
                  </li>
                ))
              )}
            </ul>
          </div>
        </section>
      </>
    );
  }

export default Medicine