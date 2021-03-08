import styled from 'styled-components';

export const RecordCollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MovesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.black};
  border-radius: 0.5rem;
  width: 50%;
  min-width: 17rem;
  box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.5);
  background-color: ${({ theme }) => theme.white};
  margin: 1rem 0;
`;
