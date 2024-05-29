import React, { useContext } from "react";
import Banner from "./Banner";
import { UserContext } from "../utils/UserContext";

export default function Home() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Banner />
      {user ? (
        <div>
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
