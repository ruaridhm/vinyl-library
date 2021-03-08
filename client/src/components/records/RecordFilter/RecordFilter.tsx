import React, { useContext, useRef, useEffect } from 'react';
import RecordContext from '../../../context/record/RecordContext';
import Textfield from '../../text field/TextField';
import { FilterFormContainer } from './Style';

const RecordFilter = () => {
  const recordContext = useContext(RecordContext);
  const text = useRef<HTMLInputElement>(null);

  const { filterRecords, clearFilter, filtered } = recordContext;

  useEffect(() => {
    if (filtered === null && text.current) {
      text.current.value = '';
    }
  });

  const onChange = (e: { target: { value: string } }) => {
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
          name='Filter Records'
          value='Search...'
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
