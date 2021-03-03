import React from 'react';
import { boxesInterface } from '../../pages/Library/Library';
import RecordCollectionRow from '../RecordCollectionRow/RecordCollectionRow';
import { StyledRecordCollection } from './Style';
interface RecordCollectionProps {
  boxes: boxesInterface;
}

const RecordCollection = ({ boxes }: RecordCollectionProps) => {
  return (
    <StyledRecordCollection>
      <RecordCollectionRow boxLetters={[boxes.a, boxes.b]} boxAmount={2} />
      <RecordCollectionRow boxLetters={[boxes.c, boxes.d]} boxAmount={2} />
      <RecordCollectionRow boxLetters={[boxes.unboxed]} boxAmount={1} />
    </StyledRecordCollection>
  );
};

export default RecordCollection;
