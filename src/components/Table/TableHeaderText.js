import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Text = styled.h2`
  text-transform: uppercase;
  margin-top: 100px;
  margin-bottom: 40px;
  margin-left: 17px;
  color: #282d30;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 3px;
    height: 23px;
    background: #8b9497;
    display: block;
    left: -19px;
    top: 7px;
  }
`;

const TableHeaderText = () => {
  const cars = useSelector(({ app: { cars } }) => cars);
  if (cars.length) {
    return <Text>Автомобили в наличии</Text>;
  } else {
    return <Text>Нет автомобилей в наличии</Text>;
  }
};

export { TableHeaderText };
