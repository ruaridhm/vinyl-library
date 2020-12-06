import React from 'react';
import Record from './Record';

const RecordBox = ({ boxedRecords }) => {
  return (
    <div className='record-box'>
      {boxedRecords.map((record) => (
        <Record key={record._id} recordInfo={record} />
      ))}
    </div>
  );
};

export default RecordBox;
