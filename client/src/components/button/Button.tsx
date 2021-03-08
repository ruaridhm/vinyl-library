import React from 'react';
import { StyledButton } from './Style';

interface ButtonProps {
  onClick?: () => void;
  type: 'submit' | 'reset' | 'button';
  children?: string | JSX.Element;
  label: string | JSX.Element;
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
  keyPressNumber?: number;
  keyCode?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <StyledButton {...props}>
      {' '}
      {props.children} {props.label}
    </StyledButton>
  );
};

export default Button;
