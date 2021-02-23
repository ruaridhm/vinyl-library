import React, { useContext, useRef, useEffect } from 'react';
import styled from 'styled-components';
import RecordContext from '../../../context/record/recordContext';
import Textfield from '../../text field/TextField';

const FilterFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.black};
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.wite};
  padding: 0em 1em 1em 1em;
  height: fit-content;
  box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.5);
  margin: 1.5em auto 1em auto;
`;

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
