import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
import { UseCartContext } from "../../utils/Hook/UseCartContext";
import { SERVER_URL } from "../../utils/constant/severUrl";


function Cart() {
  const summaryRef = useRef();
  const { cartItems, removeFromCart, updateItemQuantity} = UseCartContext(); 
  const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);


  useEffect(() => {
    const summary = summaryRef.current;
    const summaryHeight = summary.getBoundingClientRect().height;
    const viewportHeight = window.innerHeight;
    const offset = (viewportHeight - summaryHeight) / 4;
  
    const handleScroll = () => {
      const summaryTop = summary.getBoundingClientRect().top;
  
      if (summaryTop <= offset) {
        summary.style.position = 'sticky';
        summary.style.top = `${offset}px`;
      } else {
        summary.style.position = 'static';
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
    <Navbar/>
    
    <section className="py-5 mt-20 lg:h-screen font-poppins">
        <h2 className='text-center text-2xl font-bold text-black'>Cart page</h2>

        {cartItems.length === 0 && (
              <p className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">No item added to the cart</p>
        )} 
      <div className="justify-center px-6 md:flex space-x-2 space-y-6">
          <div className="justify-center flex-1 w-full px-6 py-6 mx-auto bg-white border-gray-900 lg:py-10 md:px-7">
          {cartItems.map((item, id) => (
              <div key={id} className="flex flex-col items-start justify-start w-full border-b border-gray-200 md:mt-6 md:flex-row md:items-center md:space-x-6 xl:space-x-8">
                  <div className="flex flex-col items-start justify-between w-full pb-6 space-x-4 space-y-2 md:flex-row md:space-y-0">
                    <img className="flex-shrink-0 object-cover w-full h-40 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={`${SERVER_URL}/${item?.image}`} alt="Polaroid camera"/>
                      <div className="flex flex-col items-start justify-start w-full space-y-4">
                          <h2 className="text-lg font-semibold leading-6 text-gray-800 ">{item.medicine_name}</h2>
                      </div>
                      <div className="flex items-start justify-between w-full space-x-4">
                          <div className="flex justify-center w-1/5">
                            <button className="w-7 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer hover:bg-gray-400"
                                     onClick={() => { 
                                      if (item.quantity > 1) {
                                         updateItemQuantity({  id: item.medicine_id, quantity: item.quantity - 1, });
                                      } else {
                                       removeFromCart(item.medicine_id); } }} 
                            >
                            <span className="m-auto text-2xl font-thin">-</span>
                            </button>
                            <div className="mx-2 border text-center w-8 focus:outline-none">{item.quantity}</div>
                            <button onClick={() => updateItemQuantity({id: item.medicine_id, quantity: item.quantity + 1})} className="w-7 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer hover:bg-gray-400">
                              <span className="m-auto text-2xl font-thin">+</span>
                            </button>
                          </div>
                          <p className="text-base leading-6 text-gray-400 xl:text-lg">Ksh {item.price}</p>
                          <p><span>{item.quantity}</span> * <span className='text-base font-semibold leading-6 text-gray-800 xl:text-lg'> Ksh {item.quantity * item.price}</span></p>
                      </div>
                  </div>
              </div>
              ))}
          
            {cartItems.length  >= 1 && (
              <div className="flex flex-wrap items-center justify-between gap-4">
                <Link to="/medicine" className="flex  text-indigo-600 text-sm mt-10">
                  <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
                  Continue Shopping
                </Link>
              </div>
            )}  
          </div>
          
          <div  ref={summaryRef} className='lg:w-1/4 h-full px-8 py-10'>
            {cartItems.length  >= 1 && (
              <div>
                    <h1 className=" text-2xl border-b pb-2">Order Summary</h1>
                    {cartItems.length >= 1 && (
                      <div>
                        {cartItems.map((item, id) => (
                          <div key={id} className="flex justify-between mt-5 mb-5">
                              <span className=" text-sm uppercase">Items {cartItems.length}</span>
                              <span className=" text-sm">Ksh {item.quantity * item.price}</span>
                          </div>  
                        ))}

                        <div className="border-t mt-4">
                          <div className="flex  justify-between py-6 text-sm uppercase">
                              <span>Total cost</span>
                              <span>Ksh {totalPrice}</span>
                          </div>
                          <Link to='/checkout'>
                              <button className="bg-indigo-500  hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                          </Link>
                        </div>
                      </div>
                    )}
              </div>
            )} 
          </div>
      </div>
    </section>
    </>
  )
}

export default Cart