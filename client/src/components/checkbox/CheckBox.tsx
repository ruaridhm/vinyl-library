import React, { useRef } from 'react';
import {
  CheckBoxContainer,
  LabelContainer,
  CheckBoxLabel,
  Tick,
  CheckboxInput,
  VisibleLabel,
} from './Style';

interface CheckboxProps {
  value?: boolean;
  label: string;
  name: string;
  handleChecked: (e: React.MutableRefObject<HTMLInputElement>) => void;
}

const CheckBox = ({ value, label, name, handleChecked }: CheckboxProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
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

export default CheckBox;
