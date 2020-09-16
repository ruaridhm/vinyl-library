import React, { useState, useContext, useEffect } from 'react';
import RecordContext from '../../context/record/recordContext';

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
    <form onSubmit={onSubmit}>
      <h2>{current ? 'Edit Record' : 'Add Contact'}</h2>
      <input
        type='text'
        placeholder='Title'
        name='title'
        value={title}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Artist'
        name='artist'
        value={artist}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Label'
        name='label'
        value={label}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Catalog Number'
        name='catalogNumber'
        value={catalogNumber}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Release Date'
        name='releaseDate'
        value={releaseDate}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Country'
        name='country'
        value={country}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Cover Front'
        name='coverFront'
        value={coverFront}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Cover Back'
        name='coverBack'
        value={coverBack}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Cover Lp'
        name='coverLp'
        value={coverLp}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Condition'
        name='condition'
        value={condition}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Barcode'
        name='barcode'
        value={barcode}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Location Primary'
        name='locationPrimary'
        value={locationPrimary}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Location Secondary'
        name='locationSecondary'
        value={locationSecondary}
        onChange={onChange}
      />
      <div>
        <input
          type='submit'
          value={current ? 'Update Record' : 'Add Contact'}
        />
      </div>
      {current && (
        <div>
          <button onClick={clearAll}>Clear</button>
        </div>
      )}
    </form>
  );
};

export default RecordForm;
