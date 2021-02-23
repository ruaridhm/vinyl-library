import React, { useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';
import { Alert } from './Style';

const Alerts: React.FC = () => {
  const alertContext = useContext(AlertContext);
  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <Alert key={alert.id} type={alert.type}>
        <i className='fas fa-info-circle' /> {alert.msg}
      </Alert>
    ))
  );
};

export default Alerts;
