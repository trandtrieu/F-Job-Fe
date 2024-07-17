import React, { useContext } from "react";
import Banner from "./Banner";
import { UserContext } from "../utils/UserContext";
import JobList from "./JobList";

export default function Home() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Banner />
      <JobList />
    </div>
  );
}
