import React, { useEffect, useState } from 'react';
import { MANAGER_SERVER_URL } from "../../../../constant/severUrl";
import { formatDate } from "../../../../constant/formatDate";
import { useParams } from 'react-router-dom';
import axios from "axios";

// Helper function to get the week range (start and end date)
const getWeekRange = (weekOffset) => {
  let startOfWeek = new Date();
  startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay() - (weekOffset * 7)); // Start of the week (Sunday)

  let endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6); // End of the week (Saturday)

  return {
    startOfWeek: startOfWeek.toLocaleDateString(),
    endOfWeek: endOfWeek.toLocaleDateString(),
  };
};


// Helper function to get day name from a date
const getDayName = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { weekday: 'long' });
};

function SingleStaffShift() {
  const [shifts, setShift] = useState([]);
  const { staff_id } = useParams();
  const [weekOffset, setWeekOffset] = useState(0); // Track how many weeks back the user is

  const { startOfWeek, endOfWeek } = getWeekRange(weekOffset); // Get current week's range

  const getShifts = async (weekOffset) => {
    try {
      const response = await axios.get(`${MANAGER_SERVER_URL}/staff/shifts/${staff_id}?weekOffset=${weekOffset}`);
      setShift(response.data.shift);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
     // Fetch shifts when weekOffset changes
    getShifts(weekOffset);
  }, [weekOffset]);

  const goToPreviousWeek = () => {
     // Increase weekOffset to go to previous weeks
    setWeekOffset(prevOffset => prevOffset + 1);
  };

  const goToNextWeek = () => {
    // Decrease weekOffset to go to more recent weeks, prevent going into future (i.e., offset can't go below 0)
    setWeekOffset(prevOffset => Math.max(0, prevOffset - 1));
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="flex flex-1 relative">
        <div className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
          <main className="max-h-screen flex flex-col h-[100vh]">
            <div className="w-full py-6">
              <h6 className="pb-5 font-bold text-lg px-1.5 lg:px-6 capitalize">Weekly Shift</h6>


              <div className="flex justify-between items-center mb-4">
                <button onClick={goToPreviousWeek} className="bg-gray-500 rounded-md text-white px-4 py-2">Previous Week</button>

                <span className="font-semibold text-lg">
                  {formatDate(startOfWeek)} - {formatDate(endOfWeek)}
                </span>

                <button onClick={goToNextWeek} className="bg-gray-500 rounded-md text-white px-4 py-2" disabled={weekOffset === 0}>Next Week</button>
              </div>

              <div className="flex flex-wrap py-5">
                <div className="flex-none w-full max-w-full">
                  <div className="flex flex-col mb-10 break-word border-0 border-transparent border-solid bg-clip-border">
                    <div className="flex-auto px-0 pt-0 pb-2">
                      <div className="p-0 overflow-x-auto">
                      <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500 ">
                         <thead className="align-bottom bg-slate-500">
                            <tr>
                              <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70">Day</th>
                              <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70">Logged In At</th>
                              <th className="px-6 py-2 font-semibold text-center text-sm uppercase align-middle bg-transparent border-b border-gray-200 shadow-none border-b-solid tracking-none whitespace-nowrap text-white opacity-70">Logged Out At</th>
                            </tr>
                          </thead>
                          <tbody>
                            {shifts.map((shift, id) => (
                              <tr key={id} className="border-b bg-gray-50">
                                <td className="mb-0 text-sm leading-tight p-2 py-4 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent capitalize">{getDayName(shift.Date)} </td>
                                <td className="mb-0 text-sm leading-tight p-2 py-4 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent uppercase">{shift.start_time}</td>
                                <td className="mb-0 text-sm leading-tight p-2 py-4 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent uppercase"> {shift.end_time} </td>
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
  );
}

export default SingleStaffShift;
