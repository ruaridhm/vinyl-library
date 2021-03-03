import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/auth/AuthContext';
import RecordContext from '../../../context/record/RecordContext';
import mainLogo from '../../images/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import {
  NavbarContainer,
  NavLogo,
  NavLinkList,
  NavLinkListRight,
  NavListItem,
  NavTitle,
} from './Style';

interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  const authContext = useContext(AuthContext);
  const recordContext = useContext(RecordContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearRecords } = recordContext;

  const onLogout = () => {
    logout();
    clearRecords();
  };

  const authLinks = (
    <Fragment>
      <NavListItem>
        <Link to='/user'>Hello {user && user.name}</Link>
      </NavListItem>
      <NavListItem>
        <Link to='/library'>Library</Link>
      </NavListItem>
      <NavListItem>
        <Link to='/sort'>Sort Library</Link>
      </NavListItem>
      <NavListItem>
        <a onClick={onLogout} href='#!'>
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span className=''>Logout</span>
        </a>
      </NavListItem>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <NavListItem>
        <Link to='/about'>About</Link>
      </NavListItem>
      <NavListItem>
        <Link to='/register'>Register</Link>
      </NavListItem>
      <NavListItem>
        <Link to='/login'>Login</Link>
      </NavListItem>
    </Fragment>
  );

  return (
    <NavbarContainer>
      <NavLinkList>
        <NavListItem>
          <Link to='/'>
            <NavTitle>
              <NavLogo src={mainLogo} alt='Site Logo' className='main-logo' />
              {title}
            </NavTitle>
          </Link>
        </NavListItem>
      </NavLinkList>
      <NavLinkListRight>
        {isAuthenticated ? authLinks : guestLinks}
      </NavLinkListRight>
    </NavbarContainer>
  );
};

export default Navbar;