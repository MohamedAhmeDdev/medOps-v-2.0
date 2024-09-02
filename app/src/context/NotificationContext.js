import React, { createContext, useContext, useState, useEffect } from 'react';

const NotificationContext = createContext();

export const useNotification = () => {
  return useContext(NotificationContext);
};

export const NotificationProvider = ({ children }) => {
  const [successNotification, setSuccessNotification] = useState(null);
  const [errorNotification, setErrorNotification] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const showSuccessNotification = (message) => {
    setSuccessNotification(message); // Use successNotification
    setShowSuccess(true);
    setTimeout(() => hideSuccessNotification(), 5000); // Auto-hide after 5 seconds
  };

  const showErrorNotification = (message) => {
    setErrorNotification(message); // Use errorNotification
    setShowError(true);
    setTimeout(() => hideErrorNotification(), 5000); // Auto-hide after 5 seconds
  };

  const hideSuccessNotification = () => {
    setShowSuccess(false);
    setTimeout(() => setSuccessNotification(null), 300); // Delay to allow slide-out animation
  };

  const hideErrorNotification = () => {
    setShowError(false);
    setTimeout(() => setErrorNotification(null), 200); // Delay to allow slide-out animation
  };

  const removeSuccessNotification = () => {
    hideSuccessNotification();
  };

  const removeErrorNotification = () => {
    hideErrorNotification();
  };

  useEffect(() => {
    if (showSuccess || showError) {
      const timeout = setTimeout(() => {
        hideSuccessNotification();
        hideErrorNotification();
      }, 5000); // Auto-hide after 5 seconds
      return () => clearTimeout(timeout);
    }
  }, [showSuccess, showError]);


  return (
    <NotificationContext.Provider
      value={{
        showSuccessNotification,
        showErrorNotification,
        removeSuccessNotification,
        removeErrorNotification,
      }}
    >
      {children}
      <div className={`${ showSuccess ? '-translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        } flex justify-around transform fixed w-72 h-20 bottom-10 left-10 right-0 bg-green-400 text-white p-2 rounded-lg transition-transform duration-300 ease-in-out`}
      >
       <div className='bg-white rounded-full w-8 h-8 mt-5'>
         <span className="material-symbols-outlined mx-auto pt-1 pl-1 text-green-300">check</span>
       </div>
        <div className='mt-5'>{successNotification}</div>
        <button onClick={removeErrorNotification} className="ml-2 text-white font-bold absolute top-2 right-1">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      <div className={`${ showError ? '-translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        } flex justify-around transform fixed w-72 h-20 bottom-10 left-10 right-0 bg-red-400 text-white p-2 rounded-lg transition-transform duration-300 ease-in-out`}
      >
          {/* <div className='bg-white rounded-full w-8 h-8 mt-5'> */}
           <span className="material-symbols-outlined mx-auto mt-5 pt-1 pl-1 text-white">error</span>
         {/* </div> */}
          <div className='mt-5'>{errorNotification}</div>
        <button onClick={removeErrorNotification} className="ml-2 text-white font-bold absolute top-2 right-1">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
    </NotificationContext.Provider>
  );
};
