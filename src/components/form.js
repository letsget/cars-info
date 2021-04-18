import { addCar } from "../actions";
import * as Yup from "yup";
import { Button } from "./Button";
import Select from "./Select";
import ColorSelect from "./ColorSelect";
import React from "react";
import { Formik, useFormik, Form, ErrorMessage } from "formik";
import { connect } from "react-redux";
const shortid = require("shortid");

const AddCarForm = ({ addCar }) => {
  const statusOptions = ["в наличии", "ожидается", "нет в наличии"];
  const colorOptions = [
    { color: "#fff" },
    { color: "#000" },
    { color: "#cbcbcc" },
    { color: "#d74345" },
    { color: "#88c504" },
  ];
  const renderActive = (color) => {
    if (color === "#fff") {
      return "2px solid #e2e2e2";
    }
  };

  const setColorOption = ({ target }) => {
    formik.values["colorOption"] = target.name;
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Please enter a title"),
    year: Yup.number().min(4, "Too Short!").required("Please enter a number"),
    price: Yup.number().required("Required"),
    description: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      year: "",
      price: "",
      description: "",
      status: "в наличии",
      colorOption: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      const {
        title,
        year,
        price,
        description,
        status,
        colorOption,
      } = formik.values;
      addCar(
        shortid.generate(),
        title,
        description,
        year,
        colorOption,
        status,
        price
      );
      resetForm({ values: "" });
    },
  });
  return (
    <>
      <Formik>
        <Form onSubmit={formik.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-4">
              <input
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.title}
                name="title"
                placeholder="название"
              />
            </div>
            <div className="form-group col-md-4">
              <input
                type="number"
                value={formik.values.year}
                onChange={formik.handleChange}
                name="year"
                className="form-control"
                placeholder="Год"
              />
            </div>
            <div className="form-group col-md-4">
              <input
                type="number"
                name="price"
                value={formik.values.price}
                onChange={formik.handleChange}
                className="form-control"
                placeholder="цена"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <input
                className="form-control"
                value={formik.values.description}
                onChange={formik.handleChange}
                name="description"
                placeholder="Описание"
              />
            </div>
          </div>
          <div className="form-row">
            <ColorSelect
              colorOptions={colorOptions}
              setColorOption={setColorOption}
              value={formik.values.colorOption}
              renderActive={renderActive}
            />
            <Select
              handleChange={formik.handleChange}
              statusOptions={statusOptions}
              value={formik.values.status}
              name="status"
            />
            <Button />
          </div>
        </Form>
      </Formik>
    </>
  );
};

const mapDispatchToProps = {
  addCar,
};

export default connect(undefined, mapDispatchToProps)(AddCarForm);
