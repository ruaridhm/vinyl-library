import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Button from '../button/Button';
import RecordContext from '../../context/record/recordContext';

const Results = styled.div`
  display: flex;
`;

const TextResults = styled.div`
  width: 50%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ResultImage = styled.img`
  max-width: 50%;
  max-height: 50%;
`;

const ResultOption = ({ data, record, setRecord, setDiscogsResult }) => {
  const recordContext = useContext(RecordContext);
  const { updateRecord } = recordContext;
  const [iterator, setIterator] = useState(0);

  const next = () => {
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
  return (
    <>
      <Results>
        <TextResults>
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
        </TextResults>
        <ResultImage
          src={data[iterator].cover_image}
          alt={`${data[iterator].title} cover`}
        />
      </Results>
      <ButtonContainer>
        <Button
          children='Cancel'
          onClick={() => {
            setDiscogsResult([]);
          }}
          type='button'
          medium
          solidDanger
        />
        <Button
          children='Prev'
          onClick={prev}
          type='button'
          small
          solidPrimary
        />
        <Button
          children='Next'
          onClick={next}
          type='button'
          small
          solidPrimary
        />
        <Button
          children='Select'
          onClick={() => {
            setDiscogsResult([]);
          }}
          type='button'
          medium
          solidSuccess
        />
      </ButtonContainer>
    </>
  );
};

export default ResultOption;
