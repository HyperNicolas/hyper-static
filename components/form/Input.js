import React from 'react';
import styled from 'styled-components';

import { ErrorMessage, InputContainer, inputCss, LabelText } from './utils';

const Input = styled.input`
  ${inputCss};
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
      <Input {...otherProps} id={id} value={value} invalid={isInvalid} />
      {meta && meta.touched && meta.error && (
        <ErrorMessage>{meta.error}</ErrorMessage>
      )}
    </InputContainer>
  );
};
