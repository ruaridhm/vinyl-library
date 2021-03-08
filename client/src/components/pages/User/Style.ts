import styled from 'styled-components';
import Img from '../../../images//4263202864_237c768087_o.jpg';

export const UserStatsContainer = styled.div`
  padding-left: 4.5rem;
  height: 100vh;
  z-index: 2;
  position: relative;
  opacity: 1;
  &:before {
    content: ' ';
    display: block;
    background-image: url(${Img});
    background-position: center;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 1;
    opacity: 0.2;
    @media (max-width: 300px) {
      padding-left: 1rem;
    }
  }
`;
export const UserTitle = styled.h1`
  margin: 0;
  padding-top: 1rem;
  z-index: 2;
  opacity: 1;
`;
export const UserStats = styled.div`
  margin: 2rem 1rem 0 1rem;
  z-index: 2;
`;
export const UserStat = styled.p``;
