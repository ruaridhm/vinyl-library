import React from 'react';
import './feature.css';

const Feature = ({ icon, title, description }) => {
  return (
    <div className='feature'>
      <div className='feature-icon'>{icon}</div>
      <h3 className='feature-title'>{title}</h3>
      <p className='feature-body'>{description}</p>
    </div>
  );
};

export default Feature;
