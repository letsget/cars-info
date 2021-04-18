import React, { useEffect, useState } from "react";
import Table from "components/Table";
import { TableHeaderText } from "components/tableHeaderText";
import AddCarForm from "components/form";
import Header from "components/header";
import Footer from "components/footer";
import WelcomeText from "components/welcomeText";
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
