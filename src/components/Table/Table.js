import React from "react";
import { TableHeader } from "./Table-header";
import { useSelector } from "react-redux";
import { TableBody } from "./TableBody";

const Table = ({ colors }) => {
  const cars = useSelector(({ app: { cars } }) => cars);

  return (
    cars.length ? <table className="table table-hover">
      <TableHeader />
      <TableBody colors={colors} />
    </table> : null
  );
};

export default Table;
