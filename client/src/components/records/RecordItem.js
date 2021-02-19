import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RecordContext from '../../context/record/recordContext';
import Button from '../button/Button';
import Modal from '../modal/Modal';
import ImageSlider from '../imageSlider/ImageSlider';
import ViewInfo from '../viewInfo/ViewInfo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faInfo } from '@fortawesome/free-solid-svg-icons';

const Card = styled.div`
  background-color: ${({ theme }) => theme.white};
  border-radius: 0.5em;
  padding: 0.5em;
  margin: 0.5em;
  width: 22rem;
  box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.5);
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 0.75fr 0.5fr 4fr 1fr;
`;
const CardTitle = styled.h2`
  margin: 0;
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: 3;
`;

const CardArtist = styled.h3`
  margin: 0;
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 3;
`;
const RecordDetailsListContainer = styled.div`
  display: flex;
  grid-row-start: 3;
  grid-row-end: 4;
  grid-column-start: 1;
  grid-column-end: 2;
`;
const RecordDetailsList = styled.ul`
  list-style: none;
  padding: 0;
  line-height: 2em;
`;
const RecordImage = styled.div`
  display: flex;
  align-self: center;
  grid-row-start: 3;
  grid-row-end: 4;
  grid-column-start: 2;
  grid-column-end: 3;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;

  grid-row-start: 4;
  grid-row-end: 5;
  grid-column-start: 1;
  grid-column-end: 3;
`;

const RecordItem = ({ record, setDisplayAddRecord }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const recordContext = useContext(RecordContext);
  const { deleteRecord, setCurrent, clearCurrent } = recordContext;

  const closeDeleteModalHandler = () => setShowDeleteModal(false);
  const closeInfoModalHandler = () => setShowInfoModal(false);

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
    recordCondition,
    sleeveCondition,
    genre,
    style,
    comment,
    rating,
    cover,
    innerSleeve,
    outerSleeve,
    wishList,
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

  const showInfoModalHandler = () => {
    setShowInfoModal(true);
  };

  const showDeleteModalHandler = () => {
    setShowDeleteModal(true);
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
    <>
      <Card className='card'>
        <CardTitle>{title}</CardTitle>
        <CardArtist>{artist}</CardArtist>
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
            solidSuccess
            small
            onClick={showInfoModalHandler}
            children={
              <>
                <FontAwesomeIcon icon={faInfo} /> Show Info
              </>
            }
          />
          <Button
            solidDanger
            small
            onClick={showDeleteModalHandler}
            children={
              <>
                <FontAwesomeIcon icon={faTrashAlt} /> Delete
              </>
            }
          />
        </ButtonContainer>
      </Card>
      <Modal
        show={showDeleteModal}
        close={closeDeleteModalHandler}
        confirm={onDelete}
        headerText='Confirm Delete'
        bodyText='Are you sure you want to delete this item?'
        confirmText='Select'
      />
      <Modal
        show={showInfoModal}
        close={closeInfoModalHandler}
        confirm={() => {}}
        headerText='Record Info'
        bodyText={
          <ViewInfo
            title={title}
            artist={artist}
            label={label}
            catalogNumber={catalogNumber}
            releaseDate={releaseDate}
            country={country}
            coverFront={coverFront}
            condition={condition}
            barcode={barcode}
            locationPrimary={locationPrimary}
            locationSecondary={locationSecondary}
            recordCondition={recordCondition}
            sleeveCondition={sleeveCondition}
            genre={genre}
            style={style}
            comment={comment}
            rating={rating}
            cover={cover}
            innerSleeve={innerSleeve}
            outerSleeve={outerSleeve}
            wishList={wishList}
          />
        }
        confirmText='confirmText'
      />
    </>
  );
};

RecordItem.propTypes = {
  record: PropTypes.object.isRequired,
};

export default RecordItem;
