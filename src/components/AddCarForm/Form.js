import React from "react";
import { addCar } from "../../actions";
import { Button } from "../Buttons/Button";
import {useDispatch} from 'react-redux';
import {required} from "../../validation";
import { Field, reduxForm, reset } from "redux-form";
import { textInput, customSelect, customRadioField} from "fields";
import { STATUS_OPTIONS, COLOR_OPTIONS } from "../../constants";
import {v4 as uuid} from 'uuid';



const AddCarForm = ({ handleSubmit, values }) => {
  const dispatch = useDispatch()
  

  const afterSubmit = ( values ) => {
     const data = {
       id: uuid(),
       ...values,
     }
     dispatch(addCar(data));
     dispatch(reset("addCar"));
   };

  return (
    <form onSubmit={handleSubmit(afterSubmit, values )}>
      <div className="form-row">
        <Field
          type="text"
          name="title"
          component={textInput}
          minLength={3}
          maxLength={20}
          validate={required}
          inputclasses={"form-control"}
          blockClasses={"form-group col-md-4"}
          label={"название"}
        />
        <Field
          type="number"
          name="year"
          maxLength={4}
          component={textInput}
          validate={required}
          inputclasses={"form-control"}
          blockClasses={"form-group col-md-4"}
          label="Год"
        />
        <Field
          type="number"
          name="price"
          component={textInput}
          maxLength={20}
          validate={required}
          inputclasses={"form-control"}
          blockClasses={"form-group col-md-4"}
          label="Цена"
        />
      </div> 
       <div className="form-row">
        <Field
          type="text"
          name="description"
          component={textInput}
          validate={required}
          inputclasses={"form-control"}
          blockClasses={"form-group col-md-12"}
          label="Описание"
        />
      </div>
      <div className="form-row">
        <Field
          type="radio"
          component={customRadioField}
          validate={required}
          name="color"
          colorOptions={COLOR_OPTIONS}
        />
        <Field
          name="status"
          statusOptions={STATUS_OPTIONS}
          component={customSelect}
          validate={required}
          blockClasses={"form-group col-md-4"}
          selectClasses={"form-control custom-select"}
        />
        <Button type={"submit"} />
      </div>
    </form>
  );
};

export default reduxForm({
  form: "addCar",
})(AddCarForm);
