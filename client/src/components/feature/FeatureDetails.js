import React from 'react';
import './featureDetails.css';

const FeatureDetails = ({ left, right, image, title, description }) => {
  return (
    <div className='feature-details'>
      {left && (
        <>
          <div className='feature-details-description'>
            <h2 className='feature-details-title'>{title}</h2>
            <p className='feature-details-body'>{description}</p>
          </div>
          <div className='feature-details-image-container'>
            <img src={image} alt={title} className='feature-details-image' />
          </div>
        </>
      )}

      {right && (
        <>
          <div className='feature-details-image-container'>
            <img src={image} alt={title} className='feature-details-image' />
          </div>
          <div className='feature-details-description'>
            <h2 className='feature-details-title'>{title}</h2>
            <p className='feature-details-body'>{description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default FeatureDetails;
