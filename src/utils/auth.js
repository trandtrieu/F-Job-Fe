import React from "react";
import { Redirect, Route } from "react-router-dom";

const checkAuth = (role, allowedRoles) => {
  return allowedRoles.includes(role);
};

const ProtectedRoute = ({ component: Component, allowedRoles, ...rest }) => {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const recruiter = JSON.parse(localStorage.getItem("recruiter") || "null");

  return (
    <Route
      {...rest}
      render={(props) => {
        console.log("User:", user);
        console.log("Recruiter:", recruiter);

        if (user && checkAuth(user.role, allowedRoles)) {
          return <Component {...props} />;
        }

        if (recruiter && checkAuth(recruiter.role, allowedRoles)) {
          return <Component {...props} />;
        }

        if (!user && !recruiter) {
          return <Redirect to="/login" />;
        }

        return <Redirect to="/unauthorized" />;
      }}
    />
  );
};

export default ProtectedRoute;
