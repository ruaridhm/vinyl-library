import React, { useEffect, useContext } from 'react';
import ImageSlider from '../imageSlider/ImageSlider';
import AuthContext from '../../context/auth/AuthContext';
import RecordContext from '../../context/record/recordContext';

import './library.css';
import RecordCollection from '../recordBox/RecordCollection';

const Library = () => {
  const authContext = useContext(AuthContext);
  const recordContext = useContext(RecordContext);

  const { getRecords, records, loading, current } = recordContext;

  useEffect(() => {
    authContext.loadUser();
    getRecords();
    // eslint-disable-next-line
  }, []);

  if (records !== null && records.length > 0 && !loading) {
  }

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
        <button className='current-control-btn'>Prev. Record</button>
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
        <button>Next Record</button>
      </div>
      <RecordCollection />
    </div>
  );
};

export default Library;
