import React, { useState } from 'react';
import SliderImage from './SliderImage';
import Placeholder from '../../images/Placeholder.png';

import { Slider, Slide, SliderButtonLeft, SliderButtonRight } from './Style';

interface ImageSliderProps {
  coverFront: string;
  coverBack?: string;
  coverLp?: string;
}

const ImageSlider = ({
  coverFront = Placeholder,
  coverBack,
  coverLp,
}: ImageSliderProps) => {
  const sliderArr = [<SliderImage src={coverFront} alt='Front Cover' />];
  coverBack && sliderArr.push(<SliderImage src={coverBack} alt='Back Cover' />);
  coverLp && sliderArr.push(<SliderImage src={coverLp} alt='Lp Cover' />);

  const [x, setX] = useState<number>(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <Slider>
      {sliderArr.map((item, index) => {
        return (
          <Slide
            key={index}
            children={item}
            style={{ transform: `translateX(${x}%)` }}
          />
        );
      })}
      {sliderArr.length > 1 && (
        <SliderButtonLeft onClick={goLeft} aria-label='Previous Image'>
          <i className='fas fa-chevron-left' aria-hidden='true' />
        </SliderButtonLeft>
      )}
      {sliderArr.length > 1 && (
        <SliderButtonRight onClick={goRight} aria-label='Next Image'>
          <i className='fas fa-chevron-right' aria-hidden='true' />
        </SliderButtonRight>
      )}
    </Slider>
  );
};

export default ImageSlider;
