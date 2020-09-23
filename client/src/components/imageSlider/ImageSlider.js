import React, { useState } from 'react';
import './imageslider.css';
import SliderImage from './SliderImage';

const ImageSlider = (coverFront, coverBack, coverLp) => {
  const sliderArr = [<SliderImage />, <SliderImage />, <SliderImage />];
  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className='slider'>
      {sliderArr.map((item, index) => {
        return (
          <div
            key={index}
            className='slide'
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button className='slider-btn slider-left' onClick={goLeft}>
        <i className='fas fa-chevron-left' />
      </button>
      <button className='slider-btn slider-right' onClick={goRight}>
        <i className='fas fa-chevron-right' />
      </button>
    </div>
  );
};

export default ImageSlider;
