import styled from 'styled-components';

export const StyledRecordCollection = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50% 50%;
  border-radius: 1em;
  border: 1px solid transparent;
  width: 50%;
  height: 50vw;
  @media (max-width: 700px) {
    width: 80%;
    height: 80vw;
  }
  @media (max-width: 300px) {
    width: 90%;
    height: 90vw;
  }
`;
