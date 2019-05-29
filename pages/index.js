import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { Wrapper } from '../components/utils/styledComponents';
import Tools from '../components/home/Tools';
import Hero from '../components/home/Hero';
import Summary from '../components/home/Summary';

const HeroDescription = styled.div`
  font-size: 1rem;
  color: ${props => props.theme.textColorLight};
  padding-bottom: 2rem;
`;
const StyledButton = styled(Button)`
  width: 12rem;
  height: 2.5rem;
`;
const Title = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  padding-bottom: ${props => (props.tool ? '1rem' : '0.5rem')};
`;
const GenericContainer = styled.div`
  background: ${props => (props.background ? '#f7faff' : '#fff')};
  text-align: center;
`;
const Customer = styled.div`
  padding-top: 10%;
  background: ${props =>
    props.src && `url('${props.src}') no-repeat center center`};
  background-size: cover;
`;

const customers = [
  '/static/volvo.png',
  '/static/ford.png',
  '/static/gefco.png',
  '/static/man.png',
  '/static/ttc.png'
];

class Index extends Component {
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
        <Hero showModal={showModal} toggleModal={this.toggleModal} />
        <Summary />
        <Tools />
        <GenericContainer background className="cp-c-padding-3">
          <Wrapper>
            <Title tool>Some of our Customers</Title>
            <div className="cp-c-row cp-c-align-spacebetween-center">
              {customers.map(customer => (
                <Customer className="cp-i-15" key={customer} src={customer} />
              ))}
            </div>
          </Wrapper>
        </GenericContainer>
        <GenericContainer className="cp-c-padding-3">
          <Wrapper>
            <Title tool>Start automating your business</Title>
            <HeroDescription>
              Request a demo, start building your first workflows and discover
              how it can improve your business.
            </HeroDescription>
            <StyledButton onClick={this.toggleModal} type="primary">
              Request demo
            </StyledButton>
          </Wrapper>
        </GenericContainer>
      </>
    );
  }
}
export default Index;
