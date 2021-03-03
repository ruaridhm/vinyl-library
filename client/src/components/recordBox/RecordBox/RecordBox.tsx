import React from 'react';
import { RecordInterface } from '../../records/RecordItem/RecordItem';
import Record from '../Record/Record';
import { StyledRecordBox } from './Style';

interface RecordBoxProps {
  boxedRecords: Array<RecordInterface>;
}

const RecordBox = ({ boxedRecords }: RecordBoxProps) => {
  return (
    <StyledRecordBox>
      {boxedRecords.map((record) => (
        <Record key={record._id} recordInfo={record} />
      ))}
    </StyledRecordBox>
  );
};

export default RecordBox;
