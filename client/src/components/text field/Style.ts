import styled, { css } from 'styled-components';
import { TextFieldProps } from './TextField';

export const TextFieldInputGroup = styled.div<TextFieldProps>`
  position: relative;
  margin-top: 1em;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;

  ${({ standard }) =>
    standard &&
    css`
      ${TextFieldInputArea} {
        border-bottom: 2px solid ${({ theme }) => theme.checkboxGreyBorder};
        border-top: none;
        border-left: none;
        border-right: none;
        &:focus {
          border-bottom: 2px solid ${({ theme }) => theme.primaryColor};
          -webkit-transition: 0.2s ease-in;
          transition: 0.2s ease-in;
        }
      }
    `}
  ${({ filled }) =>
    filled &&
    css`
      ${TextFieldInputArea} {
        background-color: ${({ theme }) => theme.backgroundLight};
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom: 2px solid ${({ theme }) => theme.darkGrey};
        border-top: none;
        border-left: none;
        border-right: none;
        color: ${({ theme }) => theme.white};
        &:focus {
          border-bottom: 2px solid ${({ theme }) => theme.primaryColor};
          -webkit-transition: 0.2s ease-in;
          transition: 0.2s ease-in;
        }
      }
    `}
  ${({ outline }) =>
    outline &&
    css`
      ${TextFieldInputArea} {
        border: 2px solid ${({ theme }) => theme.darkGrey};
        border-radius: 5px;
        &:focus {
          border: 2px solid ${({ theme }) => theme.primaryColor};
          -webkit-transition: 0.2s ease-in;
          transition: 0.2s ease-in;
        }
      }
    `}

    ${({ small }) =>
    small &&
    css`
      ${TextFieldInputArea} {
        padding: 0.8em 0.6em;
        font-size: 0.9rem;
      }
    `}
  ${({ medium }) =>
    medium &&
    css`
      ${TextFieldInputArea} {
        padding: 0.9em 0.8em;
        font-size: 1.1rem;
      }
    `}
  
  ${({ large }) =>
    large &&
    css`
      ${TextFieldInputArea} {
        padding: 1em 1em;
        font-size: 1.3rem;
      }
    `}
`;

export const TextFieldLabel = styled.label`
  color: ${({ theme }) => theme.black};
  background: ${({ theme }) => theme.white};
  -webkit-transition: 0.1s;
  transition: 0.1s;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const TextFieldInputArea = styled.input`
  outline: none;
  font-size: 1.5rem;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  &:focus {
    color: ${({ theme }) => theme.black};
  }
`;
