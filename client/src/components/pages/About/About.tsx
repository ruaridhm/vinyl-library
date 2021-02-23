import React from 'react';
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

import {
  LandingPage,
  SiteLogo,
  LandingHero,
  LandingHeroHeadline,
  LandingHeroBody,
  LandingHeroCTAs,
  LandingDemoCTA,
  FeatureList,
  FeatureDetailsList,
  FooterTop,
  StyledPath,
  FooterTitle,
  FooterLogo,
  FooterCTA,
  StyledFontAwesomeIconDemoCTA,
  FooterLine,
  FooterCopyright,
} from './Style';

const About: React.FC = () => {
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
          <Button
            onClick={redirect}
            type='button'
            solidSuccess
            medium
            children='Sign Up'
          />

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
          <Button
            onClick={redirect}
            type='button'
            solidSuccess
            medium
            label='Sign Up'
          />

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
