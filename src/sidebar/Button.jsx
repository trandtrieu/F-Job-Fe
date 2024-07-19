import React, { Component } from "react";
import JobFinder from "../layout/JobFinder";

const Button = ({ onClickHandle, value, title }) => {
  return (
    <div>
      <button
        onClick={onClickHandle}
        value={value}
        className={`py-4 py-1 border text-base hover:bg-blue hover:text-white`}>
            {title}
        </button>
    </div>
  );
};

export default Button;
