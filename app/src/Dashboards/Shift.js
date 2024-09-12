import React, { useState, useEffect } from 'react';
import { Api } from "../utils/Api";
import { SERVER_URL } from "../constant/severUrl";
import { formatDate } from "../constant/formatDate";



const getWeekRange = (weekOffset) => {
  let startOfWeek = new Date();
  startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay() - (weekOffset * 7));

  let endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);

  return {
    startOfWeek: startOfWeek.toLocaleDateString(),
    endOfWeek: endOfWeek.toLocaleDateString(),
  };
};


const getDayName = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { weekday: 'long' });
};

function Shift() {
  const [shifts, setShift] = useState([]);
  const [weekOffset, setWeekOffset] = useState(0);
  const { startOfWeek, endOfWeek } = getWeekRange(weekOffset);


  const getShift = async () => {
    const data = await Api(`${SERVER_URL}/shift?weekOffset=${weekOffset}`, "GET");    
    setShift(data.shift);		
  };

  useEffect(() => {
    getShift();
  }, []);


  useEffect(() => {
    getShift(weekOffset);
  }, [weekOffset]);


  const goToPreviousWeek = () => {
    setWeekOffset(prevOffset => prevOffset + 1);
    };

  const goToNextWeek = () => {
    setWeekOffset(prevOffset => Math.max(0, prevOffset - 1));
  };





  return(
    <div className="flex flex-col h-screen overflow-hidden ">
    <div className="flex flex-1 relative">  
      <div className="flex flex-col flex-1  overflow-x-hidden overflow-y-auto">  
        <main className="max-h-screen flex flex-col  h-[100vh]"> 
        <div className="w-full py-6 mx-auto">
          <h6 className="pb-5 font-bold text-2xl px-3 lg:px-6 lg:text-lg capitalize">Shift</h6>

          <div className="flex flex-wrap py-5">
            <div className="flex-none w-full max-w-full pb-2 lg:pb-1">
            <div className="relative flex flex-col mb-1.5 break-words  border-0 border-transparent border-solid">
              <div className="p-3  border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                <h6 className='text-lg'>shift weekly report</h6>
              </div>

              <div className="flex justify-between items-center mb-4">
                <button onClick={goToPreviousWeek} className="bg-gray-500 rounded-md text-white px-4 py-2">Previous Week</button>

                <span className="font-semibold text-lg">
                  {formatDate(startOfWeek)} - {formatDate(endOfWeek)}
                </span>

                <button onClick={goToNextWeek} className="bg-gray-500 rounded-md text-white px-4 py-2" disabled={weekOffset === 0}>Next Week</button>
              </div>


              <div className="flex-auto px-0 pt-0 pb-2">
                <div className="p-0 overflow-x-auto">
                  <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                    <thead className="align-bottom">
                      <tr>
                        <th className="px-4 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-400 shadow-none text-md lg:text-lg border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Date</th>
                        <th className="px-4 py-3 pl-2 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-400 shadow-none text-md lg:text-lg border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Clock In Time</th>
                        <th className="px-4 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-400 shadow-none text-md lg:text-lg border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Clock Out Time</th>
                        <th className="px-4 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-400 shadow-none text-md lg:text-lg border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                   {shifts.map((shift, id) => (
                       <tr key={id}>
                        <td className="p-2 px-5 text-md text-center text-slate-400 align-middle bg-transparent  border-b whitespace-nowrap shadow-transparent">{getDayName(shift.Date)}</td>
                        <td className="p-2 px-5 text-md text-center text-slate-400 align-middle bg-transparent  border-b whitespace-nowrap shadow-transparent uppercase">{shift.start_time}</td>
                        <td className="p-2 px-5 text-md text-center text-slate-400 align-middle bg-transparent  border-b whitespace-nowrap shadow-transparent uppercase">{shift.end_time}</td>
                        <td className="p-2 px-5 text-sm text-center leading-normal align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        {shift.shift_status === 'Logged In' ? (
                              <span className="bg-gradient-to-tl from-green-600 to-lime-400 px-2.5 text-md rounded-1.8 py-2 rounded-lg inline-block whitespace-nowrap text-center align-baseline leading-none text-white">
                               {shift.shift_status}
                              </span>
                        ) : (
                            <span className="text-sm text-gray-500">{shift.shift_status} </span>
                        )}
                       </td>
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

export default Shift