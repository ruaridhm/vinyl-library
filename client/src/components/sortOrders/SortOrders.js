import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import RecordCollection from '../recordBox/RecordCollection';
import Button from '../button/Button';
import RecordContext from '../../context/record/recordContext';

const SortOrders = ({ movesArr }) => {
  const [counter, setCounter] = useState(1);
  const recordContext = useContext(RecordContext);
  const { setCurrent, setMoveRecord } = recordContext;

  const prevRecord = () => {
    counter > 1 && setCounter(counter - 1);
  };

  const nextRecord = () => {
    console.log(movesArr.length);
    counter <= movesArr.length && setCounter(counter + 1);
    setCurrent(movesArr[counter].from);
    setMoveRecord(movesArr[counter].to);
  };

  const RecordCollectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const MovesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid ${(props) => props.theme.black};
    border-radius: 0.5rem;
    width: 50%;
    min-width: 17rem;
    box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.5);
    background-color: ${(props) => props.theme.white};
    margin: 1rem 0;
  `;

  return (
    <RecordCollectionContainer>
      {/* <SortOrders /> */}
      <MovesContainer>
        <Button
          outlinePrimary
          onClick={prevRecord}
          label='Previous Record'
          children={<strong>{'<'}</strong>}
          medium
        />
        <div>
          <p>
            <strong>
              Move:
              {movesArr.length > 1 &&
                movesArr[counter].from.locationPrimary}{' '}
              {movesArr.length > 1 && movesArr[counter].from.locationSecondary}{' '}
            </strong>
          </p>
          <p>
            <strong>
              To: {movesArr.length > 1 && movesArr[counter].to.locationPrimary}{' '}
              {movesArr.length > 1 && movesArr[counter].to.locationSecondary}{' '}
            </strong>
          </p>
          <p>
            <strong>Moves Remaining: {movesArr.length - counter + 1}</strong>
          </p>
        </div>
        <Button
          outlinePrimary
          onClick={nextRecord}
          label='Next Record'
          children={<strong>{'>'}</strong>}
        />
      </MovesContainer>
      <RecordCollection />
    </RecordCollectionContainer>
  );
};

export default SortOrders;
