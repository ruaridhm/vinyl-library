import React, { useContext } from 'react';
import RecordContext from '../../context/record/recordContext';

const Record = ({ recordInfo }) => {
  const recordContext = useContext(RecordContext);
  const { current, setCurrent } = recordContext;

  const onClickHandler = () => {
    setCurrent(recordInfo);
  };

  var recordClasses = 'record';

  if (current !== null && current._id === recordInfo._id) {
    recordClasses += ' record-highlighted';
  }

  return <div className={recordClasses} onClick={onClickHandler}></div>;
};

export default Record;
