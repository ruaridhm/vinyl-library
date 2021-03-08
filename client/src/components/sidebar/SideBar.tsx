import React, { useContext } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';
import RecordContext from '../../context/record/RecordContext';
import mainLogo from '../../images/Logo.png';

import { SideBarLogo } from './Style';

type SidebarProps = {
  pageWrapId: string;
  outerContainerId: string;
};

const SideBar = () => {
  const authContext = useContext(AuthContext);
  const recordContext = useContext(RecordContext);
  const { isAuthenticated, logout, user } = authContext;
  const { clearRecords } = recordContext;

  const onLogout = () => {
    logout();
    clearRecords();
  };

  if (isAuthenticated) {
    return (
      <Menu right>
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
      <Menu right>
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
export default SideBar;
