import React from "react";
import Button from "./Button";
import InputField from "../components/InputField";


const Salary = ({ handleChange, handleClick }) => {
  return (
    <div>
      <h4 className="text-lg mb-2" style={{ fontSize:"19px", fontWeight:"bold"}}>Salary</h4>
      <div className="button-container" style={{ display: "flex", gap: "10px" }}>
        <Button onClickHandle={handleClick} value="Monthly" title="Monthly" />
        <Button onClickHandle={handleClick} value="Yearly" title="Yearly" />
      </div>

      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checmark"></span> All
        </label>
        <InputField
          handleChange={handleChange}
          value={9000000}
          title="<9000000"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={10000000}
          title="<10000000"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={12000000}
          title="<12000000"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={15000000}
          title="<15000000"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={30000000}
          title="<30000000"
          name="test"
        />


      </div>
    </div>
  );
};

export default Salary;
