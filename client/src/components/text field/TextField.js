import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';

const TextField = forwardRef((props, ref) => {
  return (
    <TextFieldInputGroup props={props}>
      <TextFieldLabel>
        {props.title}
        <TextFieldInputArea
          type={props.type}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          ref={ref}
        />
      </TextFieldLabel>
    </TextFieldInputGroup>
  );
});

const TextFieldInputGroup = styled.div`
  position: relative;
  margin-top: 1em;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;

  ${(props) =>
    props.props.standard &&
    css`
      ${TextFieldInputArea} {
        border-bottom: 2px solid #dadce0;
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
  ${(props) =>
    props.props.filled &&
    css`
      ${TextFieldInputArea} {
        background-color: ${({ theme }) => theme.backgroundLight};
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom: 2px solid ${({ theme }) => theme.darkGrey};
        border-top: none;
        border-left: none;
        border-right: none;
        color: #fff;
        &:focus {
          border-bottom: 2px solid ${({ theme }) => theme.primaryColor};
          -webkit-transition: 0.2s ease-in;
          transition: 0.2s ease-in;
        }
      }
    `}
  ${(props) =>
    props.props.outline &&
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

    ${(props) =>
    props.props.small &&
    css`
      ${TextFieldInputArea} {
        padding: 0.8em 0.6em;
        font-size: 0.9rem;
      }
    `}
  ${(props) =>
    props.props.medium &&
    css`
      ${TextFieldInputArea} {
        padding: 0.9em 0.8em;
        font-size: 1.1rem;
      }
    `}
  
  ${(props) =>
    props.props.large &&
    css`
      ${TextFieldInputArea} {
        padding: 1em 1em;
        font-size: 1.3rem;
      }
    `}
`;

const TextFieldLabel = styled.label`
  color: #333;
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

const TextFieldInputArea = styled.input`
  outline: none;
  font-size: 1.5rem;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  &:focus {
    color: ${({ theme }) => theme.black};
  }
`;

export default TextField;
