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
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Spacer = styled.div`
  width: 22rem;
  padding: 0.5em;
  margin: 0.5em;
  @media (max-width: 1170px) {
    display: none;
  }
`;

const HomeFilterContainer = styled.div`
  width: 22rem;
  padding: 0.5em;
  margin: 0.5em;
  @media (max-width: 785px) {
    display: none;
  }
`;

const MobileFilterContainer = styled(HomeFilterContainer)`
  @media (max-width: 785px) {
    display: block;
  }
`;

const AddRecordButtonWrapper = styled.div`
  width: 22rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
  margin: 0.5em;
  @media (max-width: 785px) {
    display: none;
  }
`;

const MobileControlsContainer = styled.div`
  display: none;

  @media (max-width: 785px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const MobilRecordFilterContainer = styled.div``;

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
        {true && (
          <MobileControlsContainer className='MobileControlsContainer'>
            <MobileFilterContainer>
              <MobilRecordFilterContainer>
                <RecordFilter />
              </MobilRecordFilterContainer>
            </MobileFilterContainer>
            <Button
              medium
              circleSuccess
              onClick={() => setDisplayAddRecord(!displayAddRecord)}
              children={<FontAwesomeIcon icon={faPlus} />}
              type='button'
              label='Add Record'
            />
          </MobileControlsContainer>
        )}
        <Spacer />
        <HomeFilterContainer>
          <RecordFilter />
        </HomeFilterContainer>
        <AddRecordButtonWrapper>
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
        </AddRecordButtonWrapper>
      </HomeGrid>
      <Records
        displayAddRecord={displayAddRecord}
        setDisplayAddRecord={setDisplayAddRecord}
      />
    </HomeContainer>
  );
};

export default Home;
