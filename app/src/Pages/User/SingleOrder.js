import React, { useEffect, useState } from "react";
import Navbar from './Navbar'
import { SERVER_URL } from "../../utils/constant/severUrl";
import axios from "axios";
import { useParams } from "react-router-dom";
import {formatDate} from '../../utils/constant/formatDate'
import logo from '../../assets/img/logo.jpg'

function SingleOrder() {
    const [singleOrder, setSingleOrder] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getSingleOrder = async () => {
            const res = await axios.get(`${SERVER_URL}/Orders/${id}`);
            setSingleOrder([res.data.order]); // Wrap the order data in an array
        };
        getSingleOrder();
    }, [id]);

    return (
        <>
        <Navbar/>
  
      <div className="container mx-auto  mt-24">
     {singleOrder.map((item, id) => ( 
      <div key={id}>
        <div className="p-4 border-b border-gray-300">

          {item.order_status  === "Pending" && (
            <>
             <h1 className="text-black text-lg font-medium">your order is Pending!</h1>
             <p className="text-black text-lg font-medium">Hi {item.user.username}!</p>
            </>
          )}

          {item.order_status  === "Packed" && (
            <>
            <h1 className="text-black text-lg font-medium">your order is confirmed!</h1>
             <p className="text-black text-lg font-medium">Hi {item.user.username}!</p>
             <p>your order has been confirmed</p>
             </>
          )}
          
            {item.order_status  === "Delivered" && (
            <>
            <h1 className="text-black text-lg font-medium">your order Has been Delivered!</h1>
             <p className="text-black text-lg font-medium">Hi {item.user.username}!</p>
             <p>your order has been Delivered! thank you</p>
             </>
          )}
         
        </div>
      
          <div className="pt-5 pb-5">
            <h1 className="text-gray-700 text-lg font-medium capitalize">Order Summary</h1>
            <p className="text-gray-700 text-lg font-medium">Order ID: {item.order_id}</p>
          </div>

          <div className="flex flex-row justify-between">
          <div className="">
              <h3 className="text-gray-700 text-lg font-medium capitalize">Address</h3>
              <p className="text-gray-700 text-sm">{item.user.address}</p>
            </div>

            <div className="">
              <h3 className="text-gray-700 text-lg font-medium capitalize">contact info</h3>
              <p className="text-gray-700 text-sm">{item.user.username}</p>
              <p className="text-gray-700 text-sm">{item.user.phoneNumber}</p>
              <p className="text-gray-700 text-sm">{item.user.email}</p>
            </div>

            <div className="">
              <h3 className="text-gray-700 text-lg font-medium capitalize">Payment</h3>
              <p className="text-gray-700 text-sm">Mpesa</p>
            </div>
        </div>

        <table className="table-auto w-full mt-10">
          <thead>
            <tr>
              <th className="text-gray-700 text-left font-bold text-lg">Product Name</th>
              <th className="text-gray-700 text-left font-bold text-lg">Price</th>
              <th className="text-gray-700 text-left font-bold text-lg">Quantity</th>
            </tr>
          </thead>

          <tbody>
      
              <tr>
                <td className="text-gray-700 text-md">{item.orderLists[0].medicine.medicine_name}</td>
                <td className="text-gray-700 text-md">Ksh {item.total_price}</td>
                <td className="text-gray-700 text-md">{item.orderLists[0].quantity}</td>
              </tr>
          
          </tbody>
        </table>
        </div>
        ))}
      </div>
        </>
      )
}

export default SingleOrder