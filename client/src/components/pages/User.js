import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Spinner from '../layout/spinner';
import Img from '../../images//4263202864_237c768087_o.jpg';

import AuthContext from '../../context/auth/AuthContext';
import RecordContext from '../../context/record/recordContext';

const UserStatsContainer = styled.div`
  padding-left: 1rem;
  height: 100vh;
  z-index: 2;
  position: relative;
  opacity: 1;
  &:before {
    content: ' ';
    display: block;
    background-image: url(${Img});
    background-position: center;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    opacity: 0.2;
  }
`;
const UserTitle = styled.h1`
  margin: 0;
  z-index: 2;
  opacity: 1;
`;
const UserStats = styled.div`
  margin-left: 14rem;
  z-index: 2;
`;
const UserStat = styled.p``;

const User = () => {
  const authContext = useContext(AuthContext);
  const recordContext = useContext(RecordContext);
  const { getRecords, records, loading } = recordContext;
  const { user } = authContext;
  const [averageCondition, setAverageCondition] = useState('');
  const [mostPopularArtist, setMostPopularArtist] = useState('');
  const [mostPopularLabel, setMostPopularLabel] = useState('');

  useEffect(() => {
    authContext.loadUser();
    getRecords();

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
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

      const tempArr = [6, 2, 4, 4, 6, 2, 2, 3, 1, 3, 6, 2, 6, 3, 1, 6, 5];
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
            console.log('invalid or missing record condition');
        }
      };
      // return average(conditionArr);
      return average(tempArr);
    };

    const calculateMostPopular = (stat) => {
      const mostPopular = {};
      let winningStat;

      records !== null &&
        records.forEach((record) => {
          const currentStat = record[stat];
          mostPopular.hasOwnProperty(currentStat)
            ? (mostPopular[currentStat] += 1)
            : (mostPopular[currentStat] = 1);
        });

      if (records !== null) {
        winningStat = Object.keys(mostPopular).reduce((a, b) =>
          mostPopular[a] > mostPopular[b] ? a : b
        );
      }
      return winningStat;
    };

    setAverageCondition(calculateAvgCondition);
    setMostPopularArtist(calculateMostPopular('artist'));
    setMostPopularLabel(calculateMostPopular('label'));
  }, [records]);
  if (!loading) {
    return (
      <UserStatsContainer>
        <UserTitle>User Stats</UserTitle>
        <UserStats>
          <UserStat>
            <strong>User name: </strong>
            {user && user.name}
          </UserStat>
          <UserStat>
            <strong>Total records: </strong>
            {records && records.length}
          </UserStat>
          <UserStat>
            <strong>Estimated collection value: </strong>
          </UserStat>
          <UserStat>
            <strong>Average condition: </strong>
            {averageCondition && averageCondition}
          </UserStat>
          <UserStat>
            <strong>Most popular artist: </strong>
            {mostPopularArtist && mostPopularArtist}
          </UserStat>
          <UserStat>
            <strong>Most popular label: </strong>
            {mostPopularLabel && mostPopularLabel}
          </UserStat>
          <UserStat>
            <strong>Number of doubles: </strong>
          </UserStat>
          <UserStat>
            <strong>Most wanted record: </strong>
          </UserStat>
          <UserStat>
            <strong>Most valuable record: </strong>
          </UserStat>
        </UserStats>
      </UserStatsContainer>
    );
  } else {
    return <Spinner />;
  }
};

export default User;
