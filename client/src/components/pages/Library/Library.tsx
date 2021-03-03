import React, { useEffect, useContext, useState } from 'react';
import ImageSlider from '../../imageSlider/ImageSlider';
import RecordContext from '../../../context/record/RecordContext';
import AuthContext from '../../../context/auth/AuthContext';
import Button from '../../button/Button';
import RecordCollection from '../../recordBox/RecordCollection/RecordCollection';
import Spinner from '../../layout/Spinner/Spinner';
import useKey from '../../../hooks/useKey';

import {
  SpinnerContainer,
  LibraryContainer,
  ImageContainer,
  CurrentRecordDetailsContainer,
  CurrentRecordDetails,
} from './Style';
import { RecordInterface } from '../../records/RecordItem/RecordItem';

export interface boxesInterface {
  a: Array<RecordInterface> | [];
  b: RecordInterface[] | [];
  c: RecordInterface[] | [];
  d: RecordInterface[] | [];
  unboxed: RecordInterface[] | any[]; //TODO remove any and allow for empty array and never type
}

const Library: React.FC = () => {
  const recordContext = useContext(RecordContext);
  const authContext = useContext(AuthContext);

  const { getRecords, records, loading, current, setCurrent } = recordContext;

  const [boxesLoaded, setBoxesLoaded] = useState<boxesInterface | null>(null);

  const boxes: boxesInterface = {
    a: [],
    b: [],
    c: [],
    d: [],
    unboxed: [],
  };

  useEffect(() => {
    authContext.loadUser();
    getRecords();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    //Loop through each record and assign it a box depending on its primaryLocation ( box letter)
    if (records !== null && !loading) {
      records.forEach((element) => {
        if (!boxes.hasOwnProperty(element.locationPrimary)) {
          boxes.unboxed.push(element);
        } else {
          boxes[element.locationPrimary].push(element);
        }
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
      //
    }
    // eslint-disable-next-line
  }, [records, loading]);

  const findNextRecord = () => {
    const currentIndex = boxesLoaded[`${current.locationPrimary}`].findIndex(
      (element) => element._id === current._id
    );
    if (boxesLoaded[`${current.locationPrimary}`][currentIndex + 1]) {
      setCurrent(boxesLoaded[`${current.locationPrimary}`][currentIndex + 1]);
    }
  };

  //Get the previous record before current and assign it to current
  const findPreviousRecord = () => {
    const currentIndex = boxesLoaded[`${current.locationPrimary}`].findIndex(
      (element) => element._id === current._id
    );
    if (boxesLoaded[`${current.locationPrimary}`][currentIndex - 1]) {
      setCurrent(boxesLoaded[`${current.locationPrimary}`][currentIndex - 1]);
    }
  };

  useKey('ArrowRight', findNextRecord);
  useKey('ArrowLeft', findPreviousRecord);

  return loading ? (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  ) : (
    <LibraryContainer>
      <ImageContainer>
        <ImageSlider
          coverFront={current === null ? '' : current.coverFront}
          coverBack={current === null ? '' : current.coverBack}
          coverLp={current === null ? '' : current.coverLp}
        />
      </ImageContainer>
      <CurrentRecordDetailsContainer>
        <Button
          onClick={findPreviousRecord}
          label='Previous Record'
          type='button'
          children='Prev'
          solidSuccess
          medium
        />

        <CurrentRecordDetails>
          <p>{current === null ? 'Title: ' : current.title}</p>
          <p>{current === null ? 'Artist: ' : current.artist}</p>
          <p>
            {current === null
              ? 'Location: '
              : `Box: ${current.locationPrimary},
              Index: ${current.locationSecondary}`}
          </p>
        </CurrentRecordDetails>
        <Button
          onClick={findNextRecord}
          label='Next Record'
          type='button'
          children='Next'
          solidSuccess
          medium
        />
      </CurrentRecordDetailsContainer>
      {/* if the line below is passed in the unpopulated prop of boxes it returns an error. */}
      {boxesLoaded && <RecordCollection boxes={boxesLoaded} />}
    </LibraryContainer>
  );
};

export default Library;
