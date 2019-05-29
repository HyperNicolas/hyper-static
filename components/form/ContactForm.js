import { Formik } from 'formik';
import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

import { media } from '../utils/styledComponents';
import { email, required } from './validations';
import ErrorFocus from './ErrorFocus';
import Field from './Field';
import Input from './Input';
import Textarea from './Textarea';

const FieldContainer = styled.div`
  padding: 0 1rem;

  :first-child {
    padding-top: 1rem;
  }
`;
const ButtonContainer = styled.div`
  padding: 1rem;
  text-align: end;
`;
const StyledButton = styled(Button)`
  width: 100%;
  height: 2.5rem;

  ${media.md} {
    max-width: 50%;
  }
`;

const initialValues = {
  email: '',
  name: '',
  message: ''
};

const GetStartedByEmailForm = ({ className, onSubmit }) => (
  <div className={className}>
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({ values, handleChange, handleSubmit, isSubmitting }) => {
        return (
          <form onSubmit={handleSubmit} noValidate>
            <ErrorFocus />
            <FieldContainer className="cp-c-row cp-c-wrap cp-c-align-spacebetween-center">
              <Field
                className="cp-i-100 cp-i-md-50"
                name="name"
                value={values.name}
                label="Name"
                component={Input}
                type="text"
                disabled={isSubmitting}
                validate={[required]}
                onChange={handleChange}
              />
              <Field
                className="cp-i-100 cp-i-md-45"
                name="company"
                value={values.name}
                label="Company"
                component={Input}
                type="text"
                disabled={isSubmitting}
                validate={[required]}
                onChange={handleChange}
              />
            </FieldContainer>
            <FieldContainer>
              <Field
                className="cp-i-100"
                name="email"
                value={values.email}
                label="Email"
                component={Input}
                type="text"
                disabled={isSubmitting}
                validate={[required, email]}
                onChange={handleChange}
              />
            </FieldContainer>
            <FieldContainer>
              <Field
                name="message"
                value={values.message}
                label="What do you expect of the demo"
                component={Textarea}
                type="text"
                disabled={isSubmitting}
                onChange={handleChange}
                rows="5"
              />
            </FieldContainer>
            <ButtonContainer>
              <StyledButton
                type="primary"
                htmlType="submit"
                loading={isSubmitting}
              >
                Send
              </StyledButton>
            </ButtonContainer>
          </form>
        );
      }}
    </Formik>
  </div>
);

export default GetStartedByEmailForm;
