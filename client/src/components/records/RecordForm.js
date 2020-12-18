import styled from 'styled-components';
import React, { useState, useContext, useEffect } from 'react';
import RecordContext from '../../context/record/recordContext';
import Button from '../button/Button';
import DiscogsBtn2 from '../discogs/DiscogsBtn2';
import TextField from '../text field/TextField';
import ResultOption from '../resultOption/ResultOption.js';

const RecordFormContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
`;

const RecordFormForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${(props) => props.theme.black};
  border-radius: 0.5rem;
  width: 22rem;
  background-color: ${(props) => props.theme.white};
  padding-bottom: 1em;
  height: fit-content;
  box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.5);
  margin: 1.5em auto 1em auto;
`;
const RecordFormCloseButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
const RecordFormButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
const RecordFormCloseButtonIcon = styled.i`
  padding: 0.5em;
  cursor: pointer;
  &:hover {
    transform: rotateX(180deg);
    transition: 1s;
  }
`;

const RecordFormStepButtonContainer = styled.div``;

const RecordFormStepButton = styled.button`
  border-radius: 50%;
  height: 1rem;
  width: 1rem;
  border: none;
  margin: 1rem;
  background-color: ${(props) => props.theme.backgroundLight};
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  &:active {
    background-color: ${(props) => props.theme.darkGrey};
  }
`;

const DiscogsMultiResult = styled(RecordFormForm)`
  width: fit-content;
  padding: 1rem;
`;

const Step1 = ({ title, artist, label, releaseDate, onChange }) => {
  return (
    <>
      <TextField
        medium
        outline
        type='text'
        placeholder='Title'
        name='title'
        value={title}
        onChange={onChange}
      />
      <TextField
        medium
        outline
        type='text'
        placeholder='Artist'
        name='artist'
        value={artist}
        onChange={onChange}
      />
      <TextField
        medium
        outline
        type='text'
        placeholder='Label'
        name='label'
        value={label}
        onChange={onChange}
      />
      <TextField
        medium
        outline
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
        medium
        outline
        type='text'
        placeholder='Condition'
        name='condition'
        value={condition}
        onChange={onChange}
      />
      <TextField
        medium
        outline
        type='text'
        placeholder='Country'
        name='country'
        value={country}
        onChange={onChange}
      />
      <TextField
        medium
        outline
        type='text'
        placeholder='Location Primary'
        name='locationPrimary'
        value={locationPrimary}
        onChange={onChange}
      />
      <TextField
        medium
        outline
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
  genre,
  style,
  onChange,
}) => {
  return (
    <>
      <TextField
        medium
        outline
        type='text'
        placeholder='Catalog Number'
        name='catalogNumber'
        value={catalogNumber}
        onChange={onChange}
      />

      <TextField
        medium
        outline
        type='text'
        placeholder='Barcode'
        name='barcode'
        value={barcode}
        onChange={onChange}
      />
      <TextField
        medium
        outline
        type='url'
        placeholder='Cover Front'
        name='coverFront'
        value={coverFront}
        onChange={onChange}
      />
      <TextField
        medium
        outline
        type='text'
        placeholder='Genre'
        name='genre'
        value={genre}
        onChange={onChange}
      />
      <TextField
        medium
        outline
        type='text'
        placeholder='Style'
        name='style'
        value={style}
        onChange={onChange}
      />
    </>
  );
};

const RecordForm = ({ displayAddRecord, setDisplayAddRecord }) => {
  const recordContext = useContext(RecordContext);
  const [discogsResult, setDiscogsResult] = useState([]);
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
        want: '',
        have: '',
        genre: '',
        style: '',
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
    want: '',
    have: '',
    genre: '',
    style: '',
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
    want,
    have,
    genre,
    style,
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

  return (
    <RecordFormContainer>
      {discogsResult.length <= 1 && (
        <RecordFormForm onSubmit={onSubmit}>
          <RecordFormCloseButton
            onClick={() => {
              setDisplayAddRecord(!displayAddRecord);
            }}
          >
            <RecordFormCloseButtonIcon className='fas fa-times'></RecordFormCloseButtonIcon>
          </RecordFormCloseButton>
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
              genre={genre}
              style={style}
              onChange={onChange}
            />
          ) : null}
          <RecordFormStepButtonContainer>
            <RecordFormStepButton
              onClick={() => {
                setCurrentStep(1);
              }}
              type='button'
              aria-label='Form Step 1'
            />
            <RecordFormStepButton
              onClick={() => {
                setCurrentStep(2);
              }}
              type='button'
              aria-label='Form Step 2'
            />
            <RecordFormStepButton
              onClick={() => {
                setCurrentStep(3);
              }}
              type='button'
              aria-label='Form Step 3'
            />
          </RecordFormStepButtonContainer>
          <RecordFormButtonContainer>
            <DiscogsBtn2
              discogsResult={discogsResult}
              setDiscogsResult={setDiscogsResult}
            />
            <Button
              type='submit'
              small
              solidSuccess
              children={current ? 'Update Record' : 'Add Record'}
            />
          </RecordFormButtonContainer>
          {current && (
            <div>
              <Button
                medium
                solidSuccess
                type='button'
                onClick={clearAll}
                children='Clear'
              />
            </div>
          )}
        </RecordFormForm>
      )}
      {discogsResult.length > 1 && (
        <DiscogsMultiResult>
          <h2>Multiple results found</h2>
          <h3>Please select desired result</h3>
          <ResultOption
            data={discogsResult}
            record={record}
            setRecord={setRecord}
            setDiscogsResult={setDiscogsResult}
          />
        </DiscogsMultiResult>
      )}
    </RecordFormContainer>
  );
};

export default RecordForm;
