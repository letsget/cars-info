import React, { useEffect } from "react";
import Table from "components/Table/Table";
import { TableHeaderText } from "components/Table/TableHeaderText";
import AddCarForm from "components/AddCarForm/Form";
import Header from "components/Header/Header";
import { Footer } from "components/Footer/Footer";
import WelcomeText from "components/WelcomeText/WelcomeText";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import "App.css";
import { loadCarsAsync } from "actions";

const Content = styled.div`
  min-height: calc(100vh - 200px);
`;

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCarsAsync);
  }, [dispatch]);

  const getInitialValues = () => {
    return {
      year: "",
      price: "",
      color: "#fff",
    };
  };

  return (
    <>
      <Header />
      <div className="container">
        <WelcomeText />
        <Content>
          <AddCarForm initialValues={getInitialValues()} />
          <TableHeaderText />
          <Table />
        </Content>
      </div>
      <Footer />
    </>
  );
};

export { Main };
