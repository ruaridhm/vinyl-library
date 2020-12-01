import React, { useState, useContext } from 'react';
import RecordCollection from '../recordBox/RecordCollection';
import Button from '../button/Button';
import RecordContext from '../../context/record/recordContext';

const SortOrders = ({ movesArr }) => {
  const [counter, setCounter] = useState(1);
  const recordContext = useContext(RecordContext);
  const { current, setCurrent, moveRecord, setMoveRecord } = recordContext;

  const prevRecord = () => {
    counter > 1 && setCounter(counter - 1);
  };

  const nextRecord = () => {
    console.log(movesArr.length);
    counter <= movesArr.length && setCounter(counter + 1);
    setCurrent(movesArr[counter].from);
    setMoveRecord(movesArr[counter].to);
  };
  return (
    <div className='record-collection-container'>
      {/* <SortOrders /> */}
      <div className='moves-container'>
        <Button buttonStyle='btn--primary--outline' onClick={prevRecord}>
          <strong>{'<'}</strong>
        </Button>
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
        <Button buttonStyle='btn--primary--outline' onClick={nextRecord}>
          <strong>{'>'}</strong>
        </Button>
      </div>
      <RecordCollection />
    </div>
  );
};

export default SortOrders;
