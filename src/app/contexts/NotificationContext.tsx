import React, { createContext, useEffect, useReducer } from 'react';
import axios from 'axios';

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'LOAD_NOTIFICATIONS': {
      return {
        ...state,
        notifications: action.payload,
      };
    }
    case 'DELETE_NOTIFICATION': {
      return {
        ...state,
        notifications: action.payload,
      };
    }
    case 'CLEAR_NOTIFICATIONS': {
      return {
        ...state,
        notifications: action.payload,
      };
    }
    default: {
      return { ...state };
    }
  }
};

const NotificationContext = createContext({
  notifications: [],
  deleteNotification: (notificationID: any) => {},
  clearNotifications: () => {},
  getNotifications: () => {},
  createNotification: (notification: any) => {},
});

export const NotificationProvider = ({ settings, children }: any) => {
  const [state, dispatch] = useReducer(reducer, []);

  const deleteNotification = async (notificationID: any) => {
    try {
      const res = await axios.post('/api/notification/delete', {
        id: notificationID,
      });
      dispatch({
        type: 'DELETE_NOTIFICATION',
        payload: res.data,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const clearNotifications = async () => {
    try {
      const res = await axios.post('/api/notification/delete-all');
      dispatch({
        type: 'CLEAR_NOTIFICATIONS',
        payload: res.data,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const getNotifications = async () => {
    try {
      const res = await axios.get('/api/notification');
      dispatch({
        type: 'LOAD_NOTIFICATIONS',
        payload: res.data,
      });
    } catch (e) {
      console.error(e);
    }
  };
  const createNotification = async (notification: any) => {
    try {
      const res = await axios.post('/api/notification/add', {
        notification,
      });
      dispatch({
        type: 'CREATE_NOTIFICATION',
        payload: res.data,
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getNotifications();
  }, []);

  return (
    <NotificationContext.Provider
      value={{
        notifications: state.notifications,
        deleteNotification,
        clearNotifications,
        getNotifications,
        createNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
