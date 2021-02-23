import React from 'react';
import spinner from './Spinner.gif';
import { StyledSpinner } from './Style';

const Spinner: React.FC = () => {
  return <StyledSpinner src={spinner} alt='Loading...' />;
};

export default Spinner;
