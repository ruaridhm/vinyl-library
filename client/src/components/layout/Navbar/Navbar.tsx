import React, { Fragment, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/auth/AuthContext';
import RecordContext from '../../../context/record/RecordContext';
import mainLogo from '../../../images/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Modal from '../../modal/Modal';
import ToggleSwitch from '../../toggleSwitch/ToggleSwitch';

import {
  NavbarContainer,
  NavLogo,
  NavLinkList,
  NavLinkListRight,
  NavListItem,
  NavTitle,
  ThemeToggleContainer,
} from './Style';

interface NavbarProps {
  title: string;
  toggleTheme: () => void;
}

const Navbar = ({ title, toggleTheme }: NavbarProps) => {
  const authContext = useContext(AuthContext);
  const recordContext = useContext(RecordContext);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState<boolean>(false);
  const { isAuthenticated, logout, user } = authContext;
  const { clearRecords } = recordContext;

  const [mode, setMode] = useState(false);

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
        <ToggleSwitch
          name='newsletter'
          onValue={
            <FontAwesomeIcon icon={faMoon} style={{ color: '#121212' }} />
          }
          offValue={<FontAwesomeIcon icon={faSun} style={{ color: '#f90' }} />}
          checked={mode}
          onChange={() => {
            setMode(!mode);
            toggleTheme();
          }}
          icon
        />
      </NavListItem>
      <NavListItem>
        <Link
          onClick={() => {
            setShowLogoutConfirm(!showLogoutConfirm);
          }}
          to='#!'
        >
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span className=''>Logout</span>
        </Link>
      </NavListItem>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <NavListItem>
        <Link to='/register'>Register</Link>
      </NavListItem>
      <NavListItem>
        <Link to='/login'>Login</Link>
      </NavListItem>
      <NavListItem>
        <Link to='/about'>About</Link>
      </NavListItem>
      <NavListItem>
        <ToggleSwitch
          name='newsletter'
          onValue={
            <FontAwesomeIcon icon={faMoon} style={{ color: '#121212' }} />
          }
          offValue={<FontAwesomeIcon icon={faSun} style={{ color: '#f90' }} />}
          checked={mode}
          onChange={() => {
            setMode(!mode);
            toggleTheme();
          }}
          icon
        />
      </NavListItem>
    </Fragment>
  );

  return (
    <>
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

        <ThemeToggleContainer>
          <ToggleSwitch
            name='newsletter'
            onValue={
              <FontAwesomeIcon icon={faMoon} style={{ color: '#121212' }} />
            }
            offValue={
              <FontAwesomeIcon icon={faSun} style={{ color: '#f90' }} />
            }
            checked={mode}
            onChange={() => {
              setMode(!mode);
              toggleTheme();
            }}
            icon
          />
        </ThemeToggleContainer>
      </NavbarContainer>
      <Modal
        bodyText='Are you sure you want to logout?'
        confirm={() => {
          onLogout();
          setShowLogoutConfirm(!showLogoutConfirm);
        }}
        confirmIcon={<FontAwesomeIcon icon={faSignOutAlt} />}
        confirmText='Logout'
        headerText='Confirm Logout'
        close={() => {
          setShowLogoutConfirm(!showLogoutConfirm);
        }}
        show={showLogoutConfirm}
      />
    </>
  );
};

export default Navbar;
