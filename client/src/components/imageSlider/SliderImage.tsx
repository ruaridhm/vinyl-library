import React from 'react';
import Placeholder from '../../images/Placeholder.png';

import { StyledSliderImage } from './Style';
interface SliderImageProps {
  src: string;
  alt: string;
}

const SliderImage: React.FC<SliderImageProps> = ({
  src = Placeholder,
  alt = 'Slider Image',
}) => {
  if (src === '') {
    src = Placeholder;
    alt = 'No image available';
  }

  return <StyledSliderImage src={src} alt={alt}></StyledSliderImage>;
};

export default SliderImage;
