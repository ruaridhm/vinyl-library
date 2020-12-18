import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';
import RecordContext from '../../context/record/recordContext';
import mainLogo from '../../images/Logo.png';

const SideBarLogo = styled.img`
  max-height: 5rem;
`;

const SideBar = () => {
  const authContext = useContext(AuthContext);
  const recordContext = useContext(RecordContext);
  const { isAuthenticated, logout, user } = authContext;
  const { clearRecords } = recordContext;
  const [menuOpen, setMenuOpen] = useState(false);

  const onLogout = () => {
    logout();
    clearRecords();
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  if (isAuthenticated) {
    return (
      <Menu isOpen={menuOpen} onClick={toggleMenu} right>
        <Link to='/'>
          <SideBarLogo src={mainLogo} alt='Vinyl Library Logo' />
        </Link>

        <Link to='/user'>Hello {user && user.name}</Link>

        <Link to='/library'>Library</Link>

        <Link to='/sort'>Sort Library</Link>

        <a onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt'></i> <span>Logout</span>
        </a>
      </Menu>
    );
  } else {
    return (
      <Menu isOpen={false} right>
        <Link to='/'>
          <SideBarLogo src={mainLogo} alt='Vinyl Library Logo' />
        </Link>

        <Link to='/about'>About</Link>

        <Link to='/register'>Register</Link>

        <Link to='/login'>Login</Link>
      </Menu>
    );
  }
};

SideBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

SideBar.defaultProps = {
  title: 'Vinyl Library',
  icon: mainLogo,
};

export default SideBar;
