import React from "react";
import styled from "styled-components";

const FooterContent = styled.footer`
  background: #282d30;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 100px;

  > span {
    color: #a4a5a6;
  }
`;

const Footer = () => {
  return (
    <FooterContent>
      <span>
        <p>
          <span style={{ textTransform: "uppercase" }}>
            © 2020 CAPTAIN QUACK
          </span>
          <br /> Десница тысячелетия и моллюск!
        </p>
      </span>
    </FooterContent>
  );
};

export default Footer;
