import React, { useContext, useEffect, useState } from 'react';
import Records from '../../records/Records/Records';
import RecordFilter from '../../records/RecordFilter/RecordFilter';
import AuthContext from '../../../context/auth/AuthContext';
import Button from '../../button/Button';
import RecordForm from '../../records/RecordForm/RecordForm';
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

const Home = () => {
  const authContext = useContext(AuthContext);
  const [displayAddRecord, setDisplayAddRecord] = useState<boolean>(false);

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
              label={<FontAwesomeIcon icon={faPlus} />}
              type='button'
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
              label={<FontAwesomeIcon icon={faPlus} />}
              type='button'
            />
            <AddRecordButtonDescription>Add Record</AddRecordButtonDescription>
          </AddRecordButtonContainer>
        </AddRecordButtonWrapper>
      </HomeGrid>
      <Records setDisplayAddRecord={setDisplayAddRecord} />
    </HomeContainer>
  );
};

export default Home;
