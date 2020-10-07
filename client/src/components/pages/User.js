import React, { useContext, useEffect } from 'react';
import Spinner from '../layout/spinner';

import AuthContext from '../../context/auth/AuthContext';
import RecordContext from '../../context/record/recordContext';

const User = () => {
  const authContext = useContext(AuthContext);
  const recordContext = useContext(RecordContext);
  const { getRecords, records, loading } = recordContext;
  const { user } = authContext;

  useEffect(() => {
    authContext.loadUser();
    getRecords();
    // eslint-disable-next-line
  }, []);

  if (!loading) {
    return (
      <div>
        <h1 className='user-title'>User Stats</h1>
        <p className='user-stat'>User name: {user && user.name}</p>
        <p className='user-stat'>Total records: {records && records.length}</p>
        <p className='user-stat'>Estimated collection value: </p>
        <p className='user-stat'>Average condition: </p>
        <p className='user-stat'>Genres: </p>
        <p className='user-stat'>Most popular genre: </p>
        <p className='user-stat'>Number of doubles: </p>
        <p className='user-stat'>Most wanted record: </p>
        <p className='user-stat'>Most valuable record: </p>
        <p className='user-stat'>Most played record: </p>
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default User;
