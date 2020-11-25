import React, { useState } from 'react';
import './resultoption.css';
import Button from '../button/Button';

const ResultOption = ({ data, record, setRecord }) => {
  const [iterator, setIterator] = useState(0);

  // setRecord({
  //   title: data[iterator].title,
  //   artist: data[iterator].artist,
  //   label: data[iterator].label,
  //   catalogNumber: data[iterator].catno,
  //   releaseDate: data[iterator].year,
  //   country: data[iterator].country,
  //   coverFront: data[iterator].coverImage,
  //   barcode: data[iterator].barcode,
  // });

  const next = () => {
    if (iterator <= data.length - 1) {
      setIterator(iterator + 1);
      setRecord(data[iterator]);
    }
  };
  const prev = () => {
    iterator > -1 && setIterator(iterator - 1);
    setRecord(data[iterator]);
  };

  return (
    <div>
      <div className='results'>
        <div className='textResults'>
          <p>
            <strong>Title:</strong> {record.title}
          </p>
          <p>
            <strong>Artist:</strong> {record.artist}
          </p>
          <p>
            <strong>Label:</strong> {record.label[0]}
          </p>
          <p>
            <strong>Release date:</strong> {record.year}
          </p>
          <p>
            <strong>Country:</strong> {record.country}
          </p>
          <p>
            <strong>Catalog Number:</strong> {record.catno}
          </p>
          <p>
            <strong>Barcode:</strong> {record.barcode[0]}
          </p>
        </div>
        <img src={record.cover_image} alt={''} className='resultOptionImage' />
      </div>
      <div className='button-container'>
        <Button
          children='Prev'
          onClick={prev}
          type=''
          buttonSize={'btn--small'}
          buttonStyle={'btn--primary--solid'}
        />
        <Button
          children='Next'
          onClick={next}
          type=''
          buttonSize={'btn--small'}
          buttonStyle={'btn--primary--solid'}
        />
      </div>
    </div>
  );
};

export default ResultOption;
