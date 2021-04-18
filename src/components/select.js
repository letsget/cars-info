import React from "react";

const Select = ({ handleChange, value, name, statusOptions }) => {
  return (
    <div className="form-group col-md-4">
      <select
        onChange={handleChange}
        value={value}
        name={name}
        className="form-control custom-select"
      >
        {statusOptions.map((option, idx) => {
          return <option key={idx}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
