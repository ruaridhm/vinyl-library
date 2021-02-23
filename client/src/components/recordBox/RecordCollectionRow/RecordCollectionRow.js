import React from 'react';
import styled from 'styled-components';
import RecordBox from './RecordBox';

const StyledRecordCollectionRow = styled.div`
  display: flex;
  width: 100%;
  grid-column-start: 1;
  grid-column-end: 3;
`;

const RecordCollectionRow = ({ boxLetters, boxAmount }) => {
  if (boxAmount === 2) {
    return (
      <StyledRecordCollectionRow>
        <RecordBox boxedRecords={boxLetters[0]} />
        <RecordBox boxedRecords={boxLetters[1]} />
      </StyledRecordCollectionRow>
    );
  } else if (boxAmount === 1) {
    return <RecordBox boxedRecords={boxLetters[0]} />;
  } else {
    return;
  }
};

export default RecordCollectionRow;
