import React from "react";
import { BtnDelete } from "../Buttons/BtnDelete";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { formatNumber, formatStatus } from "utils";
import { COLORS } from "../../constants";

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
  return (
    <>
      <tbody>
        {cars &&
          cars.map(({ id, title, description, year, color, status, price }) => (
            <tr key={id}>
              <td className="align-middle col-lg-4">
                {title}
                {description && (
                  <span className="item-desc">{description}</span>
                )}
              </td>
              <td className="align-middle">{year}</td>
              <td className="align-middle">
                <Circle
                  style={{
                    backgroundColor: COLORS[`${color}`],
                  }}
                />
              </td>
              <td className="align-middle">{formatStatus(status)}</td>
              <td className="align-middle">{formatNumber(price)}</td>
              <td className="align-middle">
                <BtnDelete id={id} />
              </td>
            </tr>
          ))}
      </tbody>
    </>
  );
};

export { TableBody };
