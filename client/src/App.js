import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/routing/PrivateRoute';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Library from './components/pages/Library';
import Sort from './components/pages/Sort';
import User from './components/pages/User';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import AlertState from './context/alert/AlertState';
import RecordState from './context/record/RecordState';
import AuthState from './context/auth/AuthState';
import setAuthToken from './utils/setAuthToken';
import RecordForm from './components/records/RecordForm';

import SideBar from './components/hamburger/SideBar';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const [displayAddRecord, setDisplayAddRecord] = useState(false);

  return (
    <AuthState>
      <RecordState>
        <AlertState>
          <Router>
            <Fragment>
              <SideBar
                pageWrapId={'page-wrap'}
                outerContainerId={'App'}
                setDisplayAddRecord={setDisplayAddRecord}
                displayAddRecord={displayAddRecord}
              />
              <Navbar
                setDisplayAddRecord={setDisplayAddRecord}
                displayAddRecord={displayAddRecord}
              />

              <Alerts />
              {displayAddRecord ? (
                <RecordForm
                  displayAddRecord={displayAddRecord}
                  setDisplayAddRecord={setDisplayAddRecord}
                />
              ) : null}
              <Switch>
                {/* <PrivateRoute exact path='/'>
                  <Home
                    displayAddRecord={displayAddRecord}
                    setDisplayAddRecord={setDisplayAddRecord}
                  />
                </PrivateRoute> */}

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
  );
};

export default App;
