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
  'btn--primary--round',
];

const SIZES = ['btn--small', 'btn--medium', 'btn--large'];

const Button = ({
  children,
  onClick,
  type,
  buttonSize,
  buttonStyle,
  className,
}) => {
  const checkStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[1];

  const createRipple = (event) => {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
    circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];

    if (ripple) {
      ripple.remove();
    }
    button.appendChild(circle);

    if (onClick !== undefined) {
      onClick();
    }
  };

  return (
    <button
      className={`btn ${checkStyle} ${checkSize} ${className}`}
      onClick={(e) => createRipple(e, onClick)}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
