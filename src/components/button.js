import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  width: 100%;
  background-color: #c4092f;
  color: #fff;
  text-transform: uppercase;

  &:hover {
    color: #fff;
  }

  > i {
    padding-left: 7px;
  }
`;
const Button = () => {
  return (
    <div className="form-group col-md-4">
      <Btn type="submit" className="btn">
        отправить
        <i className="fas fa-chevron-right" />
      </Btn>
    </div>
  );
};

export { Button };
