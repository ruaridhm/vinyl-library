import styled from 'styled-components';

export const LandingPage = styled.div`
  width: 100%;
  margin: 0;
`;
export const SiteLogo = styled.div``;
export const LandingHero = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 88.5vh;
  background: ${({ theme }) => theme.secondaryColor};
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10vw), 0 100%);
  margin-bottom: -10vw;
  color: ${({ theme }) => theme.lightColor};
`;
export const LandingHeroHeadline = styled.h1`
  margin-top: 2.5rem;
  font-size: 4.5em;
  text-align: center;
  @media (max-width: 1105px) {
    margin-bottom: 0.25em;
  }
  @media (max-width: 700px) {
    font-size: 3.5em;
  }
  @media (max-width: 55 0px) {
    font-size: 2.5em;
  }
`;
export const LandingHeroBody = styled.p`
  text-align: center;
  width: 50%;
  @media (max-width: 1105px) {
    width: 70%;
  }
  @media (max-width: 700px) {
    width: 80%;
  }
  @media (max-width: 550px) {
    width: 90%;
  }
`;
export const LandingHeroCTAs = styled.div`
  padding-top: 4em;
  display: flex;
  flex-direction: column;

  @media (max-width: 1105px) {
    padding-top: 1em;
  }
`;
export const LandingDemoCTA = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  padding-left: 0.25rem;
  cursor: pointer;
  color: ${({ theme }) => theme.lightColor};
`;
export const FeatureList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 4rem;
  background-color: ${({ theme }) => theme.lightColor};
  padding: 15rem 10rem 5rem 10rem;

  @media (max-width: 1105px) {
    padding: 15rem 5rem 6rem 5rem;
    column-gap: 2rem;
  }

  @media (max-width: 700px) {
    padding: 15rem 2.5rem 6rem 2.5rem;
    column-gap: 1rem;
  }
  @media (max-width: 550px) {
    padding: 15rem 1rem 6rem 1rem;
    column-gap: 1rem;
  }
`;
export const FeatureDetailsList = styled.div`
  position: relative;
  padding: 5rem 10rem 0 10rem;

  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 100px;
    height: 100px;
    top: -82px;
    background: ${({ theme }) => theme.lightColor};
    z-index: 1;
  }
  &::before {
    right: 50%;
    transform: skew(0, 20deg);
  }
  &::after {
    left: 50%;
    transform: skew(0, -20deg);
  }
`;
export const FooterTop = styled.div`
  position: absolute;
  top: -1;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  background-color: ${({ theme }) => theme.darkColor};
  svg {
    position: relative;
    display: block;
    height: 100px;
    animation: waveMove 20s linear infinite;
    animation-direction: alternate;
  }

  @keyframes waveMove {
    0% {
      width: calc(100%);
    }
    100% {
      width: calc(300%);
    }
  }
`;

export const StyledPath = styled.path`
  fill: ${({ theme }) => theme.white};
`;
export const FooterBottom = styled.div`
  padding-top: 8rem;
  background-color: ${({ theme }) => theme.darkColor};
`;

export const FooterTitle = styled.h1`
  margin: 0;
  white-space: nowrap;
  color: ${({ theme }) => theme.lightColor};
  padding-left: 2rem;
  padding-bottom: 1rem;
`;
export const FooterLogo = styled.img`
  height: 1.2em;
  margin-right: 0.25em;
`;

export const FooterCTA = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
`;

export const StyledFontAwesomeIconDemoCTA = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.dangerColor};
  fill: ${({ theme }) => theme.lightColor};
  font-size: 2em;
`;

export const FooterLine = styled.hr`
  width: 80%;
`;
export const FooterCopyright = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.lightColor};
`;
