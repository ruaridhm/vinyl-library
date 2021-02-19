import styled from 'styled-components';
import React, { useState, useContext, useEffect } from 'react';
import RecordContext from '../../context/record/recordContext';
import Button from '../button/Button';
import DiscogsBtn from '../discogs/DiscogsBtn';
import TextField from '../text field/TextField';
import CheckBox from '../checkbox/CheckBox';
import ResultOption from '../resultOption/ResultOption.js';
import useKey from '../../hooks/useKey';
import Rating from '../rating/Rating.tsx';

const RecordFormContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
`;

const FormHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const IconContainer = styled.div`
  height: 32px;
  width: 32px;
`;

const FormHeaderText = styled.h2`
  margin-bottom: 0px;
`;

const RecordFormForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.black};
  border-radius: 0.5rem;
  width: 22rem;
  background-color: ${({ theme }) => theme.white};
  padding-bottom: 1em;
  height: fit-content;
  box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.5);
  margin: 1.5em auto 1em auto;
`;

const ShowAllRecordFormForm = styled(RecordFormForm)`
  width: 90%;
`;

const ShowAllRecordForm = styled.div`
  width: 90%;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 0 auto;
`;

const RecordFormCloseButton = styled.div`
  margin-top: 1rem;
  height: 32px;
  width: 32px;
`;
const RecordFormButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
const RecordFormCloseButtonIcon = styled.i`
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
  background-color: ${({ theme }) => theme.backgroundLight};
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  &:active {
    background-color: ${({ theme }) => theme.darkGrey};
  }
`;

const ShowAllRecordFormStepButton = styled(RecordFormStepButton)`
  @media (max-width: 1100px) {
    display: none;
  }
`;

const DiscogsMultiResult = styled(RecordFormForm)`
  width: fit-content;
  padding: 1rem;
`;

const StepContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
`;

const CheckboxStepContainer = styled(StepContainer)`
  margin: 0 auto;
`;

const Step1 = ({
  title,
  artist,
  label,
  catalogNumber,
  releaseDate,
  onChange,
}) => {
  return (
    <StepContainer>
      <TextField
        medium
        outline
        type='text'
        title='Title'
        name='title'
        value={title}
        onChange={onChange}
      />
      <TextField
        medium
        outline
        type='text'
        title='Artist'
        name='artist'
        value={artist}
        onChange={onChange}
      />
      <TextField
        medium
        outline
        type='text'
        title='Label'
        name='label'
        value={label}
        onChange={onChange}
      />
      <TextField
        medium
        outline
        type='text'
        title='Catalog Number'
        name='catalogNumber'
        value={catalogNumber}
        onChange={onChange}
      />
      <TextField
        medium
        outline
        type='text'
        title='Release Date'
        name='releaseDate'
        value={releaseDate}
        onChange={onChange}
      />
    </StepContainer>
  );
};

const Step2 = ({
  recordCondition,
  sleeveCondition,
  country,
  locationPrimary,
  locationSecondary,
  onChange,
}) => {
  return (
    <StepContainer>
      <TextField
        medium
        outline
        type='text'
        title='Record Condition'
        name='recordCondition'
        value={recordCondition}
        onChange={onChange}
      />
      <TextField
        medium
        outline
        type='text'
        title='Sleeve Condition'
        name='sleeveCondition'
        value={sleeveCondition}
        onChange={onChange}
      />
      <TextField
        medium
        outline
        type='text'
        title='Country'
        name='country'
        value={country}
        onChange={onChange}
      />
      <TextField
        medium
        outline
        type='text'
        title='Location Primary'
        name='locationPrimary'
        value={locationPrimary}
        onChange={onChange}
      />
      <TextField
        medium
        outline
        type='text'
        title='Location Secondary'
        name='locationSecondary'
        value={locationSecondary}
        onChange={onChange}
      />
    </StepContainer>
  );
};

const Step3 = ({ barcode, coverFront, genre, style, comment, onChange }) => {
  return (
    <StepContainer>
      <TextField
        medium
        outline
        type='text'
        title='Barcode'
        name='barcode'
        value={barcode}
        onChange={onChange}
      />
      <TextField
        medium
        outline
        type='url'
        title='Cover Front'
        name='coverFront'
        value={coverFront}
        onChange={onChange}
      />
      <TextField
        medium
        outline
        type='text'
        title='Genre'
        name='genre'
        value={genre}
        onChange={onChange}
      />
      <TextField
        medium
        outline
        type='text'
        title='Style'
        name='style'
        value={style}
        onChange={onChange}
      />
      <TextField
        medium
        outline
        type='text'
        title='Comment'
        name='comment'
        value={comment}
        onChange={onChange}
      />
    </StepContainer>
  );
};

const Step4 = ({
  rating,
  cover,
  innerSleeve,
  outerSleeve,
  wishList,
  handleChecked,
  handleRating,
}) => {
  return (
    <CheckboxStepContainer>
      <Rating rating={rating} onChange={handleRating} label='Rating' />
      <CheckBox
        value={cover}
        name='cover'
        label='Cover'
        handleChecked={handleChecked}
      />
      <CheckBox
        value={innerSleeve}
        label='Inner Sleeve'
        name='innerSleeve'
        handleChecked={handleChecked}
      />
      <CheckBox
        value={outerSleeve}
        label='Outer Sleeve'
        name='outerSleeve'
        handleChecked={handleChecked}
      />
      <CheckBox
        value={wishList}
        label='Wish List'
        name='wishList'
        handleChecked={handleChecked}
      />
    </CheckboxStepContainer>
  );
};

const RecordForm = ({ displayAddRecord, setDisplayAddRecord }) => {
  const recordContext = useContext(RecordContext);
  const [discogsResult, setDiscogsResult] = useState([]);
  const [showAllSteps, setShowAllSteps] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { addRecord, current, clearCurrent, updateRecord } = recordContext;

  const updateDimensions = () => {
    console.log(windowWidth);
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [window.innerWidth]);

  useEffect(() => {
    if (windowWidth < 1100) {
      setShowAllSteps(false);
      setCurrentStep(1);
    }
  }, [windowWidth]);

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
        recordCondition: '',
        sleeveCondition: '',
        barcode: '',
        locationPrimary: '',
        locationSecondary: '',
        want: '',
        have: '',
        genre: '',
        style: '',
        cover: null,
        innerSleeve: null,
        outerSleeve: null,
        comment: '',
        rating: '',
        wishList: null,
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
    recordCondition: '',
    sleeveCondition: '',
    barcode: '',
    locationPrimary: '',
    locationSecondary: '',
    want: '',
    have: '',
    genre: '',
    style: '',
    cover: null,
    innerSleeve: null,
    outerSleeve: null,
    comment: '',
    rating: '',
    wishList: null,
  });

  const {
    title,
    artist,
    label,
    catalogNumber,
    releaseDate,
    country,
    coverFront,
    // coverBack,
    // coverLp,
    recordCondition,
    sleeveCondition,
    barcode,
    locationPrimary,
    locationSecondary,
    genre,
    style,
    cover,
    innerSleeve,
    outerSleeve,
    comment,
    rating,
    wishList,
  } = record;

  const onChange = (e) => {
    if (e.target.type !== undefined && e.target.type === 'text') {
      setRecord({ ...record, [e.target.name]: e.target.value });
    }
  };

  const handleChecked = (e) => {
    if (e.current.type === 'checkbox') {
      console.log(e.current.checked);
      e.current.checked = !e.current.checked;
      console.log(e.current.checked);
      setRecord({ ...record, [e.current.name]: e.current.checked });
    }
  };
  const handleRating = (e) => {
    console.log(e);
    setRecord({ ...record, rating: e });
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

  const close = () => {
    setDisplayAddRecord(!displayAddRecord);
  };

  useKey('Escape', close);
  // useKey('Digit1', () => {
  //   setCurrentStep(1);
  // });
  // useKey('Digit2', () => {
  //   setCurrentStep(2);
  // });
  // useKey('Digit3', () => {
  //   setCurrentStep(3);
  // });
  // useKey('Digit4', () => {
  //   setCurrentStep(4);
  // });
  // useKey('KeyA', () => {
  //   setShowAllSteps(!showAllSteps);
  // });

  if (showAllSteps === true) {
    return (
      <RecordFormContainer>
        {discogsResult.length <= 1 && (
          <ShowAllRecordFormForm onSubmit={onSubmit}>
            <FormHeader>
              <IconContainer></IconContainer>
              <FormHeaderText>
                {current ? 'Edit Record' : 'Add Record'}
              </FormHeaderText>
              <RecordFormCloseButton onClick={close}>
                <RecordFormCloseButtonIcon className='fas fa-times'></RecordFormCloseButtonIcon>
              </RecordFormCloseButton>
            </FormHeader>
            <ShowAllRecordForm>
              <Step1
                title={title}
                artist={artist}
                label={label}
                catalogNumber={catalogNumber}
                releaseDate={releaseDate}
                onChange={onChange}
              />

              <Step2
                recordCondition={recordCondition}
                sleeveCondition={sleeveCondition}
                country={country}
                locationPrimary={locationPrimary}
                locationSecondary={locationSecondary}
                onChange={onChange}
              />

              <Step3
                barcode={barcode}
                coverFront={coverFront}
                genre={genre}
                style={style}
                comment={comment}
                onChange={onChange}
              />

              <Step4
                rating={rating}
                cover={cover}
                innerSleeve={innerSleeve}
                outerSleeve={outerSleeve}
                wishList={wishList}
                handleChecked={handleChecked}
                handleRating={handleRating}
              />
            </ShowAllRecordForm>
            <RecordFormStepButtonContainer>
              <RecordFormStepButton
                onClick={() => {
                  setShowAllSteps(!showAllSteps);
                  setCurrentStep(1);
                }}
                type='button'
                aria-label='Show all steps'
              >
                Show All
              </RecordFormStepButton>
            </RecordFormStepButtonContainer>
            <RecordFormButtonContainer>
              <DiscogsBtn
                discogsResult={discogsResult}
                setDiscogsResult={setDiscogsResult}
              />
              <Button
                type='submit'
                small
                solidSuccess
                children={current ? 'Update Record' : 'Add Record'}
              />

              {current && (
                <Button
                  medium
                  solidDanger
                  type='button'
                  onClick={clearAll}
                  children='Clear'
                />
              )}
            </RecordFormButtonContainer>
          </ShowAllRecordFormForm>
        )}
      </RecordFormContainer>
    );
  } else if (showAllSteps === false) {
    return (
      <RecordFormContainer>
        {discogsResult.length <= 1 && (
          <RecordFormForm onSubmit={onSubmit}>
            <FormHeader>
              <IconContainer></IconContainer>
              <FormHeaderText>
                {current ? 'Edit Record' : 'Add Record'}
              </FormHeaderText>
              <RecordFormCloseButton onClick={close}>
                <RecordFormCloseButtonIcon className='fas fa-times'></RecordFormCloseButtonIcon>
              </RecordFormCloseButton>
            </FormHeader>
            {currentStep === 1 ? (
              <Step1
                title={title}
                artist={artist}
                label={label}
                catalogNumber={catalogNumber}
                releaseDate={releaseDate}
                onChange={onChange}
              />
            ) : currentStep === 2 ? (
              <Step2
                recordCondition={recordCondition}
                sleeveCondition={sleeveCondition}
                country={country}
                locationPrimary={locationPrimary}
                locationSecondary={locationSecondary}
                onChange={onChange}
              />
            ) : currentStep === 3 ? (
              <Step3
                barcode={barcode}
                coverFront={coverFront}
                genre={genre}
                style={style}
                comment={comment}
                onChange={onChange}
              />
            ) : currentStep === 4 ? (
              <Step4
                rating={rating}
                cover={cover}
                innerSleeve={innerSleeve}
                outerSleeve={outerSleeve}
                wishList={wishList}
                handleChecked={handleChecked}
                handleRating={handleRating}
              />
            ) : null}

            <RecordFormStepButtonContainer>
              <RecordFormStepButton
                onClick={() => {
                  setCurrentStep(1);
                }}
                type='button'
                aria-label='Form Step 1'
              >
                1
              </RecordFormStepButton>
              <RecordFormStepButton
                onClick={() => {
                  setCurrentStep(2);
                }}
                type='button'
                aria-label='Form Step 2'
              >
                2
              </RecordFormStepButton>
              <RecordFormStepButton
                onClick={() => {
                  setCurrentStep(3);
                }}
                type='button'
                aria-label='Form Step 3'
              >
                3
              </RecordFormStepButton>
              <RecordFormStepButton
                onClick={() => {
                  setCurrentStep(4);
                }}
                type='button'
                aria-label='Form Step 4'
              >
                4
              </RecordFormStepButton>

              <ShowAllRecordFormStepButton
                onClick={() => {
                  setShowAllSteps(!showAllSteps);
                  setCurrentStep(null);
                }}
                type='button'
                aria-label='Show all steps'
              >
                Show All
              </ShowAllRecordFormStepButton>
            </RecordFormStepButtonContainer>
            <RecordFormButtonContainer>
              <DiscogsBtn
                discogsResult={discogsResult}
                setDiscogsResult={setDiscogsResult}
              />
              <Button
                type='submit'
                small
                solidSuccess
                children={current ? 'Update Record' : 'Add Record'}
              />

              {current && (
                <Button
                  medium
                  solidDanger
                  type='button'
                  onClick={clearAll}
                  children='Clear'
                />
              )}
            </RecordFormButtonContainer>
          </RecordFormForm>
        )}
        {discogsResult.length > 1 && (
          <DiscogsMultiResult>
            <h2> {discogsResult.length} results found</h2>
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
  }
};

export default RecordForm;
