import React, { useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';
import styled, { css } from 'styled-components';

const Alert = styled.div`
  padding: 0.7em;
  margin: 1em;
  opacity: 0.9;
  background: $light-color;
  color: $dark-grey;
  border-radius: 0.5em;

  ${(props) =>
    props.type === 'primary' &&
    css`
      background: ${(props) => props.theme.primaryColor};
      color: ${(props) => props.theme.white};
    `}

  ${(props) =>
    props.type === 'light' &&
    css`
      background: ${(props) => props.theme.lightColor};
      color: ${(props) => props.theme.darkGrey};
    `}

    ${(props) =>
    props.type === 'dark' &&
    css`
      background: ${(props) => props.theme.darkColor};
      color: ${(props) => props.theme.white};
    `}

    ${(props) =>
    props.type === 'danger' &&
    css`
      background: ${(props) => props.theme.dangerColor};
      color: ${(props) => props.theme.white};
    `}

    ${(props) =>
    props.type === 'success' &&
    css`
      background: ${(props) => props.theme.successColor};
      color: ${(props) => props.theme.white};
    `}

    ${(props) =>
    props.type === 'white' &&
    css`  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme.darkGrey};
  border: ${(props) => props.theme.white}; solid 1px;
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
