import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import AlertContext from '../../context/alert/AlertContext';
import Button from '../button/Button';
import TextField from '../text field/TextField';

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill in all Fields', 'danger');
    } else {
      login({
        email,
        password,
      });
    }
  };
  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Login</span>
      </h1>
      <form onSubmit={onSubmit} className='form'>
        <div className='form-group'>
          <TextField
            type='email'
            name='email'
            placeholder='Email'
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <TextField
            type='password'
            name='password'
            value={password}
            placeholder='Password'
            onChange={onChange}
            required
          />
        </div>
        <Button
          type='submit'
          buttonSize='btn--medium'
          buttonStyle='btn--success--solid'
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
