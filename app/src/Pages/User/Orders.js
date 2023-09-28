import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { Api } from "../../utils/Api";
import {formatDate} from '../../utils/constant/formatDate'
import { SERVER_URL } from "../../utils/constant/severUrl";
import { useNotification } from '../../utils/context/NotificationContext';

function Orders() {
	const [orders, setOrders] = useState([]);
	const { showSuccessNotification, showErrorNotification } = useNotification();

	useEffect(() => {
		const getOrders = async () => {
		  const data = await Api("/Orders", "GET");
		  if (data) {
			setOrders(data.order);
		  }
		};
	
		getOrders();
	}, []);


	const onDelivered = (id) => {
		Api(`${SERVER_URL}/Orders/${id}`, "PATCH", { order_status: "Delivered",})
		.then((response) => {
		 if (response.success) {
			setOrders((items) =>
				items.map((item) =>
				item.order_id === id ? { ...item, order_status: "Delivered" } : item
				));
				showSuccessNotification('status updated')
		} else {
			showErrorNotification("Failed to mark order as delivered");
		  }
		}).catch((error) => {
			showErrorNotification("Error:", error);
		});
	}

	  
	const handleDelete = (id) => {
		Api(`${SERVER_URL}/Orders/${id}`, "DELETE",)
		.then((response) => {
			if (response.success) {
				setOrders((items) => items.filter((item) => item.order_id !== id));
				showSuccessNotification('order deleted')
		   } else {
			   showErrorNotification("Failed toDelete order");
			 }
		   }).catch((error) => {
			   showErrorNotification("Error:", error);
		   });
	   }

return (
  <>
   <Navbar/>

    <div className="bg-white p-8 rounded-md w-full">
	    <div className=" flex items-center justify-between pb-6">
		  <h2 className="text-gray-600 text-lg font-bold"> Oder History</h2>
		</div>

		<div>
			<div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
				<div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
					<table className="min-w-full leading-normal">
						<thead>
							<tr>
								<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Order Id</th>
								<th	className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Total</th>
								<th	className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Order Date</th>
								<th	className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
								<th	className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Action</th>
								<th	className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
							</tr>
						</thead>
						<tbody>

						{orders?.map((item, id) => ( 
							<tr key={id}>
								<td className="py-5 border-b text-center border-gray-200 bg-white text-sm">
								  <p className="text-gray-900 whitespace-no-wrap">{item.order_id}</p>
								</td>
								<td className="py-5 border-b text-center border-gray-200 bg-white text-sm">
									<p className="text-gray-900 whitespace-no-wrap">{item.total_price}</p>
								</td>
								<td className="py-5 border-b text-center border-gray-200 bg-white text-sm">
									<p className="text-gray-900 whitespace-no-wrap">{formatDate(item.order_date)}</p>
								</td>
								<td className="py-5 border-b text-center border-gray-200 bg-white text-sm">
                                   <span className="bg-blue-100 text-blue-400 rounded-md text-sm mr-2 px-2.5 border border-blue-50">{item.order_status}</span>
								</td>
								<td className="py-5 border-b text-center border-gray-200 bg-white text-sm">
								{item.order_status === "Pending" && (
                                   <button onClick={() => handleDelete(item.order_id)} className="hover:bg-red-100 text-red-400 rounded-md text-sm mr-2 px-2.5 border border-red-100">Cancel Order</button>
								)}
								{item.order_status === "Packed" && (
                                   <button onClick={() => onDelivered(item.order_id)} className="hover:bg-green-100 text-green-400 rounded-md text-sm mr-2 px-2.5 border border-green-100">Delivered</button>
								)}
								</td>
                                <td className="py-5 border-b text-center border-gray-200 bg-white text-sm">
                                    <Link to={`/SingleOrder/${item.order_id}`} className="text-sm font-semibold leading-tight text-slate-400">More</Link>
								</td>
							</tr>
						))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
  </>
  )
}

export default Orders