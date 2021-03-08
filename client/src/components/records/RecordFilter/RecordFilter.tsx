import React, { useContext, useRef } from 'react';
import RecordContext from '../../../context/record/RecordContext';
import Textfield from '../../text field/TextField';
import { FilterFormContainer } from './Style';

const RecordFilter = () => {
  const recordContext = useContext(RecordContext);
  const text = useRef<HTMLInputElement>(null);
  const { filterRecords, clearFilter } = recordContext;

  const onChange = (e: { target: { value: string } }) => {
    if (e.target.value !== '') {
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
          ref={text}
          type='text'
          title='Filter Records'
          onChange={onChange}
          medium
          standard
        />
      </form>
    </FilterFormContainer>
  );
};

export default RecordFilter;
