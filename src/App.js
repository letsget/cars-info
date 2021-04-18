import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import WithFormik from "./components/withFormik";
import "./App.css";
import WelcomeText from "./components/welcomeText";
import Table from "./components/Table";
import TableHeaderText from "./components/tableHeaderText";
import styled from "styled-components";
import AddCarForm from "./components/form";

const Content = styled.div`
  min-height: calc(100vh - 200px);
`;

function App() {
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
}

export default App;
