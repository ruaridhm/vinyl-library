import React from 'react';
import Records from '../records/Records';
import RecordForm from '../records/RecordForm';
import RecordFilter from '../records/RecordFilter';

const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <RecordForm />
      </div>
      <div>
        <RecordFilter />
        <Records />
      </div>
    </div>
  );
};

export default Home;
