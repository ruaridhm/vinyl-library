import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import RecordContext from '../../context/record/recordContext';
import Button from '../button/Button';
import Modal from '../modal/Modal';
import ImageSlider from '../imageSlider/ImageSlider';
import './RecordItem.css';

const RecordItem = ({ record }) => {
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

  const onDelete = () => {
    deleteRecord(_id);
    clearCurrent();
  };

  return (
    <div className='card'>
      <div>
        <h3 className='title'>{title}</h3>
        <h4>{artist}</h4>
        <div className='record-details-list-container'>
          <ul className='record-details-list'>
            {label && <li>Label: {label}</li>}
            {catalogNumber && <li>Catalog Number: {catalogNumber}</li>}
            {releaseDate && <li>Released: {releaseDate}</li>}
            {format && <li>Format: {format}</li>}
            {country && <li>Country: {country}</li>}
            {condition && <li>Condition: {condition}</li>}
            {barcode && <li>Barcode: {barcode}</li>}

            {
              (locationPrimary,
              locationSecondary && (
                <li>
                  Location: {locationPrimary}, Index: {locationSecondary}
                </li>
              ))
            }
          </ul>
        </div>
        <Button
          buttonStyle='btn--primary--solid'
          buttonSize='btn--small'
          onClick={() => setCurrent(record)}
        >
          Edit
        </Button>

        <div>{showModal ? <div onClick={closeModalHandler}></div> : null}</div>

        <Button
          buttonStyle='btn--danger--solid'
          buttonSize='btn--small'
          onClick={() => setShowModal(true)}
        >
          Delete
        </Button>
        <Modal
          show={showModal}
          close={closeModalHandler}
          confirm={onDelete}
          headerText={'Confirm Delete'}
          bodyText={'Are you sure you want to delete this item?'}
        />
      </div>

      <div>
        <ul className='record-details-list'>
          <ImageSlider />
          {/* {coverFront && <img src={coverFront} alt='Front Cover' />}
          {coverBack && <img src={coverBack} alt='Back Cover' />}
          {coverLp && <img src={coverLp} alt='Lp Cover' />} */}
        </ul>
      </div>
    </div>
  );
};

RecordItem.propTypes = {
  record: PropTypes.object.isRequired,
};

export default RecordItem;
