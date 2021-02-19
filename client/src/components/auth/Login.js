import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import AlertContext from '../../context/alert/AlertContext';
import TextField from '../text field/TextField';
import Form, { FormGroup } from '../form/Form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AltAuthCTA = styled.span`
  display: flex;
  justify-content: center;
`;

const AuthCTALink = styled(Link)`
  padding-left: 0.25rem;
  text-decoration: none;
  color: #0b00d6;
`;

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
            title='Email'
            value={email}
            onChange={onChange}
            required
            standard
            medium
          />
        </FormGroup>
        <FormGroup>
          <TextField
            type='password'
            name='password'
            value={password}
            title='Password'
            onChange={onChange}
            required
            standard
            medium
          />
        </FormGroup>
      </>
    );
  };
  return (
    <>
      <Form title='Login' onSubmit={onSubmit} formInputs={LoginInputs} />
      <AltAuthCTA>
        Don't have an Account?
        <AuthCTALink to='/register'>Register Here</AuthCTALink>
      </AltAuthCTA>
    </>
  );
};

export default Login;
