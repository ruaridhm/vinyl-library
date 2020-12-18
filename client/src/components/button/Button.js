import styled, { css } from 'styled-components';

const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.4s ease;
  margin: 1rem 0.1rem;
  position: relative;
  &:hover {
    filter: brightness(90%);
    color: ${(props) => props.theme.white};
  }

  ${(props) =>
    props.solidPrimary &&
    css`
      background-color: ${(props) => props.theme.primaryColor};
      color: ${(props) => props.theme.lightColor};
      border: none;
    `}

  ${(props) =>
    props.solidWarning &&
    css`
      background-color: ${(props) => props.theme.warningColor};
      color: ${(props) => props.theme.darkColor};
      border: none;
    `}
    ${(props) =>
    props.solidDanger &&
    css`
      background-color: ${(props) => props.theme.dangerColor};
      color: ${(props) => props.theme.white};
      border: none;
    `}
    ${(props) =>
    props.solidSuccess &&
    css`
      background-color: ${(props) => props.theme.successColor};
      color: ${(props) => props.theme.lightColor};
      border: none;
    `}
    ${(props) =>
    props.outlinePrimary &&
    css`
      background-color: transparent;
      color: ${(props) => props.theme.primaryColor};
      border: 2px solid ${(props) => props.theme.primaryColor};
      &:hover {
        color: ${(props) => props.theme.secondaryColor};
      }
    `}
    ${(props) =>
    props.outlineWarning &&
    css`
      background-color: transparent;
      color: ${(props) => props.theme.warningColor};
      border: 2px solid ${(props) => props.theme.warningColor};
    `}
    ${(props) =>
    props.outlineDanger &&
    css`
      background-color: transparent;
      color: ${(props) => props.theme.dangerColor};
      border: 2px solid ${(props) => props.theme.dangerColor};
    `}
    ${(props) =>
    props.outlineSuccess &&
    css`
      background-color: transparent;
      color: ${(props) => props.theme.successColor};
      border: 2px solid ${(props) => props.theme.successColor};
    `}

    /* ${(props) => props.circlePrimary && css``}
    ${(props) => props.circleWarning && css``}
    ${(props) => props.circleDanger && css``} */


    ${(props) =>
    props.circleSuccess &&
    css`
      border-radius: 50%;
      width: 50%;
      height: 50%;
      display: flex;
      justify-content: center;
      align-content: center;
      background-color: ${(props) => props.theme.successColor};
      border: 2px solid ${(props) => props.theme.successColor};
      color: ${(props) => props.theme.lightColor};
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

Button.defaultProps = {
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
