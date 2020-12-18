import React from 'react';
import PropTypes from 'prop-types';
import Placeholder from '../../images/Placeholder.png';
import styled from 'styled-components';

const StyledSliderImage = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`;

const SliderImage = ({ src, alt }) => {
  if (src === '') {
    src = Placeholder;
    alt = 'No image available';
  }

  return <StyledSliderImage src={src} alt={alt}></StyledSliderImage>;
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
