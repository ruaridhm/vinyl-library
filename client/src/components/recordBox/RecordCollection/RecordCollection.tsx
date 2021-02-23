import React from 'react';
import RecordCollectionRow from './RecordCollectionRow';
import { StyledRecordCollection } from './Style';

interface RecordCollectionProps {
  boxes: Array<any>;
}

const RecordCollection: React.FC<RecordCollectionProps> = ({ boxes }) => {
  return (
    <StyledRecordCollection>
      <RecordCollectionRow boxLetters={[boxes.a, boxes.b]} boxAmount={2} />
      <RecordCollectionRow boxLetters={[boxes.c, boxes.d]} boxAmount={2} />
      <RecordCollectionRow boxLetters={[boxes.unboxed]} boxAmount={1} />
    </StyledRecordCollection>
  );
};

export default RecordCollection;
