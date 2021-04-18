import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { removeCar } from "../actions";

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

const BtnDelete = ({ id, deleteCar }) => {
  const handleRemove = (id) => deleteCar(id);

  return <DeleteBtn onClick={() => handleRemove(id)}>Удалить</DeleteBtn>;
};

const mapStateToProps = (state) => {
  return {
    cars: state,
  };
};

const mapDispatchToProps = {
  deleteCar: removeCar,
};

export default connect(mapStateToProps, mapDispatchToProps)(BtnDelete);
