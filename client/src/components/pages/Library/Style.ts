import styled from 'styled-components';

export const SpinnerContainer = styled.div`
  height: 80vh;
  display: flex;
  align-content: center;
`;
export const LibraryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ImageContainer = styled.div`
  max-width: 25%;
  height: 25vw;
  display: flex;
  justify-content: center;
  margin: 1em;
`;
export const CurrentRecordDetailsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 1em;
`;

export const CurrentRecordDetails = styled.div`
  background-color: ${({ theme }) => theme.white};
  width: 25%;
  border-radius: 0.5em;
  padding: 0.5em 1em;
  box-shadow: 5px 10px 5px rgba(0, 0, 0, 0.5);
`;
