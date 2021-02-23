import React, { useContext, useState } from 'react';
import RecordContext from '../../../context/record/recordContext';
import Button from '../../button/Button';
import Modal from '../../modal/Modal';
import ImageSlider from '../../imageSlider/ImageSlider';
import ViewInfo from '../../viewInfo/ViewInfo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faInfo } from '@fortawesome/free-solid-svg-icons';

import {
  Card,
  CardTitle,
  CardArtist,
  RecordDetailsListContainer,
  RecordDetailsList,
  RecordImage,
  ButtonContainer,
} from './Style';

export interface RecordInterface {
  _id: string;
  title: string;
  artist: string;
  label: string;
  catalogNumber: string;
  releaseDate: string;
  format: string;
  country: string;
  coverFront: string;
  coverBack: string;
  coverLp: string;
  condition: string;
  barcode: string;
  locationPrimary: string;
  locationSecondary: string;
  recordCondition: string;
  sleeveCondition: string;
  genre: string;
  style: string;
  comment: string;
  rating: string;
  cover: string;
  innerSleeve: string;
  outerSleeve: string;
  wishList: boolean;
}

interface RecordItemProps {
  record: RecordInterface;
  setDisplayAddRecord: () => void;
}

const RecordItem: React.FC<RecordItemProps> = ({
  record,
  setDisplayAddRecord,
}) => {
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

            {locationPrimary && locationSecondary && (
              <li>
                <strong>Location:</strong> {locationPrimary},{' '}
                <strong>Index:</strong> {locationSecondary}
              </li>
            )}
          </RecordDetailsList>
        </RecordDetailsListContainer>

        <RecordImage>{renderImageSlider()}</RecordImage>

        <ButtonContainer>
          <Button
            solidPrimary
            small
            type='button'
            onClick={editRecord}
            label='Edit'
            children={<FontAwesomeIcon icon={faEdit} />}
          />
          <Button
            solidSuccess
            small
            type='button'
            label='Show Info'
            onClick={showInfoModalHandler}
            children={<FontAwesomeIcon icon={faInfo} />}
          />
          <Button
            solidDanger
            small
            onClick={showDeleteModalHandler}
            label='Delete'
            type='button'
            children={<FontAwesomeIcon icon={faTrashAlt} />}
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

export default RecordItem;
