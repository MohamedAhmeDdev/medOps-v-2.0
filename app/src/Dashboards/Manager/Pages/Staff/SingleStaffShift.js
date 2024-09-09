import React, { useEffect, useState } from 'react';
import { MANAGER_SERVER_URL } from "../../../../constant/severUrl";
import { useParams } from 'react-router-dom';
import axios from "axios";

function SingleStaffShift() {
  const [shifts, setShift] = useState([]);
  const { staff_id } = useParams();

  useEffect(() => {
		const getUsers = async () => {
		  const data = await axios.get(`${MANAGER_SERVER_URL}/staff/shifts/${staff_id}`);
			setShift(data.data.shift);		
      console.log(data.data.shift);																																																							
		};
	
		getUsers();
	}, []);


  return (
     <div className="flex flex-col h-screen overflow-hidden ">
      <div className="flex flex-1 relative">
        <div className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
          <main className="max-h-screen flex flex-col h-[100vh]"> 

            <div className="w-full py-6">
            <h6 className="pb-5 font-bold text-lg  px-1.5 lg:px-6 capitalize">Weekly Shift</h6>       
              <div className="flex flex-wrap py-5">
                  <div className="flex-none w-full max-w-full">
                    <div className=" flex flex-col mb-10 break-word border-0 border-transparent border-solid bg-clip-border">     
                      <div className="flex-auto px-0 pt-0 pb-2">
                        <div className="p-0 overflow-x-auto ">
                          <table className="min-w-full divide-y divide-gray-200 ">
                          <thead className="align-bottom">
                              <tr>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black"></th>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Logged In At</th>
                                <th className="p-4 text-md font-medium tracking-wider text-center text-black">Logged Out At</th>
                              </tr>
                          </thead>
                            <tbody>     
                            {shifts.map((shift, id)=> (      
                               <tr className="border-b">
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap capitalize">Monday</td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap uppercase">{shift.start_time}</td>
                                <td className="p-4 text-md text-center text-gray-400 whitespace-nowrap uppercase">{shift.end_time}</td>
                              </tr>
                              
                            ))}
                            </tbody>
                          </table>
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

export default SingleStaffShift