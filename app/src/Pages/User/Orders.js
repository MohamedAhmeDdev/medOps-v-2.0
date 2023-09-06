import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function Orders() {
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
								<th	className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Status	</th>
								<th	className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="py-5 border-b text-center border-gray-200 bg-white text-sm">
								  <p className="text-gray-900 whitespace-no-wrap">Vera Carpenter</p>
								</td>
								<td className="py-5 border-b text-center border-gray-200 bg-white text-sm">
									<p className="text-gray-900 whitespace-no-wrap">554</p>
								</td>
								<td className="py-5 border-b text-center border-gray-200 bg-white text-sm">
									<p className="text-gray-900 whitespace-no-wrap">  Jan 21, 2020</p>
								</td>
								<td className="py-5 border-b text-center border-gray-200 bg-white text-sm">
                                   <span className="bg-green-100 text-green-400 rounded-md text-sm mr-2 px-2.5 border border-green-50">Delivered</span>
								</td>
                                <td className="py-5 border-b text-center border-gray-200 bg-white text-sm">
                                    <Link to='/SingleOrder' className="text-sm font-semibold leading-tight text-slate-400">More</Link>
								</td>
							</tr>
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