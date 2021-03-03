import styled, { css } from 'styled-components';

interface Alert {
  type: string;
}

export const Alert = styled.div<Alert>`
  padding: 0.7em;
  margin: 1em;
  opacity: 0.9;
  background: ${({ theme }) => theme.lightColor};
  color: ${({ theme }) => theme.darkGrey};
  border-radius: 0.5em;

  ${({ type }) =>
    type === 'primary' &&
    css`
      background: ${({ theme }) => theme.primaryColor};
      color: ${({ theme }) => theme.white};
    `}

  ${({ type }) =>
    type === 'light' &&
    css`
      background: ${({ theme }) => theme.lightColor};
      color: ${({ theme }) => theme.darkGrey};
    `}

    ${({ type }) =>
    type === 'dark' &&
    css`
      background: ${({ theme }) => theme.darkColor};
      color: ${({ theme }) => theme.white};
    `}

    ${({ type }) =>
    type === 'danger' &&
    css`
      background: ${({ theme }) => theme.dangerColor};
      color: ${({ theme }) => theme.white};
    `}

    ${({ type }) =>
    type === 'success' &&
    css`
      background: ${({ theme }) => theme.successColor};
      color: ${({ theme }) => theme.white};
    `}

    ${({ type }) =>
    type === 'white' &&
    css`
      background: ${({ theme }) => theme.white};
      color: ${({ theme }) => theme.darkGrey};
      border: ${({ theme }) => theme.white} solid 1px;
    `}
`;
