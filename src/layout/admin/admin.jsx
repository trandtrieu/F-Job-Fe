import React from "react";
import withAuthorization from "./utils/withAuthorization";

const AdminPage = () => {
  return <div>Welcome, Admin!</div>;
};

export default withAuthorization(["admin"])(AdminPage);
