import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { UseCartContext } from "../../Hook/UseCartContext";
import { SERVER_URL } from "../../constant/severUrl";
import axios from "axios";


function Medicine() {
    const [medicine, setMedicine] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const { addToCart, } = UseCartContext();

    
    const handleAddToCart = (item) => {
      addToCart(item);
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
          <section className="bg-gray-50">
            <h1 className="text-3xl font-bold text-center  pt-10">Medicines</h1>
          <div className="w-fit mx-auto grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 justify-items-center justify-center gap-y-20 mt-10 mb-5">
              {medicine?.map((item, id) => (
                      <div  key={id} className="group flex-shrink-0 m-6 relative overflow-hidden bg-white rounded-lg max-w-xs border border-gray-200">
                        <Link to={`/productDetail/${item.medicine_id}`}>
                          <div className="relative pt-10 px-10 flex items-center justify-center">
                            <div className="w-36 h-40">
                              <img className="relative w-full h-full" src={item?.medicine_image} alt={item?.medicine_name || 'Medicine Image'} />
                            </div>
                          </div>
                        </Link>
                        <div className="relative text-black py-6 space-y-1.5 px-6 mt-6">
                          <span className="block opacity-75 -mb-1">{item.medicine_name}</span>
                          <span className="block font-bold opacity-75 pt-4 -mb-1">Ksh {item.price}</span>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                          <button onClick={() => handleAddToCart(item)} className="block w-full text-center rounded-none bg-slate-900 px-5 py-1.5 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Add to cart
                          </button>
                        </div>
                      </div>
                ))
              }
              </div>
              </section>
          </div>
        </section>

      </>
    );
  }

export default Medicine