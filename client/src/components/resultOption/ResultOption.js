import React, { useState, useContext } from 'react';
import './resultoption.css';
import Button from '../button/Button';
import RecordContext from '../../context/record/recordContext';

const ResultOption = ({ data, record, setRecord, setDiscogsResult }) => {
  const recordContext = useContext(RecordContext);
  const { updateRecord } = recordContext;
  const [iterator, setIterator] = useState(0);
  const record_id = record._id;
  console.log(record_id);

  const next = () => {
    console.log({ data });
    if (iterator < data.length - 1) {
      setIterator((c) => c + 1);

      const artist = data[iterator].title.split(' - ')[0];
      const title = data[iterator].title.split(' - ')[1];

      setRecord({
        ...record,
        title: title,
        artist: artist,
        label: data[iterator].label[0],
        catalogNumber: data[iterator].catno,
        releaseDate: data[iterator].year,
        country: data[iterator].country,
        coverFront: data[iterator].cover_image,
        barcode: data[iterator].barcode[0],
        want: data[iterator].community.want,
        have: data[iterator].community.have,
        genre: data[iterator].genre,
        style: data[iterator].style,
      });
    }
  };
  const prev = () => {
    if (iterator > 0) {
      setIterator((c) => c - 1);

      const artist = data[iterator].title.split(' - ')[0];
      const title = data[iterator].title.split(' - ')[1];

      setRecord({
        ...record,
        title: title,
        artist: artist,
        label: data[iterator].label[0],
        catalogNumber: data[iterator].catno,
        releaseDate: data[iterator].year,
        country: data[iterator].country,
        coverFront: data[iterator].cover_image,
        barcode: data[iterator].barcode[0],
        want: data[iterator].community.want,
        have: data[iterator].community.have,
        genre: data[iterator].genre,
        style: data[iterator].style,
      });
    }
  };

  const UpdateRecord = () => {
    updateRecord(record);
  };

  return (
    <div>
      <div className='results'>
        <div className='textResults'>
          <p>
            <strong>Title:</strong> {data[iterator].title}
          </p>
          <p>
            <strong>Artist:</strong> {record.artist}
          </p>
          <p>
            <strong>Label:</strong> {data[iterator].label[0]}
          </p>
          <p>
            <strong>Release date:</strong> {data[iterator].year}
          </p>
          <p>
            <strong>Country:</strong> {data[iterator].country}
          </p>
          <p>
            <strong>Catalog Number:</strong> {data[iterator].catno}
          </p>
          <p>
            <strong>Barcode:</strong> {data[iterator].barcode[0]}
          </p>
        </div>
        <img
          src={data[iterator].cover_image}
          alt={`${data[iterator].title} cover`}
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
            //need to attach _id to line below

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
