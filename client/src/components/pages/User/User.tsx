import React, { useContext, useEffect, useState } from 'react';
import Spinner from '../../layout/Spinner/Spinner';
import AuthContext from '../../../context/auth/AuthContext';
import RecordContext from '../../../context/record/RecordContext';
import { UserStatsContainer, UserTitle, UserStats, UserStat } from './Style';

interface communityValues {
  mostWanted: { title: string; artist: string; want: number | null };
  mostCommon: { title: string; artist: string; have: number | null };
}

const User = () => {
  const authContext = useContext(AuthContext);
  const recordContext = useContext(RecordContext);
  const { getRecords, records, loading } = recordContext;
  const { user } = authContext;
  const [averageRecordCondition, setAverageRecordCondition] = useState<string>(
    ''
  );
  const [averageSleeveCondition, setAverageSleeveCondition] = useState<string>(
    ''
  );
  const [mostPopularArtist, setMostPopularArtist] = useState<string>('');
  const [mostPopularLabel, setMostPopularLabel] = useState<string>('');
  const [communityValues, setCommunityValues] = useState<communityValues>({
    mostWanted: { title: '', artist: '', want: null },
    mostCommon: { title: '', artist: '', have: null },
  });

  useEffect(() => {
    authContext.loadUser();
    getRecords();

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const calculateAvgCondition = () => {
      const recordConditionArr = [];
      const sleeveConditionArr = [];

      records !== null &&
        records.forEach((record) => {
          switch (record.recordCondition) {
            case 'M':
              recordConditionArr.push(6);
              break;
            case 'NM' || 'M-':
              recordConditionArr.push(5);
              break;
            case 'VG+':
              recordConditionArr.push(4);
              break;
            case 'VG':
              recordConditionArr.push(3);
              break;
            case 'G' || 'G+':
              recordConditionArr.push(2);
              break;
            case 'P' || 'F':
              recordConditionArr.push(1);
              break;
            default:
              console.log('invalid or missing condition');
          }
        });

      records !== null &&
        records.forEach((record) => {
          switch (record.sleeveCondition) {
            case 'M':
              sleeveConditionArr.push(6);
              break;
            case 'NM' || 'M-':
              sleeveConditionArr.push(5);
              break;
            case 'VG+':
              sleeveConditionArr.push(4);
              break;
            case 'VG':
              sleeveConditionArr.push(3);
              break;
            case 'G' || 'G+':
              sleeveConditionArr.push(2);
              break;
            case 'P' || 'F':
              sleeveConditionArr.push(1);
              break;
            default:
              console.log('invalid or missing condition');
          }
        });

      const tempArr = [6, 2, 4, 4, 6, 2, 2, 3, 1, 3, 6, 2, 6, 3, 1, 6, 5];
      const average = (nums: Array<number>) => {
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

    const calculateMostPopular = (stat: string) => {
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

    setAverageRecordCondition(calculateAvgCondition);
    setAverageSleeveCondition(calculateAvgCondition);
    setMostPopularArtist(calculateMostPopular('artist'));
    setMostPopularLabel(calculateMostPopular('label'));

    const calculateCommunityValues = () => {
      let mostWanted = { title: '', artist: '', want: 0 };
      let mostCommon = { title: '', artist: '', have: 0 };
      records !== null &&
        records.forEach((record) => {
          if (record.want > mostWanted.want) {
            mostWanted = {
              title: record.title,
              artist: record.artist,
              want: record.want,
            };
          }

          if (record.have > mostCommon.have) {
            mostCommon = {
              title: record.title,
              artist: record.artist,
              have: record.have,
            };
          }
        });
      return { mostWanted, mostCommon };
    };

    setCommunityValues(calculateCommunityValues);
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
            <strong>Average Record condition: </strong>
            {averageRecordCondition && averageRecordCondition}
            <strong>Average Sleeve condition: </strong>
            {averageSleeveCondition && averageSleeveCondition}
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
            {communityValues &&
              `
            ${communityValues.mostWanted.title} by
            ${communityValues.mostWanted.artist} is the most wanted record with
            ${communityValues.mostWanted.want} people wanting this record.`}
          </UserStat>
          <UserStat>
            <strong>Most common record: </strong>
            {communityValues &&
              `
            ${communityValues.mostCommon.title} by
            ${communityValues.mostCommon.artist} is the most common record with
            ${communityValues.mostCommon.have} people owning this record.`}
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
