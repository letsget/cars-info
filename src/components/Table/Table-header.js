import React from "react";
import {TABLE_HEADER_TITLES} from '../../constants';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        {TABLE_HEADER_TITLES.map((title, index) => (
          <th key={index}>{title}</th>
        ))}
        <th></th>
      </tr>
    </thead>
  );
};

export { TableHeader };
