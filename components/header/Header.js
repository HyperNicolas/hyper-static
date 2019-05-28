import React from 'react';
import styled from 'styled-components';
import { Icon, Button } from 'antd';

const Container = styled.div`
  border-bottom: ${props => props.theme.thinBorder};
  padding: 0.2rem 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
`;
const Logo = styled.div`
  padding-top: 50%;
  width: 40px;
  background: url(/static/logo.png) no-repeat center center;
  background-size: cover;
  margin-right: 0.5rem;
`;
const Hyper = styled.div`
  font-size: 1rem;
  color: ${props => props.theme.mainColor};
  font-weight: 700;
`;
const Xpower = styled.div`
  font-size: 0.8rem;
  color: ${props => props.theme.textColorLight};
`;
const StyledLink = styled.a`
  color: ${props => props.theme.textColor};
  padding-right: 1.5rem;
  border-right: ${props => props.theme.thinBorder};
  margin-right: 1.5rem;
  height: 2rem;
  line-height: 2rem;
`;

const Header = () => (
  <Container className="cp-c-row cp-c-align-spacebetween-center">
    <div className="cp-c-row cp-c-align-start-center">
      <Logo />
      <div>
        <Hyper>Hyper</Hyper>
        <Xpower>by Xpower</Xpower>
      </div>
    </div>
    <div className="cp-c-row cp-c-align-start-center">
      <StyledLink href="tel:+329552211">
        <Icon type="phone" /> +32 9 55 22 11
      </StyledLink>
      <Button type="primary">Request demo</Button>
    </div>
  </Container>
);

export default Header;
