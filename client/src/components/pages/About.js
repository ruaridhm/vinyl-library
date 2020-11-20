import React from 'react';
import Feature from '../feature/Feature';
import Button from '../button/Button';
import './about.css';

const About = () => {
  const redirect = () => {
    window.location.href = './register';
  };
  return (
    <>
      <div className='site-logo'></div>
      <div className='landing-hero'>
        <h1 className='landing-hero-headline'>
          Your entire collection in one place
        </h1>
        <div className='landing-hero-body'>
          Easily browse and search your entire record collection. Sort your
          collection in any way in just a few clicks. Get more details on each
          record with the Discogs api Get fun statistics on your collection.
        </div>
        <div className='landing-hero-cta-container'>
          {/* <a href='./register'> */}
          <Button
            onClick={redirect}
            buttonStyle='btn--success--solid'
            buttonSize='btn--medium'
          >
            Sign Up
          </Button>
          {/* </a> */}

          <div className='landing-demo-cta'>
            <i class='fas fa-play-circle landing-demo-cta-icon'></i>
            <p>See how it works</p>
          </div>
        </div>
      </div>
      <div className='feature-list'>
        <Feature
          icon={<i class='far fa-eye'></i>}
          title='Browse'
          description='Your entire library in one place'
        />
        <Feature
          icon={<i class='fas fa-search'></i>}
          title='Search'
          description='Quickly find that record with physical location indexing'
        />
        <Feature
          icon={<i class='fas fa-sort'></i>}
          title='Sort'
          description='Sort your library step-by-step in any order you like'
        />
        <Feature
          icon={<i class='fas fa-info'></i>}
          title='Stats'
          description='Get statistics on your library to reveal information you never knew'
        />
      </div>
    </>
    // <div>
    //   <h2>Browse, Sort and Your entire collection in one place!</h2>
    //   <h3>Features:</h3>
    //   <ul>
    //     <li>Searchable</li>
    //     <li>Physical Location Indexes</li>
    //     <li>Linked to the Discogs api</li>
    //     <li>Sort your library</li>
    //     <li>Library Stats</li>
    //   </ul>
    // </div>
  );
};

export default About;
