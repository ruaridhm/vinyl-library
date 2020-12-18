import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RecordContext from '../../context/record/recordContext';
import Button from '../button/Button';
import Modal from '../modal/Modal';
import ImageSlider from '../imageSlider/ImageSlider';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Card = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  background-color: $white;
  border-radius: 0.5em;
  padding: 0.5em;
  margin: 0.5em;
  width: 22rem;
  box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.5);
`;
const CardDetails = styled.div``;
const CardTitle = styled.h2`
  margin: 0;
`;
const RecordDetailsListContainer = styled.div`
  display: flex;
`;
const RecordDetailsList = styled.ul`
  list-style: none;
  padding: 0;
  line-height: 2em;
`;
const RecordImage = styled.div`
  display: flex;
  align-self: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  grid-column-start: 1;
  grid-column-end: 3;
`;

const RecordItem = ({ record, setDisplayAddRecord }) => {
  const [showModal, setShowModal] = useState(false);
  const recordContext = useContext(RecordContext);
  const { deleteRecord, setCurrent, clearCurrent } = recordContext;

  const closeModalHandler = () => setShowModal(false);

  const {
    _id,
    title,
    artist,
    label,
    catalogNumber,
    releaseDate,
    format,
    country,
    coverFront,
    coverBack,
    coverLp,
    condition,
    barcode,
    locationPrimary,
    locationSecondary,
  } = record;

  const scrollToTop = () => {
    document.documentElement.scrollTop = 110;
  };

  const onDelete = () => {
    deleteRecord(_id);
    clearCurrent();
  };

  const editRecord = () => {
    setCurrent(record);
    setDisplayAddRecord(true);
    scrollToTop();
  };

  const renderImageSlider = () => {
    if (coverFront || coverBack || coverLp) {
      return (
        <ImageSlider
          coverFront={coverFront}
          coverBack={coverBack}
          coverLp={coverLp}
        />
      );
    }
  };

  return (
    <Card>
      <CardDetails>
        <CardTitle>{title}</CardTitle>
        <h3>{artist}</h3>
        <RecordDetailsListContainer>
          <RecordDetailsList>
            {label && (
              <li>
                <strong>Label:</strong> {label}
              </li>
            )}
            {catalogNumber && (
              <li>
                <strong>Cat Number:</strong> {catalogNumber}
              </li>
            )}
            {releaseDate && (
              <li>
                <strong>Released:</strong> {releaseDate}
              </li>
            )}
            {format && (
              <li>
                <strong>Format:</strong> {format}
              </li>
            )}
            {country && (
              <li>
                <strong>Country:</strong> {country}
              </li>
            )}
            {condition && (
              <li>
                <strong>Condition:</strong> {condition}
              </li>
            )}
            {barcode && (
              <li>
                <strong>Barcode:</strong> {barcode}
              </li>
            )}

            {
              (locationPrimary,
              locationSecondary && (
                <li>
                  <strong>Location:</strong> {locationPrimary},{' '}
                  <strong>Index:</strong> {locationSecondary}
                </li>
              ))
            }
          </RecordDetailsList>
        </RecordDetailsListContainer>
        <Modal
          show={showModal}
          close={closeModalHandler}
          confirm={onDelete}
          headerText='Confirm Delete'
          bodyText='Are you sure you want to delete this item?'
          confirmText='Select'
        />
      </CardDetails>

      <RecordImage>{renderImageSlider()}</RecordImage>

      <ButtonContainer>
        <Button
          solidPrimary
          small
          onClick={editRecord}
          children={
            <>
              <FontAwesomeIcon icon={faEdit} /> Edit
            </>
          }
        />

        <Button
          solidDanger
          small
          onClick={() => setShowModal(true)}
          children={
            <>
              <FontAwesomeIcon icon={faTrashAlt} /> Delete
            </>
          }
        />
      </ButtonContainer>
    </Card>
  );
};

RecordItem.propTypes = {
  record: PropTypes.object.isRequired,
};

export default RecordItem;
