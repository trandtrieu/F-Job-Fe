import React from "react";
import { Redirect, Route } from "react-router-dom";

const checkAuth = (role, allowedRoles) => {
  return allowedRoles.includes(role);
};

const ProtectedRoute = ({ component: Component, allowedRoles, ...rest }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const recruiter = JSON.parse(localStorage.getItem("recruiter"));

  console.log(recruiter);
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          checkAuth(user.role, allowedRoles) ? (
            <Component {...props} />
          ) : (
            <Redirect to="/unauthorized" />
          )
        ) : recruiter ? (
          checkAuth(recruiter.role, allowedRoles) ? (
            <Component {...props} />
          ) : (
            <Redirect to="/unauthorized" />
          )
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;