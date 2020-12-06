import React from 'react';
import PropTypes from 'prop-types';
import './imageslider.css';
import Placeholder from '../../images/Placeholder.png';

const SliderImage = ({ src, alt }) => {
  if (src === '') {
    src = Placeholder;
    alt = 'No image available';
  }

  return <img className='slider-image' src={src} alt={alt}></img>;
};

SliderImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

SliderImage.defaultProps = {
  src: Placeholder,
  alt: 'Slider Image',
};

export default SliderImage;
