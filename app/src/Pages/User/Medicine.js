import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function Medicine() {
  return (
    <>
      <Navbar/>
    <section className="py-5 mt-20 lg:h-screen font-poppins">
     <div className="mx-auto bg-white rounded-lg overflow-hidden">
        <ul className="divide-y divide-gray-300">
            <li className="py-2 px-2 flex items-center">
                <Link to='/productDetail'><img src="https://i.postimg.cc/wBrssYjn/pexels-timothy-paule-ii-2002717.jpg" alt="Medicine 1" className="w-16 h-16 mr-4"/></Link>
                <div className="flex text-center mx-auto">
                    <Link to='/productDetail'><h2 className="text-xl font-semibold">Medicine 1</h2></Link>                
                </div>

                <div className="flex text-center mx-auto">      
                    <p className="text-green-600 font-semibold">$19.99</p>
                </div>
                <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white px-1.5 py-2 rounded-md">Add to Cart</button>
            </li>
            <li className="py-2 px-2 flex items-center">
                 <Link to='/productDetail'><img src="https://i.postimg.cc/wBrssYjn/pexels-timothy-paule-ii-2002717.jpg" alt="Medicine 1" className="w-16 h-16 mr-4"/></Link>
                <div className="flex text-center mx-auto">
                    <Link><h2 className="text-xl font-semibold">Medicine 1</h2></Link>                
                </div>

                <div className="flex text-center mx-auto">      
                    <p className="text-green-600 font-semibold">$19.99</p>
                </div>
               <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white px-1.5 py-2 rounded-md">Add to Cart</button>
            </li>
            <li className="py-2 px-2 flex items-center">
                 <Link to='/productDetail'><img src="https://i.postimg.cc/wBrssYjn/pexels-timothy-paule-ii-2002717.jpg" alt="Medicine 1" className="w-16 h-16 mr-4"/></Link>
                <div className="flex text-center mx-auto">
                    <Link to='/productDetail'><h2 className="text-xl font-semibold">Medicine 1</h2></Link>                
                </div>

                <div className="flex text-center mx-auto">      
                    <p className="text-green-600 font-semibold">$19.99</p>
                </div>
               <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white px-1.5 py-2 rounded-md">Add to Cart</button>
            </li>
        </ul>
    </div>
</section>
</>
  )
}

export default Medicine