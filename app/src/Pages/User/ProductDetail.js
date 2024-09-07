import React, { useEffect, useState } from "react";
import Navbar from './Navbar'
import { UseCartContext } from "../../Hook/UseCartContext";
import { SERVER_URL } from "../../constant/severUrl";
import axios from "axios";
import { useParams , Link} from "react-router-dom";

function ProductDetail() {
    const {cartItems, addToCart, removeFromCart, updateItemQuantity} = UseCartContext(); 
    const [medicine, setMedicine] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getMedicine = async () => {
          const res = await axios.get(`${SERVER_URL}/medicine/${id}`);
          setMedicine(res.data.medicine)
        };
   
        getMedicine();
    }, [id]);


  return (
    <>
    <Navbar/>
    
    <section className="mt-20 bg-white py-11 font-poppins">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
            {medicine?.map((item, id) => (        
                <div key={id} className="flex flex-wrap -mx-4">
                    <div className="w-full px-4 md:w-1/2 ">
                        <div className="sticky top-0 z-50 ">
                            <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                                <img  src={`${SERVER_URL}/${item.medicine_image}`} alt="" className="object-cover w-full h-96 z-10"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                        <div className="lg:pl-20">
                            <div className="mb-4">
                                <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold  md:text-4xl">{item.medicine_name}</h2>
                                <p className="inline-block text-lg font-bold text-gray-700 ">Ksh {item.price}</p>
                            </div>
                            <div className="p-4 mb-4">
                                <p className="mb-1 text-xs font-medium text-gray-700 ">{item.total_quantity <= 200 ? `Hurry up ${item.total_quantity} left in Stock`:''}</p>
                            </div>
                            <div className="w-32 mb-2">
                                <p className="w-full text-xl font-semibold text-gray-700 ">Quantity</p>
                                <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                                    {cartItems.map((item, id) => (
                                        <>
                                            <button
                                                className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-400"
                                                onClick={() => {
                                                    if (item.quantity > 1) {
                                                    updateItemQuantity({ id: item.id, quantity: item.quantity - 1 });
                                                    } else {
                                                    removeFromCart(item.id);
                                                    }
                                                }}
                                                >
                                                <span className="m-auto text-2xl font-thin">-</span>
                                            </button>

                                            <div className="flex w-20 items-center text-center text-gray-700 border bg-white outline-none focus:outline-none text-md hover:text-black"><span className="text-center mx-auto">{item.quantity}</span></div>
                                        
                                            <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-400"
                                                onClick={() => {
                                                    if (item.quantity < 0) {
                                                        addToCart(item)
                                                    } else {
                                                        updateItemQuantity({ id: item.id, quantity: item.quantity + 1 })};
                                                    }
                                                }
                                            >
                                                <span className="m-auto text-2xl font-thin">+</span>
                                            </button>
                                       </>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <div className="w-32 mb-4">
                                    <button onClick={() => addToCart(item)} className="w-full h-10 p-2 mr-4 bg-blue-500 dark:text-gray-200 text-gray-50 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500">Buy Now</button>
                            </div>
                            <div className="w-32 mb-4">
                                    <Link to='/cart' className="w-full h-10 p-2 mr-4 bg-blue-500 dark:text-gray-200 text-gray-50 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500">Checkout</Link>
                            </div>
                           </div>
                        </div>
                    </div>
                </div>
            ))}
         </div>
    </section>
    </>
  )
}

export default ProductDetail