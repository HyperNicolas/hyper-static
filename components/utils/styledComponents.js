// @flow

import styled, { css, keyframes } from 'styled-components';
import { Icon } from 'antd';

export const theme = {
  textColor: '#565656',
  textColorLight: '#8c8a8a',
  mainColor: '#1890ff',
  invalidColor: '#ff9b20',
  skeletonColor: '#e8e8e8',
  thinBorder: '1px solid #dcdcdc',
  borderRadius: '4px'
};

export const sizes = {
  sm: 568,
  md: 768,
  lg: 1024,
  wrapper: 1120,
  xl: 1280
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = `@media screen and (min-width: ${sizes[label] / 16}em)`;
  return acc;
}, {});

export const Wrapper = styled('div')`
  padding: ${props => props.padding && '0.5rem'};
  box-sizing: border-box;
  max-width: 1120px;
  margin: 0 auto;
`;

export const cardCss = css`
  background: #fff;
  padding: ${props => (props.padding ? props.padding : '1rem')};
  margin-bottom: 1rem;
  border: ${props => props.theme.thinBorder};

  ${media.md} {
    box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.1);
    border-radius: ${props => props.theme.borderRadius};
    border: none;
  }
`;

export const Card = styled('div')`
  ${cardCss}
`;

export const priceStyling = (value, precision) =>
  value.toLocaleString('NL', {
    style: 'currency',
    currency: 'eur',
    minimumFractionDigits: precision,
    maximumFractionDigits: precision
  });

export const arrowAnimation = keyframes` 
  0%,
  33% {
    transform: translate(0%, -50%);
  }

  33%,
  66% {
    transform: translate(25%, -50%);
  }

  66%,
  100% {
    transform: translate(0%, -50%);
  }
`;
export const StlyedRightArrow = styled(Icon)`
  font-size: 0.7rem;
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
`;
