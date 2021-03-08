import React from 'react';
import Button from '../button/Button';

import { FormContainer, FormTitle, TextHighlight, StyledForm } from './Style';
interface FormProps {
  title: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  formInputs: () => void;
}

const Form = ({ title, onSubmit, formInputs }: FormProps) => {
  return (
    <FormContainer>
      <FormTitle>
        Account <TextHighlight>{title}</TextHighlight>
      </FormTitle>
      <StyledForm onSubmit={onSubmit}>
        {formInputs()}

        <Button type='submit' solidSuccess medium label={title} />
      </StyledForm>
    </FormContainer>
  );
};

export default Form;
