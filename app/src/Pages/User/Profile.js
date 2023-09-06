import React from 'react'
import Navbar from './Navbar'

function Profile() {
  return (
    <>
    <Navbar/>

    <div className="p-4 mt-20 border-gray-200 rounded-lg 2xl:col-span-2 sm:p-6 bg-white">
            <h3 className="mb-4 text-xl font-semibold">Personal information</h3>
            <form action="#">
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-gray-900">userName</label>
                        <input type="text" className="shadow-sm border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-100 border-gray-300 focus:outline-none"/>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                        <input type="email" className="shadow-sm border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-100 border-gray-300 focus:outline-none"/>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900">PhoneNumber</label>
                        <input type="text"  className="shadow-sm border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-100 border-gray-300 focus:outline-none"/>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900">Address</label>
                        <input type="text" className="shadow-sm border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-100 border-gray-300 focus:outline-none"/>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Role</label>
                        <input type="text" className="shadow-sm border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-100 border-gray-300 focus:outline-none"/>
                    </div>                
                  
                    <div className="col-span-6 sm:col-full">
                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Update</button>
                    </div>
                </div>
            </form>
        </div>
        </>
  )
}

export default Profile