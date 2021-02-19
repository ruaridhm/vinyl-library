import React, { useRef } from 'react';
import styled from 'styled-components';

const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  padding: 0.25rem;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
`;
const LabelContainer = styled.div`
  position: relative;
  width: 25px;
  height: 25px;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 50%;
  width: 25px;
  height: 25px;
  background-color: #f72414;
  transform: translateY(-50%);
  border-radius: 25%;
  box-shadow: 0 7px 10px #ffbeb8;
  cursor: pointer;
  transition: 0.2s ease transform, 0.2s ease background-color,
    0.2s ease box-shadow;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 12px;
    left: 3.5px;
    width: 17.5px;
    height: 17.5px;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.white};
    transform: translateY(-50%);
    border-radius: 25%;
    box-shadow: inset 0 7px 10px #ffbeb8;
    /* transition: 0.2s ease width, 0.2s ease height; */
  }

  &:hover::before {
    top: 11.5px;
    left: 8px;
    width: 8.75px;
    height: 8.75px;
    box-shadow: inset 0 7px 10px #ff9d96;
  }

  &:active {
    transform: translateY(-50%) scale(1.1);
  }
`;

const Tick = styled.div`
  position: absolute;
  top: 0px;
  right: 0;
  left: -1px;
  width: 15px;
  height: 15px;
  margin: 0 auto;
  margin-left: 3.5px;
  transform: rotateZ(-40deg);

  &::before,
  ::after {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.white};
    border-radius: 18px;
    opacity: 1;
    transition: 0.3s ease transform, 0.2s ease opacity;
  }

  &::before {
    left: 0;
    bottom: 0;
    width: 2.5px;
    height: 7.5px;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.23);
    transform: translateY(-68px);
  }

  &::after {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2.5px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.23);
    transform: translateX(78px);
  }
`;

const CheckboxInput = styled.input`
  display: none;

  &:checked + ${CheckBoxLabel} {
    background-color: ${({ theme }) => theme.successColor};
    box-shadow: 0 7px 10px #92ff97;

    &::before {
      width: 0;
      height: 0;
    }
  }

  &:checked + ${CheckBoxLabel} ${Tick}::before {
    transform: translate(0);
    opacity: 1;
  }
  &:checked + ${CheckBoxLabel} ${Tick}::after {
    transform: translate(0);
    opacity: 1;
  }
`;
const VisibleLabel = styled.span`
  display: flex;
  align-items: center;
  padding-left: 10px;
  cursor: pointer;
  user-select: none;
`;

const CheckBox2 = ({ value, label, name, handleChecked }) => {
  const inputRef = useRef(null);
  return (
    <CheckBoxContainer onClick={() => handleChecked(inputRef)}>
      <LabelContainer>
        <CheckboxInput
          type='checkbox'
          checked={value}
          ref={inputRef}
          name={name}
          onChange={() => handleChecked(inputRef)}
        />
        <CheckBoxLabel>
          <Tick className='Tick' />
        </CheckBoxLabel>
      </LabelContainer>
      <VisibleLabel>{label}</VisibleLabel>
    </CheckBoxContainer>
  );
};

export default CheckBox2;
