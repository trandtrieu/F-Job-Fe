import React from "react";
import { useHistory } from "react-router-dom";
import "../assest/css/Unauthorized.css";
const Unauthorized = () => {
  const history = useHistory();

  const handleGoHome = () => {
    history.push("/");
  };
  return (
    <div className="unauthorized-container">
      <div className="unauthorized-content">
        <h1>Unauthorized</h1>
        <p>Sorry, you are not allowed to access this page!!!</p>
        <button onClick={handleGoHome} className="btn-unauthorized">
          Go to Home
        </button>
      </div>
    </div>
  );
};
export default Unauthorized;
