import React, { useContext } from "react";
import { UserContext } from "../utils/UserContext";

export default function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <div className="page-wrapper">
          <p>
            Welcome, {user.firstname} {user.lastname}
          </p>
          <p>Your ID: {user._id}</p>
        </div>
      ) : (
        <p>Please log in to see your information.</p>
      )}
    </div>
  );
}
