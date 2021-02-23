import React from 'react';

import {
  FeatureWrapper,
  FeatureTitle,
  FeatureIcon,
  FeatureBody,
} from './Style';

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}
const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <FeatureWrapper>
      <FeatureIcon>{icon}</FeatureIcon>
      <FeatureTitle>{title}</FeatureTitle>
      <FeatureBody>{description}</FeatureBody>
    </FeatureWrapper>
  );
};

export default Feature;
