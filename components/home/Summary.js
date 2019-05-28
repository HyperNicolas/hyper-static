import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
import { Wrapper } from '../utils/styledComponents';

const Title = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  padding-bottom: ${props => (props.tool ? '1rem' : '0.5rem')};
`;
const Description = styled.div`
  color: ${props => props.theme.textColorLight};
`;
const SummaryIcon = styled(Icon)`
  font-size: 3.5rem;
  margin-bottom: 0.5rem;
`;

const GenericContainer = styled.div`
  background: ${props => (props.background ? '#f7faff' : '#fff')};
  text-align: center;
`;

const summary = [
  {
    title: 'Flexibility',
    description:
      'Easily design, deploy, and evaluate new ways of working to your workforce.',
    icon: 'rocket'
  },
  {
    title: 'Web-based',
    description:
      'Naturally and automatically adjust to fit any hardware you use. Use it on the road or in the office.',
    icon: 'cloud'
  },
  {
    title: 'Automate',
    description:
      'Create processes that send beautiful emails, respond to data changes, contact your legacy systems, and more.',
    icon: 'thunderbolt'
  },
  {
    title: 'Third-party integrations',
    description:
      'Pull and push data from multiple sources and manage everything in one single platform, your Hyperportal.',
    icon: 'api'
  }
];

const Summary = () => (
  <GenericContainer background>
    <Wrapper className="cp-c-row cp-c-align-spacebetween-start cp-c-wrap cp-c-padding-4">
      {summary.map(({ title, description, icon }) => (
        <div key={title} className="cp-i-100 cp-i-md-50">
          <SummaryIcon type={icon} theme="twoTone" />
          <Title>{title}</Title>
          <Description>{description}</Description>
        </div>
      ))}
    </Wrapper>
  </GenericContainer>
);

export default Summary;
