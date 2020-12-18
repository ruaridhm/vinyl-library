import React, { useState } from 'react';
import SliderImage from './SliderImage';
import Placeholder from '../../images/Placeholder.png';
import styled from 'styled-components';

const Slider = styled.div`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: transparent;
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  transition: 0.5s;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  background: none;
  transform: translateY(-50%);
  width: 10%;
  height: 80%;
  border: none;
  outline: none;
  transition: 0.5s;
  &:hover {
    background: rgba(0, 0, 0, 0.355);
    cursor: pointer;
    color: ${(props) => props.theme.white};
  }
`;

const SliderButtonLeft = styled(SliderButton)`
  left: 0;
`;

const SliderButtonRight = styled(SliderButton)`
  right: 0;
`;

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
