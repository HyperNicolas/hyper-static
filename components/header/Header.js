import React, { Component } from 'react';
import styled from 'styled-components';
import { Icon, Button, Modal } from 'antd';
import ContactForm from '../form/ContactForm';
import { media } from '../utils/styledComponents';

const Container = styled.div`
  border-bottom: ${props => props.theme.thinBorder};
  padding: 0.2rem 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 100;
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
  display: none;

  ${media.md} {
    display: block;
    border-right: ${props => props.theme.thinBorder};
    padding-right: 1.5rem;
    margin-right: 1.5rem;
    color: ${props => props.theme.textColor};
    height: 2rem;
    line-height: 2rem;
  }
`;

class Header extends Component {
  state = {
    showModal: false
  };

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };
  render() {
    const { showModal } = this.state;
    return (
      <>
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
            <Button onClick={this.toggleModal} type="primary">
              Request demo
            </Button>
          </div>
        </Container>
        <Modal
          title="Request demo"
          visible={showModal}
          closable={true}
          onCancel={this.toggleModal}
          footer={null}
        >
          <ContactForm />
        </Modal>
      </>
    );
  }
}

export default Header;
