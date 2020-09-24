import React, { useEffect, useContext } from 'react';
import ImageSlider from '../imageSlider/ImageSlider';
import AuthContext from '../../context/auth/AuthContext';
import './library.css';

const Library = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='library-container'>
      <ImageSlider />
    </div>
  );
};

export default Library;
