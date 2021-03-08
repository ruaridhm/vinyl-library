import React from 'react';
import Placeholder from '../../images/Placeholder.png';

import { StyledSliderImage } from './Style';
interface SliderImageProps {
  src: string;
  alt: string;
}

const SliderImage = ({
  src = Placeholder,
  alt = 'Slider Image',
}: SliderImageProps) => {
  return <StyledSliderImage src={src} alt={alt}></StyledSliderImage>;
};

export default SliderImage;
