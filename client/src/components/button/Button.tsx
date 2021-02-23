import React from 'react';
import { StyledButton } from './Style';

interface ButtonProps {
  onClick?: () => void;
  type: string;
  children?: string | JSX.Element;
  label: string;
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

const Button: React.FC<ButtonProps> = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
