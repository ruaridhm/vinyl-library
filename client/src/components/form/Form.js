import React from 'react';
import styled from 'styled-components';
import Button from '../button/Button';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormTitle = styled.h1``;
const TextHighlight = styled.span``;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid $black;
  border-radius: 0.5rem;
  width: 22rem;
  background-color: $white;
  padding-bottom: 1em;
  height: fit-content;
  box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.5);
  margin: 1.5em auto 1em auto;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Form = ({ title, onSubmit, formInputs }) => {
  return (
    <FormContainer>
      <FormTitle>
        Account <TextHighlight>{title}</TextHighlight>
      </FormTitle>
      <StyledForm onSubmit={onSubmit}>
        {formInputs()}

        <Button
          type='submit'
          solidSuccess
          medium
          label={title}
          children={title}
        />
      </StyledForm>
    </FormContainer>
  );
};

export default Form;
