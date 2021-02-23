import styled from 'styled-components';

export const FilterFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.black};
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.wite};
  padding: 0em 1em 1em 1em;
  height: fit-content;
  box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.5);
  margin: 1.5em auto 1em auto;
`;
