import React from 'react';
import Record from './Record/Record';
import { StyledRecordBox } from './Style';

interface RecordBoxProps {
  boxedRecords: Array<string>;
}

const RecordBox: React.FC<RecordBoxProps> = ({ boxedRecords }) => {
  return (
    <StyledRecordBox>
      {boxedRecords.map((record) => (
        <Record key={record._id} recordInfo={record} />
      ))}
    </StyledRecordBox>
  );
};

export default RecordBox;
