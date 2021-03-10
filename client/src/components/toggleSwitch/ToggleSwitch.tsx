import React from 'react';
import {
  Toggle,
  ToggleLabel,
  ToggleSpanInner,
  ToggleSpanOuter,
  ToggleContainer,
} from './Style';

interface ToggleInterface {
  name: string;
  checked: boolean;
  onChange;
  onValue: string | JSX.Element;
  offValue: string | JSX.Element;
  icon?: boolean;
}

const ToggleSwitch = ({
  name,
  checked,
  onChange,
  onValue = 'On',
  offValue = 'Off',
  icon,
}: ToggleInterface) => {
  return (
    <ToggleContainer>
      <Toggle
        type='checkbox'
        name={name}
        id={name}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <ToggleLabel htmlFor={name}>
        {icon ? (
          <>
            <ToggleSpanInner />
            {checked ? (
              <ToggleSpanOuter>{onValue}</ToggleSpanOuter>
            ) : (
              <ToggleSpanOuter>{offValue}</ToggleSpanOuter>
            )}
          </>
        ) : (
          <>
            <ToggleSpanInner data-on={onValue} data-off={offValue} />
            <ToggleSpanOuter />
          </>
        )}
      </ToggleLabel>
    </ToggleContainer>
  );
};

export default ToggleSwitch;
