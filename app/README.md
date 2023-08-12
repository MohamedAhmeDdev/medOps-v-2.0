<!-- import React, { useEffect } from 'react';
import { useNotification } from './NotificationContext';

const NotificationFetcher = () => {
  const { dispatch } = useNotification();

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch('your-api-endpoint');
        const notifications = await response.json();

        notifications.forEach((notification) => {
          dispatch({ type: 'ADD_NOTIFICATION', payload: notification });
        });
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, [dispatch]);

  return null;
};

export default NotificationFetcher;


import React from 'react';
import { Link } from 'react-router-dom';
import { useNotification } from './NotificationContext';

const NotificationComponent = () => {
  const { state, dispatch } = useNotification();

  const handleNotificationClick = (notificationId) => {
    const clickedNotification = state.notifications.find(
      (notification) => notification.id === notificationId
    );

    if (clickedNotification && !clickedNotification.read) {
      dispatch({
        type: 'MARK_NOTIFICATION_AS_READ',
        payload: { id: clickedNotification.id },
      });
      // You can also update the backend API to mark the notification as read
      // Here, we're only updating the state in this example
    }
  };

  return (
    <div>
      <div className="absolute top-0 right-0 mt-1 flex items-center justify-center bg-green-500 rounded-full h-5 w-5 text-white text-sm font-bold">
        {state.count}
      </div>
      <div className="flex flex-wrap -mx-3 py-5">
        {state.notifications.map((notification) => (
          <Link
            to={`/SingleNotification/${notification.id}`}
            key={notification.id}
            className={`w-4/12 pt-3 p-4 ${
              notification.read ? 'bg-gray-100' : 'bg-gray-50'
            } rounded flex items-center justify-between`}
            onClick={() => handleNotificationClick(notification.id)}
          >
            {/* Render notification details here */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NotificationComponent; -->
