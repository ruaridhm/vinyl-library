import React from 'react';
import spinner from './Spinner.gif';
import { SpinnerContainer, StyledSpinner } from './Style';

const Spinner = () => {
  return (
    <SpinnerContainer>
      <StyledSpinner src={spinner} alt='Loading...' />
    </SpinnerContainer>
  );
};

export default Spinner;
