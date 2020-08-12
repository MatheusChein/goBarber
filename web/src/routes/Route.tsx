import React from 'react';
import {
  RouteProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/AuthContext';

interface customRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

// true/true = OK
// true/false = Redirecionar para o Login
// false/true = Redirecionar para o Dashboard
// false/false = OK

const Route: React.FC<customRouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => (
        isPrivate === !!user
          ? <Component />
          : (
            <Redirect
              to={{
                pathname: isPrivate ? '/' : '/dashboard',
                state: { from: location },
              }}
            />
          )
      )}
    />
  );
};

export default Route;
