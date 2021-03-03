import React, {
  useState,
  useContext,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import RecordContext from '../../../context/record/RecordContext';
import Button from '../../button/Button';
import DiscogsBtn from '../../discogs/DiscogsBtn';
import TextField from '../../text field/TextField';
import CheckBox from '../../checkbox/CheckBox';
import ResultOption from '../../resultOption/ResultOption.js';
import useKey from '../../../hooks/useKey';
import Rating from '../../rating/Rating';
import {
  RecordFormContainer,
  FormHeader,
  IconContainer,
  FormHeaderText,
  RecordFormForm,
  ShowAllRecordFormForm,
  ShowAllRecordForm,
  RecordFormCloseButton,
  RecordFormButtonContainer,
  RecordFormCloseButtonIcon,
  RecordFormStepButtonContainer,
  RecordFormStepButton,
  ShowAllRecordFormStepButton,
  DiscogsMultiResult,
  StepContainer,
  CheckboxStepContainer,
} from './Style';

interface Step1Props {
  title?: string;
  artist?: string;
  label?: string;
  catalogNumber?: string;
  releaseDate?: string;
  onChange: (e: any) => void;
}

const Step1: React.FC<Step1Props> = ({
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

interface Step2Props {
  recordCondition?: string;
  sleeveCondition?: string;
  country?: string;
  locationPrimary?: string;
  locationSecondary?: string;
  onChange: (e: any) => void;
}

const Step2: React.FC<Step2Props> = ({
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

interface Step3Props {
  barcode?: string;
  coverFront?: string;
  genre?: string;
  style?: string;
  comment?: string;
  onChange: (e: any) => void;
}

const Step3: React.FC<Step3Props> = ({
  barcode,
  coverFront,
  genre,
  style,
  comment,
  onChange,
}) => {
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

interface Step4Props {
  rating?: string;
  cover?: string | null;
  innerSleeve?: string | null;
  outerSleeve?: string | null;
  wishList?: boolean | null;
  handleChecked: (e: any) => void;
  handleRating: (e: any) => void;
}

const Step4: React.FC<Step4Props> = ({
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

interface RecordFormProps {
  displayAddRecord: boolean;
  setDisplayAddRecord: Dispatch<SetStateAction<boolean>>;
}

const RecordForm: React.FC<RecordFormProps> = ({
  displayAddRecord,
  setDisplayAddRecord,
}) => {
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
        want: 0,
        have: 0,
        genre: '',
        style: '',
        cover: null,
        innerSleeve: null,
        outerSleeve: null,
        comment: '',
        rating: null,
        wishList: false,
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
    want: 0,
    have: 0,
    genre: '',
    style: '',
    cover: null,
    innerSleeve: null,
    outerSleeve: null,
    comment: '',
    rating: null,
    wishList: false,
  });

  const {
    title,
    artist,
    label,
    catalogNumber,
    releaseDate,
    // format,
    country,
    coverFront,
    coverBack,
    coverLp,
    recordCondition,
    sleeveCondition,
    barcode,
    locationPrimary,
    locationSecondary,
    want,
    have,
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
                label={current ? 'Update Record' : 'Add Record'}
              />

              {current && (
                <Button
                  medium
                  solidDanger
                  type='button'
                  onClick={clearAll}
                  label='Clear'
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
                label={current ? 'Update Record' : 'Add Record'}
              />

              {current && (
                <Button
                  medium
                  solidDanger
                  type='button'
                  onClick={clearAll}
                  label='Clear'
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