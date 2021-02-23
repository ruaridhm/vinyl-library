import React, { useState, useContext, useEffect } from 'react';
import RecordCollection from '../recordBox/RecordCollection/RecordCollection';
import Button from '../button/Button';
import RecordContext from '../../context/record/RecordContext';
import useKey from '../../hooks/useKey';
import { RecordCollectionContainer, MovesContainer } from './Style';

interface SortOrdersProps {
  movesArr: Array<any>;
}

const SortOrders: React.FC<SortOrdersProps> = ({ movesArr }) => {
  const [counter, setCounter] = useState(0);
  const recordContext = useContext(RecordContext);
  const {
    records,
    loading,
    getRecords,
    setCurrent,
    setMoveRecord,
  } = recordContext;
  const [boxesLoaded, setBoxesLoaded] = useState(null);

  const boxes = {
    a: [],
    b: [],
    c: [],
    d: [],
    unboxed: [],
  };

  useEffect(() => {
    getRecords();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    //Loop through each record and assign it a box depending on its primaryLocation ( box letter)
    if (records !== null && !loading) {
      records.forEach((element) => {
        !boxes.hasOwnProperty(element.locationPrimary)
          ? boxes.unboxed.push(element)
          : boxes[element.locationPrimary].push(element);
      });
      //Sort boxes created above by secondaryPosition
      for (let key in boxes) {
        boxes[key].sort((a, b) => a.locationSecondary - b.locationSecondary);
      }
      setBoxesLoaded(boxes);

      if (boxes.a.length > 0) {
        setCurrent(boxes.a[0]);
      } else if (boxes.b.length > 0) {
        setCurrent(boxes.b[0]);
      } else if (boxes.c.length > 0) {
        setCurrent(boxes.c[0]);
      } else if (boxes.d.length > 0) {
        setCurrent(boxes.d[0]);
      } else if (boxes.unboxed.length > 0) {
        setCurrent(boxes.unboxed[0]);
      } else {
        return;
      }

      setCurrent(movesArr[counter].from);
      setMoveRecord(movesArr[counter].to);
    }
    // eslint-disable-next-line
  }, [records, loading]);

  const prevRecord = () => {
    counter >= 1 && setCounter(counter - 1);
  };

  const nextRecord = () => {
    counter < movesArr.length - 1 && setCounter(counter + 1);
  };

  //Watches counter state and when it changes update current and moveRecord state to highlight records to move on current move
  useEffect(() => {
    setCurrent(movesArr[counter].from);
    setMoveRecord(movesArr[counter].to);
    // eslint-disable-next-line
  }, [counter, movesArr]);

  useKey('ArrowLeft', prevRecord);
  useKey('ArrowRight', nextRecord);

  return (
    <RecordCollectionContainer>
      <MovesContainer>
        <Button
          outlinePrimary
          onClick={prevRecord}
          label='Previous Record'
          children={<strong>{'<'}</strong>}
          type='button'
          medium
        />
        <div>
          <p>
            <strong>
              Move:{' '}
              {movesArr.length > 1 && movesArr[counter].from.locationPrimary}{' '}
              {movesArr.length > 1 && movesArr[counter].from.locationSecondary}{' '}
            </strong>
            <span>{movesArr[counter].from.title}</span>
          </p>
          <p>
            <strong>
              To: {movesArr.length > 1 && movesArr[counter].to.locationPrimary}{' '}
              {movesArr.length > 1 && movesArr[counter].to.locationSecondary}{' '}
            </strong>
            <span>{movesArr[counter].to.title}</span>
          </p>
          <p>
            <strong>Moves Remaining: {movesArr.length - counter - 1}</strong>
          </p>
          {movesArr.length - counter - 1 === 0 && (
            <>
              <Button solidSuccess medium label='Finish' type='button' />

              <Button
                solidPrimary
                medium
                label='Sort Digitally'
                type='button'
              />
            </>
          )}
        </div>
        <Button
          type='button'
          outlinePrimary
          onClick={nextRecord}
          label='Next Record'
          children={<strong>{'>'}</strong>}
          medium
        />
      </MovesContainer>
      {boxesLoaded && <RecordCollection boxes={boxesLoaded} />}
    </RecordCollectionContainer>
  );
};

export default SortOrders;
