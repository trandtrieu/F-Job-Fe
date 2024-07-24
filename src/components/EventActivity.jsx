// EventActivity.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.css";

function EventActivity() {
  return (
    <div className="Event">
      <p className="event-name">Event Activity </p>
      <div className="event-card">
        <p
          className="event1"
          style={{ color: "black", fontSize: "15px", fontWeight: "bold" }}>
          {" "}
          <FontAwesomeIcon
            icon={faBell}
            style={{ color: "#e11919", fontSize: "20px" }}/>{" "}
          High-performance recruitment and management solutions
        </p>
      </div>

      <div className="Event-card">
        <p
          className="event1"
          style={{ color: "black", fontSize: "15px", fontWeight: "bold" }}>
          {" "}
          <FontAwesomeIcon icon={faBell} style={{color: "#FFD43B", fontSize: "20px"}} />
          {" "}
          Update account authentication policy
        </p>
      </div>
      <div className="Event-card">
        <p
          className="event1"
          style={{ color: "black", fontSize: "15px", fontWeight: "bold" }}>
          {" "}
          <FontAwesomeIcon icon={faBell} style={{color: "#3d9bff", fontSize: "20px"}} />
          {" "}
          Developing a platform for evaluating human resource capacity
        </p>
      </div>
      <div className="Event-card">
        <p
          className="event1"
          style={{ color: "black", fontSize: "15px", fontWeight: "bold" }}>
          {" "}
          <FontAwesomeIcon icon={faBell} style={{color: "#25b628", fontSize: "20px"}} />
          {" "}
          Opportunity to immediately receive a free English course specifically for IT
        </p>
      </div>
    </div>
  );
}

export default EventActivity;
