import React, { useEffect, useContext } from 'react';
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

  useEffect(() => {
    authContext.loadUser();
    getRecords();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      <div className='spinner-container'>
        <Spinner />
      </div>
    );
  } else {
    const onClickChangeCurrentBtn = (direction) => {
      const findFirst = (records) => {
        return (
          records.locationPrimary === 'a' && records.locationSecondary === '1'
        );
      };
      let firstRecord = records.find(findFirst);

      const findNext = (records) => {
        const currentBox = current.locationPrimary;

        return (
          records.locationPrimary === currentBox &&
          parseInt(records.locationSecondary) ===
            parseInt(current.locationSecondary) + 1
        );
      };
      const findPrev = (records) => {
        const currentBox = current.locationPrimary;
        return (
          records.locationPrimary === currentBox &&
          parseInt(records.locationSecondary) ===
            parseInt(current.locationSecondary) - 1
        );
      };

      if (current === null) {
        setCurrent(firstRecord);
      } else if (direction === 'next') {
        if (records.find(findNext) === undefined) {
          console.log('reached end');
        } else {
          setCurrent(records.find(findNext));
        }
      } else if (direction === 'prev') {
        if (records.find(findPrev) === undefined) {
          console.log('reached start');
        } else {
          setCurrent(records.find(findPrev));
        }
      }
    };

    return (
      <div className='library-container'>
        <div className='image-slider'>
          <ImageSlider
            coverFront={current === null ? '' : current.coverFront}
            coverBack={current === null ? '' : current.coverFront}
            coverLp={current === null ? '' : current.coverFront}
          />
        </div>
        <div className='current-record-details-container'>
          <Button
            onClick={() => {
              onClickChangeCurrentBtn('prev');
            }}
          >
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
          <Button
            onClick={() => {
              onClickChangeCurrentBtn('next');
            }}
          >
            Next
          </Button>
        </div>
        <RecordCollection />
      </div>
    );
  }
};

export default Library;
