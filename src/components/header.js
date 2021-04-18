import styled from "styled-components";
import React from "react";

const TopHeader = styled.header`
  display: flex;
  justify-content: center;
  background: #282d30;
  height: 100px;
`;

const Header = () => {
  return (
    <TopHeader>
      <div className="logo">
        <img src="/assets/logo.png" alt="logo" />
      </div>
    </TopHeader>
  );
};

export default Header;
