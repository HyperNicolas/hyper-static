import React from 'react';
import styled from 'styled-components';
import {
  InputContainer,
  LabelText,
  ErrorMessage,
  inputCss,
  BaseFieldPropsT
} from './utils';

export const TextArea = styled.textarea`
  ${inputCss};
  min-width: 100%;
  max-width: 100%;
  min-height: 1rem;
  line-height: 1.3;
`;

export default ({ className, meta, id, label, value, ...otherProps }) => {
  const isInvalid = !!(meta && meta.touched && meta.error);
  return (
    <InputContainer
      className={`input-container ${className || ''} ${(isInvalid &&
        'invalid') ||
        ''}`}
    >
      {label && <LabelText htmlFor={id ? id : undefined}>{label}</LabelText>}
      <TextArea
        {...otherProps}
        id={id}
        value={value}
        invalid={!!(meta && meta.touched && meta.error)}
      />
      {meta && meta.touched && meta.error && (
        <ErrorMessage>{meta.error}</ErrorMessage>
      )}
    </InputContainer>
  );
};
