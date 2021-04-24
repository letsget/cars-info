import React from "react";
import styled from "styled-components";
import cn from 'classnames';

export const textInput = ({
  label,
  input,
  type,
  meta,
  blockClasses,
  inputclasses,
}) => {
  return (
    <div className={blockClasses}>
      <input
        className={inputclasses}
        {...input}
        type={type}
        placeholder={label}
      />
    {meta.error && meta.touched && !meta.active && (
        <div className="feedback-text error-text">{meta.error}</div>
      )}
    </div>
  );
};

export const customSelect = ({
  name,
  statusOptions,
  blockClasses,
  selectClasses,
  input,
}) => {
  return (
    <div className={blockClasses}>
      <select {...input} name={name} className={selectClasses}>
        {statusOptions.map((option, idx) => {
          return (
            <option value={option} key={idx}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

const List = styled.div`
  display: flex;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0;
  margin-right: 0;
`;

export const customRadioField = ({ value, colorOptions, renderActive, ...field }) => {
  return (
    <div className="form-group col-md-4">
      <List>
        {colorOptions.map((option) => (
          <label className="input-container" key={option.color}> 
          <input {...field.input}
            type="radio"
            value={option.color}
            checked={field.checked}
          />
          <span className="checkmark" style={{
              backgroundColor: option.color,
              border: option.color === '#fff' && !field.checked && '2px solid #aeaeae',
            }} />
          </label>
        ))}
      </List>
    </div>
  );
};
