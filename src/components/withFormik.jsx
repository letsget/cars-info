import React from "react";
import * as Yup from "yup";
import { Formik, ErrorMessage, Field, Form } from "formik";

const signScheme = Yup.object().shape({
  email: Yup.string()
    .required("This field is required")
    .email("Must be a valid email"),
  password: Yup.string()
    .required("This field is required")
    .min(8, "Must be at least 8 characters"),
});

const WithFormik = (props) => {
  const handleSubmit = (values) => {
    console.log(`email ${values.email} password ${values.password}`);
  };

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={signScheme}
      >
        {({ dirty, handleReset, isValid }) => (
          <Form>
            <div>
              <label htmlFor="email"> Email: </label>
              <Field name="email" />
              <ErrorMessage name="email" />
            </div>
            <div>
              <label htmlFor="password"> Password: </label>
              <Field name="password" />
              <ErrorMessage name="password" />
            </div>
            <button disabled={!isValid || !dirty} type="submit">
              send
            </button>
            <button onClick={handleReset}>reset</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default WithFormik;
