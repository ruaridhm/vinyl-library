import styled, { css } from 'styled-components';

interface StyledButtonInterface {
  solidPrimary?: boolean;
  solidWarning?: boolean;
  solidDanger?: boolean;
  solidSuccess?: boolean;
  outlinePrimary?: boolean;
  outlineWarning?: boolean;
  outlineDanger?: boolean;
  outlineSuccess?: boolean;
  circlePrimary?: boolean;
  circleWarning?: boolean;
  circleDanger?: boolean;
  circleSuccess?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
}

export const StyledButton = styled.button<StyledButtonInterface>`
  height: fit-content;
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

  ${({ solidPrimary }) =>
    solidPrimary &&
    css`
      background-color: ${({ theme }) => theme.primaryColor};
      color: ${({ theme }) => theme.lightColor};
      border: none;
    `}

  ${({ solidWarning }) =>
    solidWarning &&
    css`
      background-color: ${({ theme }) => theme.warningColor};
      color: ${({ theme }) => theme.darkColor};
      border: none;
    `}
    
    ${({ solidDanger }) =>
    solidDanger &&
    css`
      background-color: ${({ theme }) => theme.dangerColor};
      color: ${({ theme }) => theme.white};
      border: none;
    `}

    ${({ solidSuccess }) =>
    solidSuccess &&
    css`
      background-color: ${({ theme }) => theme.successColor};
      color: ${({ theme }) => theme.lightColor};
      border: none;
    `}

    ${({ outlinePrimary }) =>
    outlinePrimary &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.primaryColor};
      border: 2px solid ${({ theme }) => theme.primaryColor};
      &:hover {
        color: ${({ theme }) => theme.secondaryColor};
      }
    `}

    ${({ outlineWarning }) =>
    outlineWarning &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.warningColor};
      border: 2px solid ${({ theme }) => theme.warningColor};
    `}

    ${({ outlineDanger }) =>
    outlineDanger &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.dangerColor};
      border: 2px solid ${({ theme }) => theme.dangerColor};
    `}

    ${({ outlineSuccess }) =>
    outlineSuccess &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.successColor};
      border: 2px solid ${({ theme }) => theme.successColor};
    `}

    /* ${({ circlePrimary }) => circlePrimary && css``}
    ${({ circleWarning }) => circleWarning && css``}
    ${({ circleDanger }) => circleDanger && css``} */


    ${({ circleSuccess }) =>
    circleSuccess &&
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

    ${({ small }) =>
    small &&
    css`
      padding: 0.3em 0.7em;
      font-size: 1rem;
    `}

    ${({ medium }) =>
    medium &&
    css`
      padding: 0.315em 1.05em;
      font-size: 1.5rem;
    `}

    ${({ large }) =>
    large &&
    css`
      padding: 0.6em 1.4em;
      font-size: 2rem;
    `}
`;
