import React from 'react';
import Record from './Record';

const RecordBox = ({ records }) => {
  records.sort((a, b) => a.locationSecondary - b.locationSecondary);

  return (
    <div className='record-box'>
      {records.map((record) => (
        <Record key={record._id} recordInfo={record} />
      ))}
    </div>
  );
};

export default RecordBox;
