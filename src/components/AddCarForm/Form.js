import React from "react";
import { addCar } from "../../actions";
import { Button } from "../Buttons/Button";
import ColorSelect from "./ColorSelect";
import {useDispatch} from 'react-redux';
import { Field, reduxForm, reset } from "redux-form";
import { textInput, customSelect, customRadioField} from "fields";
import { STATUS_OPTIONS, COLOR_OPTIONS } from "../../constants";



const AddCarForm = ({ handleSubmit, values }) => {
  const dispatch = useDispatch()
  

  const afterSubmit = ( values ) => {
     const data = {
       id: Math.random(),
       ...values,
     }
     console.log(data);
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
          inputclasses={"form-control"}
          blockClasses={"form-group col-md-4"}
          label={"название"}
        />
        <Field
          type="number"
          name="year"
          component={textInput}
          inputclasses={"form-control"}
          blockClasses={"form-group col-md-4"}
          label="Год"
        />
        <Field
          type="number"
          name="price"
          component={textInput}
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
          inputclasses={"form-control"}
          blockClasses={"form-group col-md-12"}
          label="Описание"
        />
      </div>
      <div className="form-row">
        <Field
          type="radio"
          component={customRadioField}
          name="color"
          props={{value: 'fff'}}
          colorOptions={COLOR_OPTIONS}
        />
        <Field
          name="status"
          statusOptions={STATUS_OPTIONS}
          component={customSelect}
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
