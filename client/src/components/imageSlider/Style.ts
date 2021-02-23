import styled from 'styled-components';

export const Slider = styled.div`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: transparent;
`;

export const Slide = styled.div`
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
    color: ${({ theme }) => theme.white};
  }
`;

export const SliderButtonLeft = styled(SliderButton)`
  left: 0;
`;

export const SliderButtonRight = styled(SliderButton)`
  right: 0;
`;

export const StyledSliderImage = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`;
