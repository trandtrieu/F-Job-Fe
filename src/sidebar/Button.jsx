import React, { useState } from "react";

const Button = ({ onClickHandle, value, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    height: "40px",
    width: "90px",
    backgroundColor: isHovered ? "#74C0FC" : "white",
    color: isHovered ? "white" : "black",
    border: "1px solid #e3e3e3",
    transition: "background-color 0.3s ease, color 0.3s ease",
    borderRadius: "8px",
  };

  return (
    <div>
      <button
        onClick={onClickHandle}
        value={value}
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
