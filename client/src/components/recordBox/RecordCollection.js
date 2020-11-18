import React, { useContext, useEffect } from 'react';
import RecordCollectionRow from './RecordCollectionRow';
import RecordContext from '../../context/record/recordContext';

const RecordCollection = () => {
  const recordContext = useContext(RecordContext);

  const { getRecords, records, loading } = recordContext;

  useEffect(() => {
    getRecords();
    // eslint-disable-next-line
  }, []);

  const boxes = {
    a: [],
    b: [],
    c: [],
    d: [],
    unboxed: [],
  };
  //Loop through each record and assign it a Collection Row
  //if (!loading && records !== null) {
  //create arrays of elements with boxLetter and _id
  if (records !== null && !loading) {
    records.forEach((element) => {
      if (!boxes.hasOwnProperty(element.locationPrimary)) {
        console.log(
          `${element.title}'s box (${element.locationPrimary}) does not exist`
        );
        boxes.unboxed.push(element);
      } else {
        boxes[element.locationPrimary].push(element);
      }
    });
  }

  return (
    <div className='record-collection'>
      <RecordCollectionRow boxLetters={[boxes.a, boxes.b]} />
      <RecordCollectionRow boxLetters={[boxes.c, boxes.d]} />
    </div>
  );
};

export default RecordCollection;
