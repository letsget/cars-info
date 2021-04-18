import React from "react";
import { connect } from "react-redux";

const tableHeaderTitles = ["Название", "год", "цвет", "статус", "цена"];

const TableHeader = ({ cars }) => {
  if (cars.length) {
    return (
      <thead>
        <tr>
          {tableHeaderTitles.map((title, index) => (
            <th key={index}>{title}</th>
          ))}
          <th></th>
        </tr>
      </thead>
    );
  } else {
    return null;
  }
};

const mapState = (state) => {
  return {
    cars: state,
  };
};

export default connect(mapState)(TableHeader);
