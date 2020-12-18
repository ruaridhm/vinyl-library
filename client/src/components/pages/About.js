import React from 'react';
import styled from 'styled-components';
import Feature from '../feature/Feature';
import Button from '../button/Button';

import FeatureDetails from '../feature/FeatureDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlayCircle,
  faCopyright,
  faEye,
  faSearch,
  faSort,
  faInfo,
} from '@fortawesome/free-solid-svg-icons';
import mainLogo from '../../images/Logo.png';

const LandingPage = styled.div`
  width: 100%;
  margin: 0;
`;
const SiteLogo = styled.div``;
const LandingHero = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 92vh;
  background: ${(props) => props.theme.secondaryColor};
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10vw), 0 100%);
  margin-bottom: -10vw;
  color: ${(props) => props.theme.lightColor};
`;
const LandingHeroHeadline = styled.h1`
  margin-top: 2.5rem;
  font-size: 4.5em;
`;
const LandingHeroBody = styled.p`
  text-align: center;
  width: 50%;
`;
const LandingHeroCTAs = styled.div`
  padding-top: 4em;
  display: flex;
  flex-direction: column;
`;
const LandingDemoCTA = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  padding-left: 0.25rem;
  cursor: pointer;
  color: ${(props) => props.theme.lightColor};
`;
const FeatureList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 4rem;
  background-color: ${(props) => props.theme.lightColor};
  padding: 15rem 10rem 5rem 10rem;
`;
const FeatureDetailsList = styled.div`
  position: relative;
  padding: 5rem 10rem 0 10rem;

  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 100px;
    height: 100px;
    top: -82px;
    background: ${(props) => props.theme.lightColor};
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
const FooterTop = styled.div`
  position: absolute;
  top: -1;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  background-color: ${(props) => props.theme.darkColor};
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

const StyledPath = styled.path`
  fill: ${(props) => props.theme.white};
`;
const FooterBottom = styled.div`
  padding-top: 8rem;
  background-color: ${(props) => props.theme.darkColor};
`;

const FooterTitle = styled.h1`
  margin: 0;
  white-space: nowrap;
  color: ${(props) => props.theme.lightColor};
  padding-left: 2rem;
  padding-bottom: 1rem;
`;
const FooterLogo = styled.img`
  height: 1.2em;
  margin-right: 0.25em;
`;

const FooterCTA = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
`;

const StyledFontAwesomeIconDemoCTA = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
  color: ${(props) => props.theme.dangerColor};
  fill: ${(props) => props.theme.lightColor};
  font-size: 2em;
`;

const FooterLine = styled.hr`
  width: 80%;
`;
const FooterCopyright = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  color: ${(props) => props.theme.lightColor};
`;

const About = () => {
  const redirect = () => {
    window.location.href = './register';
  };

  return (
    <LandingPage>
      <SiteLogo />
      <LandingHero>
        <LandingHeroHeadline>
          Your entire collection in one place
        </LandingHeroHeadline>
        <LandingHeroBody>
          Easily browse and search your entire record collection. Sort your
          collection in any way in just a few clicks. Get more details on each
          record with the Discogs API. Get fun statistics on your collection.
        </LandingHeroBody>
        <LandingHeroCTAs>
          <Button onClick={redirect} solidSuccess medium children='Sign Up' />

          <LandingDemoCTA>
            <StyledFontAwesomeIconDemoCTA icon={faPlayCircle} />
            <p>See how it works</p>
          </LandingDemoCTA>
        </LandingHeroCTAs>
      </LandingHero>
      <FeatureList>
        <Feature
          icon={<FontAwesomeIcon icon={faEye} />}
          title='Browse'
          description='Your entire library in one place'
        />
        <Feature
          icon={<FontAwesomeIcon icon={faSearch} />}
          title='Search'
          description='Quickly find that record with physical location indexing'
        />
        <Feature
          icon={<FontAwesomeIcon icon={faSort} />}
          title='Sort'
          description='Sort your library step-by-step in any order you like'
        />
        <Feature
          icon={<FontAwesomeIcon icon={faInfo} />}
          title='Stats'
          description='Get statistics on your library to reveal information you never knew'
        />
      </FeatureList>
      <FeatureDetailsList>
        <FeatureDetails
          left
          image='https://placeimg.com/300/300/any'
          title='Browse'
          description='Browse through you entire library from anywhere with a visual representation of your physical library , Check the details on any record as well as the the artwork'
        />
        <FeatureDetails
          right
          image='https://placeimg.com/300/300/any'
          title='Search'
          description='Quickly search and find any record in your collection, the physical location of the record and any similar records.'
        />
        <FeatureDetails
          left
          image='https://placeimg.com/300/300/any'
          title='Sort'
          description='Re-organise your collection both digitally and physically by any metric with step by step directions for the fastest solution.'
        />
        <FeatureDetails
          right
          image='https://placeimg.com/300/300/any'
          title='Stats'
          description='Get information on your record collection and each individual record. Including '
        />
        <FeatureDetails
          left
          image='https://placeimg.com/300/300/any'
          title='Discogs API'
          description='Retrieve art work and information about your records with one click from the discogs api. Allowing you to add to your collection quickly and accurately.'
        />
      </FeatureDetailsList>
      <FooterTop>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <StyledPath d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'></StyledPath>
        </svg>
      </FooterTop>
      <FooterBottom>
        <FooterTitle>
          <FooterLogo src={mainLogo} alt='Vinyl Library Logo' /> Vinyl Library
        </FooterTitle>
        <FooterCTA>
          <Button onClick={redirect} solidSuccess medium children='Sign Up' />

          <LandingDemoCTA>
            <StyledFontAwesomeIconDemoCTA icon={faPlayCircle} />
            <p>See how it works</p>
          </LandingDemoCTA>
        </FooterCTA>
        <FooterLine />
        <FooterCopyright>
          <StyledFontAwesomeIconDemoCTA icon={faCopyright} />
          <span>2020 All Rights Reserved.</span>
        </FooterCopyright>
      </FooterBottom>
    </LandingPage>
  );
};

export default About;
