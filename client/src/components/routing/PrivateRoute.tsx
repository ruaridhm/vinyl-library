import React, { useContext } from 'react';
import { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';

interface PrivateRouteProps {
  component: React.FC<{}>;
  exact: boolean;
  path: string;
}

const PrivateRoute = ({ component, ...rest }: PrivateRouteProps) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated && !loading ? (
          <Redirect to='/login' />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
