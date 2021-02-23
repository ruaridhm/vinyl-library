import React from 'react';
import styled from 'styled-components';
import Record from './Record';
import BorderImg from '../../images/woodborder.jpg';

const StyledRecordBox = styled.div`
  border: 20px solid transparent;
  border-image: url(${BorderImg}) 100 1000;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  @media (max-width: 700px) {
    border: 10px solid transparent;
    border-image: url(${BorderImg}) 100 1000;
  }
`;

const RecordBox = ({ boxedRecords }) => {
  return (
    <StyledRecordBox>
      {boxedRecords.map((record) => (
        <Record key={record._id} recordInfo={record} />
      ))}
    </StyledRecordBox>
  );
};

export default RecordBox;
