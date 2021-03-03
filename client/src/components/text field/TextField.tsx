import React, { forwardRef } from 'react';
import {
  TextFieldInputGroup,
  TextFieldLabel,
  TextFieldInputArea,
} from './Style';

export interface TextFieldProps {
  title: string;
  name: string;
  type: string;
  value: string;
  standard?: boolean;
  filled?: boolean;
  outline?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  required?: boolean;
  minLength?: number;

  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<TextFieldProps> = forwardRef((props, ref) => {
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

export default TextField;
