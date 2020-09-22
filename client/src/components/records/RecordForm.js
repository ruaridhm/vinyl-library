import React, { useState, useContext, useEffect } from 'react';
import RecordContext from '../../context/record/recordContext';
import Button from '../button/Button';
import TextField from '../text field/TextField';

const RecordForm = () => {
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
    }
    recordContext.addRecord(record);
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
  };

  const clearAll = () => {
    clearCurrent();
  };
  return (
    <form onSubmit={onSubmit} className='form'>
      <h2>{current ? 'Edit Record' : 'Add Record'}</h2>
      <TextField
        textFieldStyle='textField--standard'
        type='text'
        placeholder='Title'
        name='title'
        value={title}
        onChange={onChange}
      />
      <TextField
        textFieldStyle='textField--filled'
        type='text'
        placeholder='Artist'
        name='artist'
        value={artist}
        onChange={onChange}
      />
      <TextField
        textFieldStyle='textField--outline'
        type='text'
        placeholder='Label'
        name='label'
        value={label}
        onChange={onChange}
      />
      <TextField
        type='text'
        placeholder='Catalog Number'
        name='catalogNumber'
        value={catalogNumber}
        onChange={onChange}
      />
      <TextField
        type='text'
        placeholder='Release Date'
        name='releaseDate'
        value={releaseDate}
        onChange={onChange}
      />
      <TextField
        type='text'
        placeholder='Country'
        name='country'
        value={country}
        onChange={onChange}
      />
      <TextField
        type='text'
        placeholder='Cover Front'
        name='coverFront'
        value={coverFront}
        onChange={onChange}
      />
      <TextField
        type='text'
        placeholder='Cover Back'
        name='coverBack'
        value={coverBack}
        onChange={onChange}
      />
      <TextField
        type='text'
        placeholder='Cover Lp'
        name='coverLp'
        value={coverLp}
        onChange={onChange}
      />
      <TextField
        type='text'
        placeholder='Condition'
        name='condition'
        value={condition}
        onChange={onChange}
      />
      <TextField
        type='text'
        placeholder='Barcode'
        name='barcode'
        value={barcode}
        onChange={onChange}
      />
      <TextField
        type='text'
        placeholder='Location Primary'
        name='locationPrimary'
        value={locationPrimary}
        onChange={onChange}
      />
      <TextField
        type='text'
        placeholder='Location Secondary'
        name='locationSecondary'
        value={locationSecondary}
        onChange={onChange}
      />
      <div>
        <Button
          type='submit'
          buttonSize='btn--small'
          buttonStyle='btn--success--solid'
        >
          {current ? 'Update Record' : 'Add Record'}
        </Button>
      </div>
      {current && (
        <div>
          <Button
            buttonSize='btn--small'
            buttonStyle='btn--success--solid'
            type='button'
            onClick={clearAll}
          >
            Clear
          </Button>
        </div>
      )}
    </form>
  );
};

export default RecordForm;
