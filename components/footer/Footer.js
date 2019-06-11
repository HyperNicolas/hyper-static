import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #1e2f58;
  height: 15rem;
`;
const Logo = styled.div`
  padding-top: 10%;
  width: 80px;
  background: url(/static/logo.png) no-repeat center center;
  background-size: cover;
  margin-right: 0.5rem;
`;
const Name = styled.div`
  color: #fff;
  font-weight: 600;
  font-size: 1.5rem;
`;

const Footer = () => (
  <Container className="cp-c-column cp-c-align-center-center">
    <Logo />
    <Name>Hyper by Xpower</Name>
  </Container>
);

export default Footer;
