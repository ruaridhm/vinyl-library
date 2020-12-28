import React, { useContext, useRef, useEffect } from 'react';
import styled from 'styled-components';
import RecordContext from '../../context/record/recordContext';
import Textfield from '../text field/TextField';

const FilterFormContainer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border: 1px solid #000;
  border-radius: 0.5rem;
  background-color: #fff;
  padding: 0em 1em 1em 1em;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  -webkit-box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.5);
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
          placeholder='Filter Records...'
          onChange={onChange}
          medium
          standard
        />
      </form>
    </FilterFormContainer>
  );
};

export default RecordFilter;
