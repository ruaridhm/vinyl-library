import React, { useContext, useRef, useEffect } from 'react';
import RecordContext from '../../../context/record/RecordContext';
import Textfield from '../../text field/TextField';
import { FilterFormContainer } from './Style';

const RecordFilter = () => {
  const recordContext = useContext(RecordContext);
  const text = useRef<string>('');

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
    <FilterFormContainer>
      <form>
        <Textfield
          ref={text}
          type='text'
          title='Filter Records...'
          onChange={onChange}
          medium
          standard
        />
      </form>
    </FilterFormContainer>
  );
};

export default RecordFilter;
