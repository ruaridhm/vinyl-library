import React from 'react';
import spinner from './Spinner.gif';
import { StyledSpinner } from './Style';

const Spinner = () => {
  return <StyledSpinner src={spinner} alt='Loading...' />;
};

export default Spinner;
