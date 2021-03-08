import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import AlertContext from '../../context/alert/AlertContext';
import TextField from '../text field/TextField';
import Form from '../form/Form';
import { FormGroup } from '../form/Style';

import { AltAuthCTA, AuthCTALink } from './Style';

interface LoginProps {
  history: {
    push: (arg0: string) => void;
  };
}

const Login = ({ history }: LoginProps) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    isAuthenticated && history.push('/');

    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, history]);

  const [user, setUser] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e: { target: { name: string; value: string } }) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    email === '' || password === ''
      ? setAlert('Please fill in all Fields', 'danger')
      : login({
          email,
          password,
        });
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
