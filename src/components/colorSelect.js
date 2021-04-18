import React from "react";
import styled from "styled-components";

const List = styled.div`
  display: flex;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0;
  margin-right: 0;
`;

const Circle = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 20px;
  display: block;
  border: none;
  outline: none;
  &:focus {
    outline: 0;
    border: 2px solid #e2e2e2;
  }
`;

const ColorTitle = styled.h2`
  font-size: 12px;
  color: #999999;
`;

const ColorSelect = ({ colorOptions, setColorOption, value, renderActive }) => {
  return (
    <div className="form-group col-md-4">
      <List>
        {colorOptions.map((color) => (
          <Circle
            onClick={setColorOption}
            value={value}
            type="button"
            key={color.color}
            name={color.color}
            style={{
              backgroundColor: color.color,
              border: renderActive(color.color),
            }}
          />
        ))}
      </List>
    </div>
  );
};

export default ColorSelect;
