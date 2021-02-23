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
  value?: string | boolean;
  label: string;
  name: string;
  handleChecked: () => void;
}

const CheckBox: React.FC<CheckboxProps> = ({
  value,
  label,
  name,
  handleChecked,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
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
