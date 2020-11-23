import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';
import RecordContext from '../../context/record/recordContext';
import mainLogo from '../../images/Logo.png';
import Button from '../button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ title, setDisplayAddRecord, displayAddRecord }) => {
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
  };

  const authLinks = (
    <Fragment>
      <li>
        <Button
          onClick={openAddRecordModal}
          buttonSize='btn--small'
          buttonStyle='btn--success--solid'
        >
          Add Record <FontAwesomeIcon icon={faPlus} />
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
          <FontAwesomeIcon icon={faSignOutAlt} />
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
    <div className='navbar'>
      <ul className='nav-links'>
        <li>
          <Link
            to='/'
            onClick={() => {
              setDisplayAddRecord(false);
            }}
          >
            <h1 className='main-title'>
              <img src={mainLogo} alt='Site Logo' className='main-logo' />{' '}
              {title}
            </h1>
          </Link>
        </li>
      </ul>

      <ul className='nav-links nav-links-right'>
        {isAuthenticated ? authLinks : guestLinks}
      </ul>
    </div>
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
