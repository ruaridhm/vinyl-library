import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/routing/PrivateRoute';
import Navbar from './components/layout/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import Library from './components/pages/Library/Library';
import Sort from './components/pages/Sort/Sort';
import User from './components/pages/User/User';
import About from './components/pages/About/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts/Alerts';
import AlertState from './context/alert/AlertState';
import RecordState from './context/record/RecordState';
import AuthState from './context/auth/AuthState';
import setAuthToken from './utils/setAuthToken';

import SideBar from './components/hamburger/SideBar';

import { ThemeProvider } from 'styled-components';
import { ColorVariables } from './variables';

import './App.scss';

localStorage.token && setAuthToken(localStorage.token);

const App: React.FC = () => {
  return (
    <ThemeProvider theme={ColorVariables}>
      <AuthState>
        <RecordState>
          <AlertState>
            <Router>
              <Fragment>
                <SideBar pageWrapId={'page-wrap'} outerContainerId={'App'} />
                <Navbar title='Vinyl Library' />
                <Alerts />
                <Switch>
                  <PrivateRoute exact path='/' component={Home} />
                  <PrivateRoute exact path='/user' component={User} />
                  <PrivateRoute exact path='/library' component={Library} />
                  <PrivateRoute exact path='/sort' component={Sort} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </Fragment>
            </Router>
          </AlertState>
        </RecordState>
      </AuthState>
    </ThemeProvider>
  );
};

export default App;
