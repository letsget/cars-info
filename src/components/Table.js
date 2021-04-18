import React from "react";
import TableHeader from "./table-header";
import {TableBody} from "./tableBody";

const Table = ({ colors }) => {
  return (
    <table className="table table-hover">
      <TableHeader />
      <TableBody colors={colors} />
    </table>
  );
};

export default Table;
