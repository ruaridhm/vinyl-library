import React, { useContext } from 'react';
import AlertContext from '../../../context/alert/AlertContext';
import styled, { css } from 'styled-components';

const Alert = styled.div`
  padding: 0.7em;
  margin: 1em;
  opacity: 0.9;
  background: ${({ theme }) => theme.lightColor};
  color: ${({ theme }) => theme.darkGrey};
  border-radius: 0.5em;

  ${(props) =>
    props.type === 'primary' &&
    css`
      background: ${({ theme }) => theme.primaryColor};
      color: ${({ theme }) => theme.white};
    `}

  ${(props) =>
    props.type === 'light' &&
    css`
      background: ${({ theme }) => theme.lightColor};
      color: ${({ theme }) => theme.darkGrey};
    `}

    ${(props) =>
    props.type === 'dark' &&
    css`
      background: ${({ theme }) => theme.darkColor};
      color: ${({ theme }) => theme.white};
    `}

    ${(props) =>
    props.type === 'danger' &&
    css`
      background: ${({ theme }) => theme.dangerColor};
      color: ${({ theme }) => theme.white};
    `}

    ${(props) =>
    props.type === 'success' &&
    css`
      background: ${({ theme }) => theme.successColor};
      color: ${({ theme }) => theme.white};
    `}

    ${(props) =>
    props.type === 'white' &&
    css`
      background: ${({ theme }) => theme.white};
      color: ${({ theme }) => theme.darkGrey};
      border: ${({ theme }) => theme.white} solid 1px;
    `}
`;

const Alerts = () => {
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
