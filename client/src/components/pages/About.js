import React from 'react';
import Feature from '../feature/Feature';
import Button from '../button/Button';
import './about.css';
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

const About = () => {
  const redirect = () => {
    window.location.href = './register';
  };
  return (
    <div className='landing-page'>
      <div className='site-logo'></div>
      <div className='landing-hero'>
        <h1 className='landing-hero-headline'>
          Your entire collection in one place
        </h1>
        <div className='landing-hero-body'>
          Easily browse and search your entire record collection. Sort your
          collection in any way in just a few clicks. Get more details on each
          record with the Discogs API. Get fun statistics on your collection.
        </div>
        <div className='landing-hero-cta-container'>
          <Button
            onClick={redirect}
            buttonStyle='btn--success--solid'
            buttonSize='btn--medium'
          >
            Sign Up
          </Button>

          <div className='landing-demo-cta'>
            <FontAwesomeIcon
              icon={faPlayCircle}
              className='landing-demo-cta-icon'
            />
            <p>See how it works</p>
          </div>
        </div>
      </div>
      <div className='feature-list'>
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
      </div>
      <div className='feature-details-container'>
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
      </div>
      <div className='footer-top'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
            className='shape-fill'
          ></path>
        </svg>
      </div>
      <div className='footer-bottom'>
        <h1 className='main-title footer-main-title'>
          <img src={mainLogo} alt='Site Logo' className='main-logo' /> Vinyl
          Library
        </h1>
        <div className='footer-cta'>
          <Button
            onClick={redirect}
            buttonStyle='btn--success--solid'
            buttonSize='btn--medium'
          >
            Sign Up
          </Button>
          <div className='landing-demo-cta'>
            <FontAwesomeIcon
              icon={faPlayCircle}
              className='landing-demo-cta-icon'
            />
            <p>See how it works</p>
          </div>
        </div>
        <hr className='landing-footer-horizontal-rule' />
        <div className='landing-footer-copyright'>
          <FontAwesomeIcon
            icon={faCopyright}
            className='landing-demo-cta-icon'
          />
          <span>2020 All Rights Reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default About;
