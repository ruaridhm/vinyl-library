import React from 'react';
import Button from '../button/Button';

import { FormContainer, FormTitle, TextHighlight, StyledForm } from './Style';
interface FormProps {
  title: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  formInputs: () => void;
  confirm: string;
}

const Form = ({ title, onSubmit, formInputs, confirm }: FormProps) => {
  return (
    <FormContainer>
      <FormTitle>
        <TextHighlight>{title}</TextHighlight>
      </FormTitle>
      <StyledForm onSubmit={onSubmit}>
        {formInputs()}

        <Button type='submit' solidSuccess medium label={confirm} />
      </StyledForm>
    </FormContainer>
  );
};

export default Form;
