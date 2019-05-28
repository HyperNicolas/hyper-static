import styled, { css } from 'styled-components';

export const ErrorMessage = styled.div`
  color: ${props => props.theme.invalidColor};
`;

export const InputContainer = styled.div`
  margin-bottom: 0.5rem;
`;

export const inputCss = css`
  background: transparent;
  border: 1px solid
    ${props => (props.invalid ? props.theme.invalidColor : '#d9d9d9')};
  color: ${props => props.theme.textColor};
  font-size: 0.9em;
  padding: 8px 4px;
  transition: 0.3s border-color;
  width: 100%;
  outline: none;

  &:focus {
    border-color: ${props => props.theme.mainColor};
  }
`;

export const LabelText = styled.label`
  padding-bottom: 0.3rem;
  display: block;
  color: ${props => props.theme.textColor};
`;
