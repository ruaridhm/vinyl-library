import React, { useContext, useEffect, useState } from 'react';
import Records from '../records/Records';
import RecordFilter from '../records/RecordFilter';
import AuthContext from '../../context/auth/AuthContext';
import Button from '../button/Button';
import RecordForm from '../records/RecordForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {
  HomeContainer,
  HomeGrid,
  Spacer,
  HomeFilterContainer,
  MobileFilterContainer,
  AddRecordButtonWrapper,
  MobileControlsContainer,
  MobileRecordFilterContainer,
  AddRecordButtonContainer,
  AddRecordButtonDescription,
} from './Style';

const Home: React.FC = () => {
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
              <MobileRecordFilterContainer>
                <RecordFilter />
              </MobileRecordFilterContainer>
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
