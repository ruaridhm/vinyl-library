import React, { useState } from 'react';
import './resultoption.css';
import Button from '../button/Button';

const ResultOption = ({ data, record, setRecord, setDiscogsResult }) => {
  const [iterator, setIterator] = useState(0);

  const next = () => {
    if (iterator < data.length) {
      setIterator((c) => c + 1);
      console.log(data[iterator]);
      setRecord(data[iterator]);
    }
  };
  const prev = () => {
    if (iterator > 0) {
      setIterator((c) => c - 1);
      console.log(data[iterator]);
      // setRecord(data[iterator]);
    } else {
      console.log('else');
      console.log(data[iterator]);
    }
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
        <img
          src={record.cover_image}
          alt={`${record.title} cover`}
          className='resultOptionImage'
        />
      </div>
      <div className='button-container'>
        <Button
          children='Cancel'
          onClick={() => {
            setDiscogsResult([]);
          }}
          type=''
          buttonSize={'btn--medium'}
          buttonStyle={'btn--danger--solid'}
        ></Button>
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
        <Button
          children='Select'
          onClick={() => {
            setRecord(record);
            setDiscogsResult([]);
          }}
          type=''
          buttonSize={'btn--medium'}
          buttonStyle={'btn--success--solid'}
        ></Button>
      </div>
    </div>
  );
};

export default ResultOption;
