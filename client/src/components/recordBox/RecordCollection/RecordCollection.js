import React from 'react';
import styled from 'styled-components';
import RecordCollectionRow from '../RecordCollectionRow/RecordCollectionRow';

const StyledRecordCollection = styled.div`
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

const RecordCollection = ({ boxes }) => {
  return (
    <StyledRecordCollection>
      <RecordCollectionRow boxLetters={[boxes.a, boxes.b]} boxAmount={2} />
      <RecordCollectionRow boxLetters={[boxes.c, boxes.d]} boxAmount={2} />
      <RecordCollectionRow boxLetters={[boxes.unboxed]} boxAmount={1} />
    </StyledRecordCollection>
  );
};

export default RecordCollection;
