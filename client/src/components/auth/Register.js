import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/AlertContext';
import AuthContext from '../../context/auth/AuthContext';
import TextField from '../text field/TextField';
import Form, { FormGroup } from '../form/Form';

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error === 'User already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    console.log('onSubmit called');
    e.preventDefault();
    if (name === '' || email === '' || password === '' || password2 === '') {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };

  const RegisterInputs = () => {
    return (
      <>
        <FormGroup>
          <TextField
            placeholder='Name'
            type='text'
            name='name'
            value={name}
            onChange={onChange}
            required
            standard
            medium
          />
        </FormGroup>
        <FormGroup>
          <TextField
            placeholder='Email'
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            required
            standard
            medium
          />
        </FormGroup>
        <FormGroup>
          <TextField
            placeholder='Password'
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            required
            minLength='6'
            standard
            medium
          />
        </FormGroup>
        <FormGroup>
          <TextField
            placeholder='Confirm Password'
            type='password'
            name='password2'
            value={password2}
            onChange={onChange}
            required
            minLength='6'
            standard
            medium
          />
        </FormGroup>
      </>
    );
  };

  return (
    <Form title='Register' onSubmit={onSubmit} formInputs={RegisterInputs} />
  );
};

export default Register;
