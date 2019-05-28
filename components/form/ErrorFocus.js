import React, { Component } from 'react';
import { connect } from 'formik';

class ErrorFocus extends Component {
  componentDidUpdate(prevProps) {
    const { isSubmitting, isValidating, errors } = prevProps.formik;
    const keys = Object.keys(errors);
    if (keys.length > 0 && isSubmitting && !isValidating) {
      const firstError = document.querySelector('.input-container.invalid');
      firstError &&
        firstError.scrollIntoView({
          behavior: 'smooth'
        });
    }
  }

  render() {
    return null;
  }
}

const ErrorFocusWithFormik = connect(ErrorFocus);

export default ErrorFocusWithFormik;
