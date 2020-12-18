import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Records from '../records/Records';
import RecordFilter from '../records/RecordFilter';
import AuthContext from '../../context/auth/AuthContext';
import Button from '../button/Button';
import RecordForm from '../records/RecordForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HomeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
`;

const HomeFilterContainer = styled.div`
  grid-column: 2/4;
`;

const AddRecordButtonContainer = styled.div`
  width: 50%;
  margin: auto;
  grid-column: 4/5;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5em;
  padding: 0.5em;
  margin: 0.5em;
  box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.5);
  background-color: $white;
  border: 1px solid $black;
  margin-top: 1.1em;
  height: fit-content;
`;

const AddRecordButtonDescription = styled.p`
  margin: 0;
  text-align: center;
`;

const Home = () => {
  const authContext = useContext(AuthContext);
  const [displayAddRecord, setDisplayAddRecord] = useState(false);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <HomeContainer>
      {displayAddRecord ? (
        <RecordForm
          displayAddRecord={displayAddRecord}
          setDisplayAddRecord={setDisplayAddRecord}
        />
      ) : null}
      <HomeGrid>
        <HomeFilterContainer>
          <RecordFilter />
        </HomeFilterContainer>
        <AddRecordButtonContainer>
          <Button
            medium
            circleSuccess
            onClick={() => setDisplayAddRecord(!displayAddRecord)}
            children={<FontAwesomeIcon icon={faPlus} />}
            type='button'
            label='Add Record'
          />
          <AddRecordButtonDescription>Add Record</AddRecordButtonDescription>
        </AddRecordButtonContainer>
      </HomeGrid>
      <Records
        displayAddRecord={displayAddRecord}
        setDisplayAddRecord={setDisplayAddRecord}
      />
    </HomeContainer>
  );
};

export default Home;
