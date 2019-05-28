import React, { ComponentType } from 'react';
import { FastField } from 'formik';
import { get } from 'lodash';

const validateAll = validations => value => {
  for (let i = 0; i < validations.length; i++) {
    const result = validations[i](value);
    if (result) {
      return result;
    }
  }
  return undefined;
};

export default ({
  component: Component,
  validate,
  name,
  label,
  ...otherProps
}) => (
  <FastField
    name={name}
    validate={Array.isArray(validate) ? validateAll(validate) : validate}
    render={({ field, form }) => (
      <Component
        {...field}
        label={label}
        name={name}
        meta={{
          touched: get(form.touched, name),
          error: get(form.errors, name)
        }}
        {...otherProps}
      />
    )}
  />
);
