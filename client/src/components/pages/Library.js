import React, { useEffect, useContext, useState } from 'react';
import ImageSlider from '../imageSlider/ImageSlider';
import RecordContext from '../../context/record/recordContext';

import AuthContext from '../../context/auth/AuthContext';
import Button from '../button/Button';
import './library.css';
import RecordCollection from '../recordBox/RecordCollection';
import Spinner from '../layout/spinner';

const Library = () => {
  const recordContext = useContext(RecordContext);
  const authContext = useContext(AuthContext);

  const { getRecords, records, loading, current, setCurrent } = recordContext;

  const [boxesLoaded, setBoxesLoaded] = useState(null);

  const boxes = {
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

  return loading ? (
    <div className='spinner-container'>
      <Spinner />
    </div>
  ) : (
    <div className='library-container'>
      <div className='image-slider'>
        <ImageSlider
          coverFront={current === null ? '' : current.coverFront}
          coverBack={current === null ? '' : current.coverBack}
          coverLp={current === null ? '' : current.coverLp}
        />
      </div>
      <div className='current-record-details-container'>
        <Button onClick={findPreviousRecord} label='Previous Record'>
          Prev
        </Button>
        <div className='current-record-details'>
          <p>{current === null ? 'Title: ' : current.title}</p>
          <p>{current === null ? 'Artist: ' : current.artist}</p>
          <p>
            {current === null
              ? 'Location: '
              : `Box: ${current.locationPrimary},
              Index: ${current.locationSecondary}`}
          </p>
        </div>
        <Button onClick={findNextRecord} label='Next Record'>
          Next
        </Button>
      </div>
      {/* if the line below is passed in the unpopulated prop of boxes it returns an error. */}
      {boxesLoaded && <RecordCollection boxes={boxesLoaded} />}
    </div>
  );
};

export default Library;
