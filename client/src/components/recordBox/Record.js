import React, { useContext } from 'react';
import RecordContext from '../../context/record/recordContext';

const Record = ({ recordInfo }) => {
  const recordContext = useContext(RecordContext);
  const { current, setCurrent, moveRecord } = recordContext;

  const onClickHandler = () => {
    setCurrent(recordInfo);
  };

  var recordClasses = 'record';

  if (current !== null && current._id === recordInfo._id) {
    recordClasses += ' record-highlighted';
  }

  if (moveRecord !== null && moveRecord._id === recordInfo._id) {
    recordClasses += ' record-move-highlighted';
  }

  return <div className={recordClasses} onClick={onClickHandler}></div>;
};

export default Record;
