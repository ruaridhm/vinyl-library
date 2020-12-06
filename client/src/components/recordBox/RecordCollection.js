import React from 'react';
import RecordCollectionRow from './RecordCollectionRow';

const RecordCollection = ({ boxes }) => {
  return (
    <div className='record-collection'>
      <RecordCollectionRow boxLetters={[boxes.a, boxes.b]} boxAmount={2} />
      <RecordCollectionRow boxLetters={[boxes.c, boxes.d]} boxAmount={2} />
      <RecordCollectionRow boxLetters={[boxes.unboxed]} boxAmount={1} />
    </div>
  );
};

export default RecordCollection;
