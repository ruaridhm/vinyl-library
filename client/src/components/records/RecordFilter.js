import React, { useContext, useRef, useEffect } from 'react';
import RecordContext from '../../context/record/recordContext';

const RecordFilter = () => {
  const recordContext = useContext(RecordContext);
  const text = useRef('');

  const { filterRecords, clearFilter, filtered } = recordContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterRecords(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter Records...'
        onChange={onChange}
      />
    </form>
  );
};

export default RecordFilter;
