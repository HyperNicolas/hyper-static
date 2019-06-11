import React from 'react';
import styled from 'styled-components';
import { Button, Modal } from 'antd';
import { Wrapper, media } from '../utils/styledComponents';
import ContactForm from '../form/ContactForm';

const HeroTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  padding-bottom: 1rem;
`;
const HeroDescription = styled.div`
  font-size: 1rem;
  color: ${props => props.theme.textColorLight};
  padding-bottom: 2rem;
`;
const StyledButton = styled(Button)`
  width: 12rem;
  height: 2.5rem;
`;
const HeroImage = styled.div`
  padding-top: 40%;
  background: url(/static/hero.png) no-repeat center center;
  background-size: cover;
  display: none;

  ${media.md} {
    display: block;
  }
`;

const Hero = ({ className, showModal, toggleModal }) => (
  <Wrapper
    className={
      (className, 'cp-c-row cp-c-align-start-center cp-c-wrap cp-c-padding-4')
    }
  >
    <div className="cp-i-100 cp-i-md-40">
      <HeroTitle>Conquer your workflows</HeroTitle>
      <HeroDescription>
        A workflows-first CRM to boost quality, collaboration, and productivity
      </HeroDescription>
      <StyledButton onClick={toggleModal} type="primary">
        Request demo
      </StyledButton>
    </div>
    <HeroImage className="cp-i-100 cp-i-md-60" />
    <Modal
      title="Request demo"
      visible={showModal}
      closable={true}
      onCancel={toggleModal}
      footer={null}
    >
      <ContactForm />
    </Modal>
  </Wrapper>
);

export default Hero;
