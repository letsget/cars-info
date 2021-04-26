import React from "react";
import styled from "styled-components";
import {useDispatch} from 'react-redux';
import { removeCar } from "actions";

const DeleteBtn = styled.button`
  padding: 10px 15px;
  color: #abb1b3;
  cursor: pointer;
  border-radius: 20px;
  border: none;
  outline: none;
  transition: ease-in-out 0.4s;
  background: none;

  &:hover {
    background: #282d30;
    color: #fff;
    padding: 10px 15px;
    border-radius: 20px;
  }
`;

const BtnDelete = ({ id }) => {
  const dispatch = useDispatch();

 const handleRemove = () => dispatch(removeCar(id));

  return <DeleteBtn onClick={handleRemove}>Удалить</DeleteBtn>;
};

export { BtnDelete };
