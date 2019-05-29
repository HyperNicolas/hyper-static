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
  color: #4da0ff;
`;

const GenericContainer = styled.div`
  background: ${props => (props.background ? '#f7faff' : '#fff')};
  text-align: center;
`;

const summary = [
  {
    title: 'Continuous improvement',
    description:
      'Easily design, deploy, and evaluate new ways of working to your workforce.',
    icon: 'rise',
    theme: 'outlined'
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
  },
  {
    title: 'Expert support',
    description:
      'We have an experienced team ready to help with your digital transformation efforts.',
    icon: 'team',
    theme: 'outlined'
  },
  {
    title: 'Flexibility',
    description:
      'Combine our Workflows and CMS engines to develop your own custom applications, without ever needing to code a single line.',
    icon: 'rocket'
  }
];

const Summary = () => (
  <GenericContainer background>
    <Wrapper className="cp-c-row cp-c-align-spacebetween-start cp-c-wrap cp-c-padding-4">
      {summary.map(({ title, description, icon, theme }) => (
        <div key={title} className="cp-i-100 cp-i-md-50 cp-i-lg-33">
          <SummaryIcon type={icon} theme={theme ? theme : 'twoTone'} />
          <Title>{title}</Title>
          <Description>{description}</Description>
        </div>
      ))}
    </Wrapper>
  </GenericContainer>
);

export default Summary;
