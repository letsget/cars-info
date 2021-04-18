import React from "react";
import ButtonDelete from "./btnDelete";
import {useSelector} from 'react-redux';
import styled from "styled-components";
import { formatNumber, formatStatus  } from "../utils";

const Circle = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 20px;
  display: block;
`;

const TableBody = () => {
  const cars = useSelector(({ app: { cars } }) => cars);
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

  return (
    <>
      <tbody>
        {cars && cars.map(({ id, title, description, year, color, status, price }) => (
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

export { TableBody };
