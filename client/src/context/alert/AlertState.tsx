import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import AlertContext from './AlertContext';
import AlertReducer from './AlertReducer';

import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(AlertReducer, []);

  //SET ALERT
  const setAlert = (msg: string, type: string, timeout = 3000) => {
    const id = uuid();
    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };

  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertState;
