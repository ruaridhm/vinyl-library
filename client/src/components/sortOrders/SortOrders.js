import React, { useState } from 'react';
import RecordCollection from '../recordBox/RecordCollection';
import Button from '../button/Button';

const SortOrders = ({ movesArr }) => {
  const [counter, setCounter] = useState(1);

  const prevRecord = () => {
    counter > 1 && setCounter(counter - 1);
  };

  const nextRecord = () => {
    console.log(movesArr.length);
    counter <= movesArr.length && setCounter(counter + 1);
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
