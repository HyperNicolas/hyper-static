import React from 'react';
import styled from 'styled-components';
import { Icon, Button } from 'antd';
import { Wrapper, media } from '../components/utils/styledComponents';

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
const Title = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  padding-bottom: 1rem;
`;
const Description = styled.div`
  color: ${props => props.theme.textColorLight};
`;
const ToolDescription = styled.div`
  color: #6b6b6b;
  padding-bottom: 0.5rem;
`;
const GenericContainer = styled.div`
  background: ${props => (props.background ? '#f7faff' : '#fff')};
  text-align: center;
`;
const Container = styled.div`
  padding: 3rem 1rem;
  :nth-child(odd) {
    background: #f7faff;
  }
`;
const Image = styled.div`
  padding-top: 35%;
  background: ${props =>
    props.src && `url('${props.src}') no-repeat center center`};
  background-size: cover;
  display: none;

  ${media.md} {
    display: block;
  }
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
const BulletContainer = styled.div`
  color: ${props => props.theme.textColorLight};
  padding-bottom: 0.5rem;
`;
const StyledIcon = styled(Icon)`
  margin-right: 0.5rem;
  font-size: 1rem;
`;
const Customer = styled.div`
  padding-top: 10%;
  background: ${props =>
    props.src && `url('${props.src}') no-repeat center center`};
  background-size: cover;
`;

const summary = [
  {
    title: 'Flexibility',
    description:
      'Don’t miss anything from your to-do list and control your own flow. Easily design and create new steps. Update the order of logic and add automatic e-mails to your flow to reach customers at the right moment.'
  },
  {
    title: 'Web-based',
    description:
      'Naturally and automatically adjust to fit any hardware you use. Use it on the road or in the office.'
  },
  {
    title: 'Automate',
    description:
      'Create processes that send beautiful emails, respond to data changes, contact your legacy systems, and more.'
  },
  {
    title: 'Third-party integrations',
    description:
      'Pull and push data from multiple sources and manage everything in one single platform, your Hyperportal.'
  }
];

const tools = [
  {
    title: 'integrated CRM tool',
    description: 'Centralise and manage all your contact info efficiently',
    bullets: [
      'Centralise and manage all data from customers, propsects, suppliers and employees',
      'Create groups to control access to functions and data in your HyperPortal',
      'Import/export your current contacts database',
      'Communicates with GDRP online customer Portal'
    ],
    src: '/static/crm.png',
    color: '#F8D310'
  },
  {
    title: 'Built-in GDPR portal',
    description:
      'A transparent solution protecting the privacy of your contacts',
    bullets: [
      'Let your Hyper users easily manage and adapt their person information and preferences',
      'Approve and manage change- or information requests',
      'User request for exporting data',
      'Transparancy'
    ],
    src: '/static/gdpr.png',
    color: '#49AFEA'
  },
  {
    title: 'Advanced CMS',
    description:
      'Content management system is a versatile tool to create all the business objects needed to support your company. These objects can be used among other the workflows and e-commerce.',
    bullets: [
      'Enterprise-grade permissions',
      'Computed fields with Excell functions',
      'Search and filter through date',
      'Completely customisable'
    ],
    src: '/static/cms.png',
    color: '#A379F7'
  },
  {
    title: 'E-commerce ready',
    description:
      'In addition to your physical location, HyperCommerce is an additional sales channel that creates a completely new customer potential and on top of that automates and facilitates your flows.',
    bullets: [
      'Manage your content and client zone',
      'Determine search filters',
      'Define products and their bullets',
      'Cross-selling possibilites',
      'Google adwords specialists that can assist you always reach the right audience',
      'SEO suite to optimise your search engine results'
    ],
    src: '/static/ecom.png',
    color: '#5EB158'
  },
  {
    title: 'We automate you e-mail    communication',
    description:
      'Send automated e-mails in your workflows greatly reducing manuel work. Thanks to the integrated and user-friendly e-mail builder, you easily set up branded e-mails.',
    bullets: [
      'Rich inline editing with easy-to use e-mail builder',
      'Send automated flows in your workflow',
      'GDPR compliant'
    ],
    src: '/static/email.png',
    color: '#E33584'
  }
];

const customers = [
  '/static/volvo.png',
  '/static/ford.png',
  '/static/gefco.png',
  '/static/man.png',
  '/static/ttc.png'
];

const Index = () => (
  <>
    <Wrapper className="cp-c-row cp-c-align-start-center cp-c-wrap cp-c-padding-4">
      <div className="cp-i-100 cp-i-md-40">
        <HeroTitle>Conquer your workflows</HeroTitle>
        <HeroDescription>
          A workflows-first CRM to boost quality, collaboration, and
          productivity
        </HeroDescription>
        <StyledButton type="primary">Request demo</StyledButton>
      </div>
      <HeroImage src="" className="cp-i-100 cp-i-md-60" />
    </Wrapper>
    <GenericContainer background>
      <Wrapper className="cp-c-row cp-c-align-spacebetween-start cp-c-wrap cp-c-padding-4">
        {summary.map(({ title, description }) => (
          <div key={title} className="cp-i-100 cp-i-md-50">
            <Title>{title}</Title>
            <Description>{description}</Description>
          </div>
        ))}
      </Wrapper>
    </GenericContainer>
    {tools.map(({ title, description, bullets, src, color }, index) =>
      index % 2 == 0 ? (
        <Container key={title}>
          <Wrapper className="cp-c-row cp-c-align-spacebetween-center">
            <Image src={src} className="cp-i-100 cp-i-md-50" />
            <div className="cp-i-100 cp-i-md-45">
              <Title>{title}</Title>
              <ToolDescription>{description}</ToolDescription>
              {bullets.map(bullet => (
                <BulletContainer
                  key={bullet}
                  className="cp-c-row cp-c-align-start-start"
                >
                  <StyledIcon
                    type="check-circle"
                    theme="twoTone"
                    twoToneColor={color}
                  />
                  <div>{bullet}</div>
                </BulletContainer>
              ))}
            </div>
          </Wrapper>
        </Container>
      ) : (
        <Container background key={title}>
          <Wrapper className="cp-c-row cp-c-align-spacebetween-center">
            <div className="cp-i-100 cp-i-md-45">
              <Title>{title}</Title>
              <ToolDescription>{description}</ToolDescription>
              {bullets.map(bullet => (
                <BulletContainer
                  key={bullet}
                  className="cp-c-row cp-c-align-start-start"
                >
                  <StyledIcon
                    type="check-circle"
                    theme="twoTone"
                    twoToneColor={color}
                  />
                  <div>{bullet}</div>
                </BulletContainer>
              ))}
            </div>
            <Image src={src} className="cp-i-100 cp-i-md-50" />
          </Wrapper>
        </Container>
      )
    )}
    <GenericContainer background className="cp-c-padding-3">
      <Wrapper>
        <Title>Some of our Customers</Title>
        <div className="cp-c-row cp-c-align-spacebetween-center">
          {customers.map(customer => (
            <Customer className="cp-i-15" key={customer} src={customer} />
          ))}
        </div>
      </Wrapper>
    </GenericContainer>
    <GenericContainer className="cp-c-padding-3">
      <Wrapper>
        <Title>Start automating your business</Title>
        <HeroDescription>
          Request a demo, start building your first workflows and discover how
          it can improve your business.
        </HeroDescription>
        <StyledButton type="primary">Request demo</StyledButton>
      </Wrapper>
    </GenericContainer>
  </>
);

export default Index;
