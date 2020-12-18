import React from 'react';
import styled from 'styled-components';

const FeatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FeatureTitle = styled.h3``;

const FeatureIcon = styled.div`
  border: 1px solid $grey;
  border-radius: 50%;
  width: 3em;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 5px 5px 15px 5px ${(props) => props.theme.grey};
  box-shadow: 5px 5px 15px 5px ${(props) => props.theme.grey};
  color: ${(props) => props.theme.primaryColor};
`;

const FeatureBody = styled.div`
  text-align: center;
`;

const Feature = ({ icon, title, description }) => {
  return (
    <FeatureWrapper>
      <FeatureIcon>{icon}</FeatureIcon>
      <FeatureTitle>{title}</FeatureTitle>
      <FeatureBody>{description}</FeatureBody>
    </FeatureWrapper>
  );
};

export default Feature;
