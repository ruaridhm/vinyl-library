import React, { useContext, useEffect } from 'react';
import Records from '../records/Records';
import RecordForm from '../records/RecordForm';
import RecordFilter from '../records/RecordFilter';
import AuthContext from '../../context/auth/AuthContext';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
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
