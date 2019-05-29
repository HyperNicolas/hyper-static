import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
import { Wrapper, media } from '../utils/styledComponents';

const Title = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  padding-bottom: ${props => (props.tool ? '1rem' : '0.5rem')};
`;
const ToolDescription = styled.div`
  color: #6b6b6b;
  padding-bottom: ${props => (props.tool ? '1rem' : '0.5rem')};
`;
const Container = styled.div`
  padding: 3rem 1rem;
  :nth-child(odd) {
    background: #f7faff;
  }
`;
const Image = styled.div`
  padding-top: 34%;
  background: ${props =>
    props.src && `url('${props.src}') no-repeat center center`};
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
  margin-top: 0.1rem;
  font-size: 1rem;
`;

const tools = [
  {
    title: 'Integrated CRM tool',
    description: 'Centralise and manage all your contact info efficiently',
    bullets: [
      'Centralise and manage all data from customers, propsects, suppliers and employees',
      'Create groups to control access to functions and data in your HyperPortal',
      'Import/export your current contacts database',
      'Communicates with GDRP online customer Portal'
    ],
    src: '/static/crm2.png',
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
    src: '/static/gdpr2.png',
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
    src: '/static/cms2.png',
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
    src: '/static/ecom2.png',
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
    src: '/static/email2.png',
    color: '#E33584'
  }
];

const Tools = () =>
  tools.map(({ title, description, bullets, src, color }, index) =>
    index % 2 == 0 ? (
      <Container key={title}>
        <Wrapper className="cp-c-row cp-c-align-spacebetween-center">
          <Image src={src} className="cp-i-100 cp-i-md-50" />
          <div className="cp-i-100 cp-i-md-45">
            <Title tool>{title}</Title>
            <ToolDescription tool>{description}</ToolDescription>
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
            <Title tool>{title}</Title>
            <ToolDescription tool>{description}</ToolDescription>
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
  );

export default Tools;
