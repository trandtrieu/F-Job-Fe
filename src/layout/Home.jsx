import React, { useContext } from "react";
import Banner from "./Banner";
import { UserContext } from "../utils/UserContext";

export default function Home() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Banner />
    </div>
  );
}
