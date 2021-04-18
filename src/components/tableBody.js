import React, { useState, useEffect } from "react";
import ButtonDelete from "./btnDelete";
import styled from "styled-components";
import { connect } from "react-redux";
import axios from "axios";
import { carsLoaded } from "../actions";
const url =
  "https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26/frontend_test_table.json";

const Circle = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 20px;
  display: block;
`;

const TableBody = ({ cars, loadCars }) => {
  const colors = {
    white: "#fff",
    black: "#000",
    grey: "#cbcbcc",
    red: "#d74345",
    green: "#88c504",
    "#fff": "#fff",
    "#000": "#000",
    "#cbcbcc": "#cbcbcc",
    "#d74345": "#d74345",
    "#88c504": "#88c504",
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url);
      loadCars(result.data);
      //setData(result.data); // вместо setData Dispatch - action CARS_LOADED_SUCCESS
    };
    fetchData();
  }, []);

  const formatStatus = (status) => {
    switch (status) {
      case "pednding":
        return "ожидается";
      case "out_of_stock":
        return "нет в наличии";
      case "in_stock":
        return "в наличии";
      default:
        return status;
    }
  };

  const formatNumber = (num) => num.toLocaleString("ru") + "\xa0₽";

  return (
    <>
      <tbody>
        {cars.map(({ id, title, description, year, color, status, price }) => (
          <tr key={id}>
            <td className="align-middle col-lg-4">
              {title}
              {description && <span className="item-desc">{description}</span>}
            </td>
            <td className="align-middle">{year}</td>
            <td className="align-middle">
              <Circle
                style={{
                  backgroundColor: colors[`${color}`],
                  border: color === "white" ? "1px solid #e2e2e2" : "none",
                }}
              />
            </td>
            <td className="align-middle">{formatStatus(status)}</td>
            <td className="align-middle">{formatNumber(price)}</td>
            <td className="align-middle">
              <ButtonDelete id={id} />
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cars: state,
  };
};

const mapDispatchToProps = {
  loadCars: carsLoaded,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableBody);
