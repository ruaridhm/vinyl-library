import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.4s ease;
  margin: 1rem 0.1rem;
  position: relative;
  &:hover {
    filter: brightness(90%);
    color: ${({ theme }) => theme.white};
  }

  ${(props) =>
    props.solidPrimary &&
    css`
      background-color: ${({ theme }) => theme.primaryColor};
      color: ${({ theme }) => theme.lightColor};
      border: none;
    `}

  ${(props) =>
    props.solidWarning &&
    css`
      background-color: ${({ theme }) => theme.warningColor};
      color: ${({ theme }) => theme.darkColor};
      border: none;
    `}
    ${(props) =>
    props.solidDanger &&
    css`
      background-color: ${({ theme }) => theme.dangerColor};
      color: ${({ theme }) => theme.white};
      border: none;
    `}
    ${(props) =>
    props.solidSuccess &&
    css`
      background-color: ${({ theme }) => theme.successColor};
      color: ${({ theme }) => theme.lightColor};
      border: none;
    `}
    ${(props) =>
    props.outlinePrimary &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.primaryColor};
      border: 2px solid ${({ theme }) => theme.primaryColor};
      &:hover {
        color: ${({ theme }) => theme.secondaryColor};
      }
    `}
    ${(props) =>
    props.outlineWarning &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.warningColor};
      border: 2px solid ${({ theme }) => theme.warningColor};
    `}
    ${(props) =>
    props.outlineDanger &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.dangerColor};
      border: 2px solid ${({ theme }) => theme.dangerColor};
    `}
    ${(props) =>
    props.outlineSuccess &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.successColor};
      border: 2px solid ${({ theme }) => theme.successColor};
    `}

    /* ${(props) => props.circlePrimary && css``}
    ${(props) => props.circleWarning && css``}
    ${(props) => props.circleDanger && css``} */


    ${(props) =>
    props.circleSuccess &&
    css`
      margin: 0;
      padding: 0;
      border-radius: 50%;
      width: 3rem;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${({ theme }) => theme.successColor};
      border: 2px solid ${({ theme }) => theme.successColor};
      color: ${({ theme }) => theme.lightColor};
    `}



    ${(props) =>
    props.small &&
    css`
      padding: 0.3em 0.7em;
      font-size: 1rem;
    `}
    ${(props) =>
    props.medium &&
    css`
      padding: 0.315em 1.05em;
      font-size: 1.5rem;
    `}

    ${(props) =>
    props.large &&
    css`
      padding: 0.6em 1.4em;
      font-size: 2rem;
    `}
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

StyledButton.defaultProps = {
  theme: {
    primaryColor: '#0b00d6',
    secondaryColor: '#1838d8',
    backgroundLight: '#d7d8da',
    lightColor: '#f7f3b5',
    darkColor: '#0a1e47',
    dangerColor: '#db302d',
    successColor: '#14a837',
    warningColor: '#ffd028',
    white: '#fff',
    black: '#000',
    darkGrey: '#333',
    grey: '#a4a5a7',
  },
};

export default Button;
