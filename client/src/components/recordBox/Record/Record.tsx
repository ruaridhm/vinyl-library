import React, { useContext } from 'react';
import RecordContext from '../../../context/record/RecordContext';
import { RecordInterface } from '../../records/RecordItem/RecordItem';
import {
  StyledRecord,
  RecordHighlighted,
  RecordMoveHighlighted,
} from './Style';

interface RecordProps {
  recordInfo: RecordInterface;
}

const Record: React.FC<RecordProps> = ({ recordInfo }) => {
  const recordContext = useContext(RecordContext);
  const { current, setCurrent, moveRecord } = recordContext;

  const onClickHandler = () => {
    setCurrent(recordInfo);
  };

  if (current !== null && current._id === recordInfo._id) {
    return <RecordHighlighted onClick={onClickHandler} />;
  } else if (moveRecord !== null && moveRecord._id === recordInfo._id) {
    return <RecordMoveHighlighted onClick={onClickHandler} />;
  } else {
    return <StyledRecord onClick={onClickHandler} />;
  }
};

export default Record;
