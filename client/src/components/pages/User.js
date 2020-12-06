import React, { useContext, useEffect } from 'react';
import Spinner from '../layout/spinner';
import './user.css';
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

  const calculateAvgCondition = () => {
    const conditionArr = [];

    records !== null &&
      records.forEach((record) => {
        switch (record.condition) {
          case 'M':
            conditionArr.push(6);
            break;
          case 'NM' || 'M-':
            conditionArr.push(5);
            break;
          case 'VG+':
            conditionArr.push(4);
            break;
          case 'VG':
            conditionArr.push(3);
            break;
          case 'G' || 'G+':
            conditionArr.push(2);
            break;
          case 'P' || 'F':
            conditionArr.push(1);
            break;
          default:
            console.log('invalid or missing condition');
        }
      });

    const average = (nums) => {
      const avg = Math.round(nums.reduce((a, b) => a + b) / nums.length);

      switch (avg) {
        case 6:
          return 'Mint';
        case 5:
          return 'Near Mint';
        case 4:
          return 'Very Good +';
        case 3:
          return 'Very Good';

        case 2:
          return 'Good';
        case 1:
          return 'Poor';
        default:
          console.log('invalid or missing condition');
      }
    };
    return average(conditionArr);
  };

  const calculateMostPopularArtist = () => {
    const mostPopular = {};

    records !== null &&
      records.forEach((record) => {
        const currentArtist = record.artist;
        mostPopular.hasOwnProperty(currentArtist)
          ? (mostPopular[currentArtist] += 1)
          : (mostPopular[currentArtist] = 1);
      });
    if (records !== null) {
      let winningGenre = Object.keys(mostPopular).reduce((a, b) =>
        mostPopular[a] > mostPopular[b] ? a : b
      );
    }
  };

  if (!loading) {
    return (
      <div className='user-stats-container'>
        <h1 className='user-title'>User Stats</h1>
        <div className='user-stats'>
          <p className='user-stat'>
            <strong>User name: </strong>
            {user && user.name}
          </p>
          <p className='user-stat'>
            <strong>Total records: </strong>
            {records && records.length}
          </p>
          <p className='user-stat'>
            <strong>Estimated collection value: </strong>
          </p>
          <p className='user-stat'>
            <strong>Average condition: </strong>
          </p>
          <p className='user-stat'>
            <strong>Most popular artist: </strong>
          </p>
          <p className='user-stat'>
            <strong>Number of doubles: </strong>
          </p>
          <p className='user-stat'>
            <strong>Most wanted record: </strong>
          </p>
          <p className='user-stat'>
            <strong>Most valuable record: </strong>
          </p>
          <p className='user-stat'>
            <strong>Most played record: </strong>
          </p>
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default User;
