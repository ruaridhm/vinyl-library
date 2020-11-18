import React, { useState, useContext, useEffect } from 'react';
import RecordContext from '../../context/record/recordContext';
import Button from '../button/Button';
import DiscogsBtn2 from '../discogs/DiscogsBtn2';
import TextField from '../text field/TextField';
import './RecordForm.css';

const Step1 = ({ title, artist, label, releaseDate, onChange }) => {
  return (
    <>
      <TextField
        textFieldSize='textField--medium'
        textFieldStyle='textField--outline'
        type='text'
        placeholder='Title'
        name='title'
        value={title}
        onChange={onChange}
      />
      <TextField
        textFieldSize='textField--medium'
        textFieldStyle='textField--outline'
        type='text'
        placeholder='Artist'
        name='artist'
        value={artist}
        onChange={onChange}
      />
      <TextField
        textFieldSize='textField--medium'
        textFieldStyle='textField--outline'
        type='text'
        placeholder='Label'
        name='label'
        value={label}
        onChange={onChange}
      />
      <TextField
        textFieldSize='textField--medium'
        textFieldStyle='textField--outline'
        type='text'
        placeholder='Release Date'
        name='releaseDate'
        value={releaseDate}
        onChange={onChange}
      />
    </>
  );
};

const Step2 = ({
  condition,
  country,
  locationPrimary,
  locationSecondary,
  onChange,
}) => {
  return (
    <>
      <TextField
        textFieldSize='textField--medium'
        textFieldStyle='textField--outline'
        type='text'
        placeholder='Condition'
        name='condition'
        value={condition}
        onChange={onChange}
      />
      <TextField
        textFieldSize='textField--medium'
        textFieldStyle='textField--outline'
        type='text'
        placeholder='Country'
        name='country'
        value={country}
        onChange={onChange}
      />
      <TextField
        textFieldSize='textField--medium'
        textFieldStyle='textField--outline'
        type='text'
        placeholder='Location Primary'
        name='locationPrimary'
        value={locationPrimary}
        onChange={onChange}
      />
      <TextField
        textFieldSize='textField--medium'
        textFieldStyle='textField--outline'
        type='text'
        placeholder='Location Secondary'
        name='locationSecondary'
        value={locationSecondary}
        onChange={onChange}
      />
    </>
  );
};

const Step3 = ({
  catalogNumber,
  barcode,
  coverFront,
  coverBack,
  coverLp,
  onChange,
}) => {
  return (
    <>
      <TextField
        textFieldSize='textField--medium'
        textFieldStyle='textField--outline'
        type='text'
        placeholder='Catalog Number'
        name='catalogNumber'
        value={catalogNumber}
        onChange={onChange}
      />

      <TextField
        textFieldSize='textField--medium'
        textFieldStyle='textField--outline'
        type='text'
        placeholder='Barcode'
        name='barcode'
        value={barcode}
        onChange={onChange}
      />
      <TextField
        textFieldSize='textField--medium'
        textFieldStyle='textField--outline'
        type='url'
        placeholder='Cover Front'
        name='coverFront'
        value={coverFront}
        onChange={onChange}
      />
      <TextField
        textFieldSize='textField--medium'
        textFieldStyle='textField--outline'
        type='url'
        placeholder='Cover Back'
        name='coverBack'
        value={coverBack}
        onChange={onChange}
      />
      <TextField
        textFieldSize='textField--medium'
        textFieldStyle='textField--outline'
        type='url'
        placeholder='Cover Lp'
        name='coverLp'
        value={coverLp}
        onChange={onChange}
      />
    </>
  );
};

const RecordForm = ({ displayAddRecord, setDisplayAddRecord }) => {
  const recordContext = useContext(RecordContext);

  const { addRecord, current, clearCurrent, updateRecord } = recordContext;

  useEffect(() => {
    if (current !== null) {
      setRecord(current);
    } else {
      setRecord({
        title: '',
        artist: '',
        label: '',
        catalogNumber: '',
        releaseDate: '',
        country: '',
        coverFront: '',
        coverBack: '',
        coverLp: '',
        condition: '',
        barcode: '',
        locationPrimary: '',
        locationSecondary: '',
      });
    }
  }, [recordContext, current]);

  const [record, setRecord] = useState({
    title: '',
    artist: '',
    label: '',
    catalogNumber: '',
    releaseDate: '',
    country: '',
    coverFront: '',
    coverBack: '',
    coverLp: '',
    condition: '',
    barcode: '',
    locationPrimary: '',
    locationSecondary: '',
  });

  const [currentStep, setCurrentStep] = useState(1);

  const {
    title,
    artist,
    label,
    catalogNumber,
    releaseDate,
    country,
    coverFront,
    coverBack,
    coverLp,
    condition,
    barcode,
    locationPrimary,
    locationSecondary,
  } = record;

  const onChange = (e) => {
    setRecord({ ...record, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (current === null) {
      addRecord(record);
    } else {
      updateRecord(record);
      clearCurrent();
    }
  };

  const clearAll = () => {
    clearCurrent();
  };

  const nextStep = () => {
    if (currentStep <= 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep >= 2) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className='record-form-modal-container'>
      <form onSubmit={onSubmit} className='form'>
        <div
          className='record-form-modal-close-btn'
          onClick={() => {
            setDisplayAddRecord(!displayAddRecord);
          }}
        >
          <i className='fas fa-times record-form-modal-close-btn-icon'></i>
        </div>
        <h2>{current ? 'Edit Record' : 'Add Record'}</h2>

        {currentStep === 1 ? (
          <Step1
            title={title}
            artist={artist}
            label={label}
            releaseDate={releaseDate}
            onChange={onChange}
          />
        ) : currentStep === 2 ? (
          <Step2
            condition={condition}
            country={country}
            locationPrimary={locationPrimary}
            locationSecondary={locationSecondary}
            onChange={onChange}
          />
        ) : currentStep === 3 ? (
          <Step3
            catalogNumber={catalogNumber}
            barcode={barcode}
            coverFront={coverFront}
            coverBack={coverBack}
            coverLp={coverLp}
            onChange={onChange}
          />
        ) : null}
        <div className='form-button-container'>
          <Button
            type='button'
            buttonSize='btn--small'
            buttonStyle='btn--primary--solid'
            onClick={prevStep}
          >
            Previous
          </Button>
          <Button
            type='button'
            buttonSize='btn--small'
            buttonStyle='btn--primary--solid'
            onClick={nextStep}
          >
            Next
          </Button>
        </div>
        <div className='form-button-container'>
          <DiscogsBtn2 />
          <Button
            type='submit'
            buttonSize='btn--medium'
            buttonStyle='btn--success--solid'
          >
            {current ? 'Update Record' : 'Add Record'}
          </Button>
        </div>
        {current && (
          <div>
            <Button
              buttonSize='btn--medium'
              buttonStyle='btn--success--solid'
              type='button'
              onClick={clearAll}
            >
              Clear
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default RecordForm;
