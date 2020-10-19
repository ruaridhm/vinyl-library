import React, { Fragment, useContext } from 'react';
import { slide as Menu } from 'react-burger-menu';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';
import RecordContext from '../../context/record/recordContext';
import mainLogo from '../../images/Logo.png';
import Button from '../button/Button';

import './sidebar.css';

const SideBar = ({ title, icon, setDisplayAddRecord, displayAddRecord }) => {
  const authContext = useContext(AuthContext);
  const recordContext = useContext(RecordContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearRecords } = recordContext;

  const onLogout = () => {
    logout();
    clearRecords();
    setDisplayAddRecord(false);
  };

  const openAddRecordModal = () => {
    setDisplayAddRecord(!displayAddRecord);
    console.log(displayAddRecord);
  };

  const authLinks = (
    <Fragment>
      <li>
        <Button
          onClick={openAddRecordModal}
          buttonSize='btn--small'
          className='sidebar-button'
        >
          Add Record <i className='fas fa-plus'></i>
        </Button>
      </li>
      <li>
        <Link
          to='/user'
          onClick={() => {
            setDisplayAddRecord(false);
          }}
        >
          Hello {user && user.name}
        </Link>
      </li>
      <li>
        <Link
          to='/library'
          onClick={() => {
            setDisplayAddRecord(false);
          }}
        >
          Library
        </Link>
      </li>
      <li>
        <Link
          to='/sort'
          onClick={() => {
            setDisplayAddRecord(false);
          }}
        >
          Sort Library
        </Link>
      </li>
      <li>
        <a onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt'></i>{' '}
          <span className=''>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  );

  return (
    <Menu isOpen={false} right>
      <Link
        to='/'
        onClick={() => {
          setDisplayAddRecord(false);
        }}
      >
        <h1 className='main-title'>
          <img src={mainLogo} alt='Site Logo' className='main-logo' /> {title}
        </h1>
      </Link>

      <ul className='nav-links'>{isAuthenticated ? authLinks : guestLinks}</ul>
    </Menu>
  );
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
