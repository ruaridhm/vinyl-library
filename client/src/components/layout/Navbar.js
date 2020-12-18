import React, { Fragment, useContext } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';
import RecordContext from '../../context/record/recordContext';
import mainLogo from '../../images/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.secondaryColor};
  padding-left: 1em;
`;

const NavLogo = styled.img`
  height: 1.2em;
  margin-right: 0.25em;
`;

const NavLinkList = styled.ul`
  display: flex;
  list-style: none;
  font-weight: bold;
  color: ${(props) => props.theme.backgroundLight};
  margin: 0;
`;

const NavLinkListRight = styled(NavLinkList)`
  @media (max-width: 981px) {
    display: none;
  }
`;

const NavListItem = styled.li`
  margin: 1em;
  color: ${(props) => props.theme.backgroundLight};
  display: flex;
  align-items: center;
  a {
    color: ${(props) => props.theme.backgroundLight};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      color: ${(props) => props.theme.lightColor};
    }
  }
`;

const NavTitle = styled.h1`
  display: flex;
  align-items: center;
  margin: 0;
  white-space: nowrap;
  color: ${(props) => props.theme.lightColor};
`;

const Navbar = ({ title }) => {
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

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'Vinyl Library',
  icon: mainLogo,
};

export default Navbar;
