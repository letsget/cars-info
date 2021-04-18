import React, { useEffect, useState } from "react";
import Table from "components/Table";
import { TableHeaderText } from "components/TableHeaderText";
import AddCarForm from "components/Form";
import Header from "components/Header";
import { Footer } from "components/Footer";
import WelcomeText from "components/WelcomeText";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import "../App.css";
import { loadCarsAsync } from "actions";

const Content = styled.div`
  min-height: calc(100vh - 200px);
`;

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCarsAsync);
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="container">
        <WelcomeText />
        <Content>
          <AddCarForm />
          <TableHeaderText />
          <Table />
        </Content>
      </div>
      <Footer />
    </>
  );
};

export { Main };
