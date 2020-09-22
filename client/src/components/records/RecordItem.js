import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RecordContext from '../../context/record/recordContext';
import Button from '../button/Button';

const RecordItem = ({ record }) => {
  const recordContext = useContext(RecordContext);
  const { deleteRecord, setCurrent, clearCurrent } = recordContext;

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
      <h3>{title}</h3>
      <h4>{artist}</h4>
      <ul>
        {label && <li>Label: {label}</li>}
        {catalogNumber && <li>Catalog Number: {catalogNumber}</li>}
        {releaseDate && <li>Released: {releaseDate}</li>}
        {format && <li>Format: {format}</li>}
        {country && (
          <li>
            <i className='fas fa-flag'></i> Country: {country}
          </li>
        )}
        {condition && <li>Condition: {condition}</li>}
        {barcode && (
          <li>
            <i className='fas fa-barcode'></i> Barcode: {barcode}
          </li>
        )}

        {
          (locationPrimary,
          locationSecondary && (
            <li>
              <i className='fas fa-search-location'></i> Location:{' '}
              {locationPrimary}, Index: {locationSecondary}
            </li>
          ))
        }
        {coverFront && <img src={coverFront} alt='Front Cover' />}
        {coverBack && <img src={coverBack} alt='Back Cover' />}
        {coverLp && <img src={coverLp} alt='Lp Cover' />}
      </ul>
      <p>
        <Button
          buttonStyle='btn--primary--solid'
          buttonSize='btn--small'
          onClick={() => setCurrent(record)}
        >
          Edit
        </Button>
        <Button
          buttonStyle='btn--danger--solid'
          buttonSize='btn--small'
          onClick={onDelete}
        >
          Delete
        </Button>
      </p>
    </div>
  );
};

RecordItem.propTypes = {
  record: PropTypes.object.isRequired,
};

export default RecordItem;
