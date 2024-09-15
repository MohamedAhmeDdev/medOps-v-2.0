import React, { useState, useEffect } from 'react';
import { Api } from "../utils/Api";
import { SERVER_URL } from "../constant/severUrl";
import { formatTime } from "../constant/formatDate";
import { useNotification } from '../context/NotificationContext';

function ClockIn() {
  const [shiftStatus, setShiftStatus] = useState('');
  const [shiftTime, setShiftTime] = useState('');
  const { showErrorNotification, showSuccessNotification } = useNotification();
  const [currentTime, setCurrentTime] = useState(new Date());

  const getShift = async () => {
    try {
      const data = await Api(`${SERVER_URL}/shift/currentShift`, "GET");
      setShiftStatus(data.shift.shifts[0].shift_status);      
      setShiftTime(data.shift.shifts[0].start_time);
    } catch (error) {
      console.error("Failed to fetch shift information.");
    }
  };

  useEffect(() => {
    getShift();
  }, []);



  const clickToClockIn = async () => {
    try {
      const response = await Api(`${SERVER_URL}/shift`, "POST");
      showSuccessNotification(response.message);
      getShift(); 
    } catch (error) {
      showErrorNotification(error.response?.message);
    }
  };

  const clickToClockOut = async () => {
    try {
      const response = await Api(`${SERVER_URL}/shift/clockOut`, "POST");
      showSuccessNotification(response.message);
      getShift(); 
    } catch (error) {
      showErrorNotification(error.response?.message);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  

  const isAfter7AM = currentTime.getHours() >= 7;

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="flex flex-1 relative">
        <div className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
          <main className="max-h-screen flex flex-col h-[100vh]">
            <div className="w-full py-6 mx-auto">
              <h6 className="text-lg py-3 font-bold text-center">Clock IN</h6>
              <section className="flex items-center justify-center">
                <div className="py-10">
                  <div className="flex justify-center items-center bg-white shadow-soft-xl rounded-full bg-clip-border w-40 h-40">
                    <div className="flex flex-row py-2">
                      {isAfter7AM && shiftStatus !== "Clocked Out" ? (
                        <>
                          {shiftStatus === "Clocked In" ? (
                            <button onClick={clickToClockOut} className="w-32 h-32 flex justify-center items-center rounded-full bg-green-500 text-white transition-all">
                              Clock Out
                            </button>
                          ) : (
                            <button onClick={clickToClockIn} className="w-32 h-32 flex justify-center items-center rounded-full bg-red-500 text-white" >
                              Clock In
                            </button>
                          )}
                        </>
                      ) : (
                        <p className="text-center capitalize font-semibold text-red-500">Wait Until 7 am</p>
                      )}
                    </div>
                  </div>
                </div>
              </section>

              <div className="text-center">
                {shiftStatus === "Clocked In" ? (
                  <div>
                    <span className="text-center text-lg">{shiftStatus}</span> : {" "}
                    <span className="font-semibold text-center text-lg">{formatTime(shiftTime)}</span>
                  </div>
                ) : (
                  <h1 className="font-bold text-3xl">Not Clocked In</h1>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default ClockIn;
