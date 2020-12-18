import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import AlertContext from '../../context/alert/AlertContext';
import TextField from '../text field/TextField';
import Form, { FormGroup } from '../form/Form';

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

  const LoginInputs = () => {
    return (
      <>
        <FormGroup>
          <TextField
            type='email'
            name='email'
            placeholder='Email'
            value={email}
            onChange={onChange}
            required
            standard
            medium
          />
        </FormGroup>
        <div className='form-group'>
          <TextField
            type='password'
            name='password'
            value={password}
            placeholder='Password'
            onChange={onChange}
            required
            standard
            medium
          />
        </div>
      </>
    );
  };
  return <Form title='Login' onSubmit={onSubmit} formInputs={LoginInputs} />;
};

export default Login;
