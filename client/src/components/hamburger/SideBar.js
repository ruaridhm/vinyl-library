import React, { useState, useContext } from 'react';
import { slide as Menu } from 'react-burger-menu';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';
import RecordContext from '../../context/record/recordContext';
import mainLogo from '../../images/Logo.png';
import Button from '../button/Button';

import './sidebar.css';

const SideBar = ({ setDisplayAddRecord, displayAddRecord }) => {
  const authContext = useContext(AuthContext);
  const recordContext = useContext(RecordContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearRecords } = recordContext;

  const [menuOpen, setMenuOpen] = useState(false);

  const onLogout = () => {
    logout();
    clearRecords();
    setDisplayAddRecord(false);
  };

  const openAddRecordModal = () => {
    setDisplayAddRecord(!displayAddRecord);
    console.log(displayAddRecord);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  if (isAuthenticated) {
    return (
      <Menu isOpen={menuOpen} onClick={toggleMenu} right>
        <Link
          to='/'
          onClick={() => {
            setDisplayAddRecord(false);
          }}
        >
          <img src={mainLogo} alt='Site Logo' className='main-logo-sidebar' />
        </Link>
        <Button
          onClick={openAddRecordModal}
          buttonSize='btn--small'
          className='sidebar-button'
        >
          Add Record <i className='fas fa-plus'></i>
        </Button>

        <Link
          to='/user'
          onClick={() => {
            setDisplayAddRecord(false);
          }}
        >
          Hello {user && user.name}
        </Link>

        <Link
          to='/library'
          onClick={() => {
            setDisplayAddRecord(false);
          }}
        >
          Library
        </Link>

        <Link
          to='/sort'
          onClick={() => {
            setDisplayAddRecord(false);
          }}
        >
          Sort Library
        </Link>

        <a onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt'></i>{' '}
          <span className=''>Logout</span>
        </a>
      </Menu>
    );
  } else {
    return (
      <Menu isOpen={false} right>
        <Link
          to='/'
          onClick={() => {
            setDisplayAddRecord(false);
          }}
        >
          <img src={mainLogo} alt='Site Logo' className='main-logo-sidebar' />
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
