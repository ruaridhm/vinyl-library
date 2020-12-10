import React, { useState } from 'react';
import './imageslider.css';
import SliderImage from './SliderImage';
import Placeholder from '../../images/Placeholder.png';

const ImageSlider = ({ coverFront = Placeholder, coverBack, coverLp }) => {
  const sliderArr = [<SliderImage src={coverFront} alt='Front Cover' />];
  coverBack && sliderArr.push(<SliderImage src={coverBack} alt='Back Cover' />);
  coverLp && sliderArr.push(<SliderImage src={coverLp} alt='Lp Cover' />);

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

      {sliderArr.length > 1 && (
        <button
          className='slider-btn slider-left'
          onClick={goLeft}
          aria-label='Previous Image'
        >
          <i className='fas fa-chevron-left' aria-hidden='true' />
        </button>
      )}
      {sliderArr.length > 1 && (
        <button
          className='slider-btn slider-right'
          onClick={goRight}
          aria-label='Next Image'
        >
          <i className='fas fa-chevron-right' aria-hidden='true' />
        </button>
      )}
    </div>
  );
};

export default ImageSlider;
