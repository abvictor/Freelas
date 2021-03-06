import React from "react";
import { Route as ReactDOMRoute, Redirect } from "react-router-dom";
import { useAuth } from "../hooks/auth";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { user } = useAuth();
  const isSigned = !!user;

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === isSigned ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? "/" : "/dashboard",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
