import React, { useState, useEffect, useContext } from "react";
import Banner from "./Banner";
import { UserContext } from "../utils/UserContext";
import JobList from "./JobList";
import Design from "./Design";

export default function Home() {
  const { user } = useContext(UserContext);

  return (
    <div>

      <Banner />
      <JobList />
      <Design />
    </div>
  );
}
