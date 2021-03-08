import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormTitle = styled.h1``;
export const TextHighlight = styled.span``;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.black};
  border-radius: 0.5rem;
  width: 22rem;
  background-color: ${({ theme }) => theme.white};
  padding-bottom: 1em;
  height: fit-content;
  box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.5);
  margin: 1.5em auto 1em auto;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
