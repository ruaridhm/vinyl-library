import React, { useContext, useEffect } from 'react';
import Records from '../records/Records';
import RecordFilter from '../records/RecordFilter';
import AuthContext from '../../context/auth/AuthContext';

const Home = ({ displayAddRecord, setDisplayAddRecord }) => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <div className='home-grid'>
      <RecordFilter />
      <Records
        displayAddRecord={displayAddRecord}
        setDisplayAddRecord={setDisplayAddRecord}
      />
    </div>
  );
};

export default Home;
