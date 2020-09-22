import React from 'react';
import './TextField.css';

const STYLES = [
  'textField--standard',
  'textField--filled',
  'textField--outline',
];

const SIZES = ['textField--small', 'textField--medium', 'textField--large'];

const TextField = ({
  disabled,
  name,
  placeholder,
  ref,
  required,
  subText,
  textFieldStyle,
  textFieldSize,
  type,
  onChange,
  value,
}) => {
  const checkStyle = STYLES.includes(textFieldStyle)
    ? textFieldStyle
    : STYLES[0];
  const checkSize = SIZES.includes(textFieldSize) ? textFieldSize : SIZES[1];

  return (
    <div className='input-group'>
      <input
        className={`input-area`}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        ref={ref}
      />
      <label className='label' onClick={() => {}}>
        {placeholder}
      </label>
    </div>
  );
};

export default TextField;
