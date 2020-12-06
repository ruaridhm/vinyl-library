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
  const [selectedRecord, setSelectedRecord] = useState();
  const { getRecords, records, loading, current, setCurrent } = recordContext;

  useEffect(() => {
    authContext.loadUser();
    getRecords();
    // eslint-disable-next-line
  }, []);

  if (records) {
    //Get the primary and secondary position of every record in recordPositionArray
    const getRecordPositions = () => {
      let recordPositionArray = [];
      records.forEach((record) => {
        recordPositionArray.push({
          primary: record.locationPrimary,
          secondary: record.locationSecondary,
        });
      });
      return recordPositionArray;
    };
    //Seperate recordPositionArray into Boxes by locationPrimary and sort them in descending order with locationSecondary
    const separateAndSort = (box, recordPositionArray) => {
      return recordPositionArray
        .filter((item) => item.primary === box)
        .sort((a, b) => {
          return a.secondary - b.secondary;
        });
    };
    let recordPositionArray = getRecordPositions();

    const boxA = separateAndSort('a', recordPositionArray);
    const boxB = separateAndSort('b', recordPositionArray);
    const boxC = separateAndSort('c', recordPositionArray);
    const boxD = separateAndSort('d', recordPositionArray);
    const boxUnsorted = separateAndSort('', recordPositionArray);
    //Find the first record in the first box that has records in it
    const findFirst = () => {
      if (boxA.length >= 1) {
        return ['a', boxA[0].secondary];
      } else if (boxB.length >= 1) {
        return ['b', boxB[0].secondary];
      } else if (boxC.length >= 1) {
        return ['c', boxC[0].secondary];
      } else if (boxD.length >= 1) {
        return ['d', boxD[0].secondary];
      } else if (boxUnsorted.length >= 1) {
        return ['', boxUnsorted[0].secondary];
      } else {
        console.log('All record boxes are empty, No records found');
      }
    };
    // set the first record to selectedRecord state on page load

    setSelectedRecord('1');

    //Get the next record after current and assign it to current
    const findNextRecord = (current) => {
      setCurrent((c) => c + 1);
    };

    //Get the previous record before current and assign it to current
    const findPreviousRecord = (current) => {};
  }

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
            coverBack={current === null ? '' : current.coverBack}
            coverLp={current === null ? '' : current.coverLp}
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
