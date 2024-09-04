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
         } flex items-center transform fixed w-full max-w-xs p-4 mb-4 top-10 right-10 bg-green-400 text-white rounded-lg transition-transform duration-300 ease-in-out`} >
        <div
              class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-700 rounded-lg">
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                      d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="sr-only">Check icon</span>
          </div>
         <div class="ml-3 text-sm font-normal">{successNotification}.</div>
         <button type="button" class="ml-auto -mx-1.5 -my-1.5 text-white hover:text-gray-900 rounded-lg focus:ring-2 p-1.5 inline-flex items-center justify-center h-8 w-8" data-dismiss-target="#toast-success" aria-label="Close">
           <span class="sr-only">Close</span>
           <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
          </button>
        
      </div>

      <div className={`${ showError ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } flex items-center transform fixed w-full max-w-xs p-4 mb-4 top-10 right-10 bg-red-400 text-white rounded-lg transition-transform duration-300 ease-in-out`} >
          <div
            class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-700  rounded-lg ">
            <svg class="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                viewBox="0 0 20 20">
                <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span class="sr-only">Check icon</span>
        </div>
          <div class="ml-3 text-sm font-normal">{errorNotification}.</div>
         <button type="button" class="ml-auto -mx-1.5 -my-1.5 text-white hover:text-gray-900 rounded-lg focus:ring-2  p-1.5  inline-flex items-center justify-center h-8 w-8 " data-dismiss-target="#toast-success" aria-label="Close">
          <span class="sr-only">Close</span>
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
      </button>
      </div>
    </NotificationContext.Provider>
  );
};
