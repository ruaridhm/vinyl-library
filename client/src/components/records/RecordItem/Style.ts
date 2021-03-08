import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${({ theme }) => theme.white};
  border-radius: 0.5em;
  padding: 0.5em;
  margin: 0.5em;
  width: 22rem;
  box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.5);
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 0.75fr 0.5fr 4fr 1fr;
`;
export const CardTitle = styled.h2`
  margin: 0;
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: 3;
`;

export const CardArtist = styled.h3`
  margin: 0;
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 3;
`;
export const RecordDetailsListContainer = styled.div`
  display: flex;
  grid-row-start: 3;
  grid-row-end: 4;
  grid-column-start: 1;
  grid-column-end: 2;
`;
export const RecordDetailsList = styled.ul`
  list-style: none;
  padding: 0;
  line-height: 2em;
`;
export const RecordImage = styled.div`
  display: flex;
  align-self: center;
  grid-row-start: 3;
  grid-row-end: 4;
  grid-column-start: 2;
  grid-column-end: 3;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;

  grid-row-start: 4;
  grid-row-end: 5;
  grid-column-start: 1;
  grid-column-end: 3;
`;
