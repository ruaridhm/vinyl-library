import React from 'react';
import RecordBox from './RecordBox';

const RecordCollectionRow = ({ boxLetters, boxAmount }) => {
  if (boxAmount === 2) {
    return (
      <div className='record-collection-row'>
        <RecordBox boxedRecords={boxLetters[0]} />
        <RecordBox boxedRecords={boxLetters[1]} />
      </div>
    );
  } else if (boxAmount === 1) {
    return <RecordBox boxedRecords={boxLetters[0]} />;
  }
};

export default RecordCollectionRow;
