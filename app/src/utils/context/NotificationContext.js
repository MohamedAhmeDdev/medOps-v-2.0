import React, { createContext, useContext, useReducer } from 'react';

const NotificationContext = createContext();

const initialState = {
  count: 0,
  notifications: [],
};

const notificationReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      const isNewNotification = !state.notifications.some(
        (notification) => notification.id === action.payload.id
      );

      if (isNewNotification) {
        return {
          ...state,
          count: state.count + 1,
          notifications: [...state.notifications, action.payload],
        };
      }
      return state;

    case 'MARK_NOTIFICATION_AS_READ':
      const notificationId = action.payload.id;
      return {
        ...state,
        count: state.count > 0 ? state.count - 1 : 0,
        notifications: state.notifications.map((notification) =>
          notification.id === notificationId
            ? { ...notification, read: true }
            : notification
        ),
      };

    default:
      return state;
  }
};

const NotificationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notificationReducer, initialState);

  return (
    <NotificationContext.Provider value={{ state, dispatch }}>
      {children}
    </NotificationContext.Provider>
  );
};

const useNotification = () => {
  return useContext(NotificationContext);
};

export { NotificationProvider, useNotification };
