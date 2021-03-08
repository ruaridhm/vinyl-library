import React from 'react';
import { RecordInterface } from '../../records/RecordItem/RecordItem';
import RecordBox from '../RecordBox/RecordBox';
import { StyledRecordCollectionRow } from './Style';

interface RecordCollectionRowProps {
  boxLetters: Array<RecordInterface[]>;
  boxAmount: number;
}

const RecordCollectionRow = ({
  boxLetters,
  boxAmount,
}: RecordCollectionRowProps) => {
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
