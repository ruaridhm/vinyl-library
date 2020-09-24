import React, { useContext, useEffect } from 'react';

import AuthContext from '../../context/auth/AuthContext';

const User = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>User name: </h1>
      <p>Total records: </p>
      <p>Estimated collection value: </p>
      <p>Average condition: </p>
      <p>Genres: </p>
      <p>Most popular genre: </p>
      <p>Number of doubles: </p>
      <p>Most wanted record: </p>
      <p>Most valuable record: </p>
    </div>
  );
};

export default User;
