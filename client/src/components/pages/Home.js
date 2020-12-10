import React, { useContext, useEffect, useState } from 'react';
import Records from '../records/Records';
import RecordFilter from '../records/RecordFilter';
import AuthContext from '../../context/auth/AuthContext';
import Button from '../button/Button';
import RecordForm from '../records/RecordForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const authContext = useContext(AuthContext);
  const [displayAddRecord, setDisplayAddRecord] = useState(false);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='home-grid'>
      {displayAddRecord ? (
        <RecordForm
          displayAddRecord={displayAddRecord}
          setDisplayAddRecord={setDisplayAddRecord}
        />
      ) : null}
      <div className='home-controls-container'>
        <div className='filter-container'>
          <RecordFilter />
        </div>
        <div className='add-record-button-container'>
          <Button
            className='add-record-button'
            onClick={() => setDisplayAddRecord(!displayAddRecord)}
            children={<FontAwesomeIcon icon={faPlus} />}
            type='button'
            buttonSize='btn--medium'
            buttonStyle='btn--primary--success--circle'
            label='Add Record'
          ></Button>
          <p className='add-record-button-description'>Add Record</p>
        </div>
      </div>
      <Records
        displayAddRecord={displayAddRecord}
        setDisplayAddRecord={setDisplayAddRecord}
      />
    </div>
  );
};

export default Home;
