import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import RecordContext from '../../context/record/recordContext';
import Button from '../button/Button';
import Modal from '../modal/Modal';
import ImageSlider from '../imageSlider/ImageSlider';
import './RecordItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const RecordItem = ({ record, displayAddRecord, setDisplayAddRecord }) => {
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
    <div className='card'>
      <div className='card-details'>
        <h2 className='title'>{title}</h2>
        <h3>{artist}</h3>
        <div className='record-details-list-container'>
          <ul className='record-details-list'>
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
          </ul>
        </div>
        <Modal
          show={showModal}
          close={closeModalHandler}
          confirm={onDelete}
          headerText='Confirm Delete'
          bodyText='Are you sure you want to delete this item?'
          closeColor='btn--danger--solid'
          confirmText='Select'
          confirmColor='btn--success--solid'
        />
      </div>

      <div className='record-image'>{renderImageSlider()}</div>

      <div className='button-container'>
        <Button
          buttonStyle='btn--primary--solid'
          buttonSize='btn--small'
          onClick={editRecord}
        >
          <FontAwesomeIcon icon={faEdit} /> Edit
        </Button>

        <div>{showModal ? <div onClick={closeModalHandler}></div> : null}</div>

        <Button
          buttonStyle='btn--danger--solid'
          buttonSize='btn--small'
          onClick={() => setShowModal(true)}
        >
          <FontAwesomeIcon icon={faTrashAlt} /> Delete
        </Button>
      </div>
    </div>
  );
};

RecordItem.propTypes = {
  record: PropTypes.object.isRequired,
};

export default RecordItem;
