import React from 'react';
import './Button.css';

const STYLES = [
  'btn--primary--solid',
  'btn--warning--solid',
  'btn--danger--solid',
  'btn--success--solid',
  'btn--primary--outline',
  'btn--primary--outline',
  'btn--primary--outline',
  'btn--primary--outline',
  'btn--primary--success--circle',
];

const SIZES = ['btn--small', 'btn--medium', 'btn--large'];

const Button = ({
  children,
  onClick,
  type,
  buttonSize,
  buttonStyle,
  className,
  label,
}) => {
  const checkStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[1];

  return (
    <button
      className={`btn ${checkStyle} ${checkSize} ${className}`}
      onClick={onClick}
      type={type}
      aria-label={label}
    >
      {children}
    </button>
  );
};

export default Button;
