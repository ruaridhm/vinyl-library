import React from 'react';
import RecordBox from './RecordBox';

const RecordCollectionRow = ({ boxLetters }) => {
  return (
    <div className='record-collection-row'>
      <RecordBox records={boxLetters[0]} />
      <RecordBox records={boxLetters[1]} />
    </div>
  );
};

export default RecordCollectionRow;
