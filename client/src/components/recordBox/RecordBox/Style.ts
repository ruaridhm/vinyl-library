import styled from 'styled-components';
import BorderImg from '../../../images/woodborder.jpg';

export const StyledRecordBox = styled.div`
  border: 20px solid transparent;
  border-image: url(${BorderImg}) 100 1000;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  @media (max-width: 700px) {
    border: 10px solid transparent;
    border-image: url(${BorderImg}) 100 1000;
  }
`;
