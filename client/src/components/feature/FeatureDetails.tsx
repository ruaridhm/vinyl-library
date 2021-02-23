import React from 'react';

import {
  FeatureDetailsWrapper,
  FeatureDetailsDescription,
  FeatureDetailsTitle,
  FeatureDetailsBody,
  FeatureDetailsImage,
} from './Style';

interface FeatureDetailsProps {
  left?: boolean;
  right?: boolean;
  image: string;
  title: string;
  description: string;
}

const FeatureDetails: React.FC<FeatureDetailsProps> = ({
  left,
  right,
  image,
  title,
  description,
}) => {
  return (
    <FeatureDetailsWrapper>
      {left && (
        <>
          <FeatureDetailsDescription>
            <FeatureDetailsTitle>{title}</FeatureDetailsTitle>
            <FeatureDetailsBody>{description}</FeatureDetailsBody>
          </FeatureDetailsDescription>
          <FeatureDetailsImage
            src={image}
            alt={title}
            className='feature-details-image'
          />
        </>
      )}

      {right && (
        <>
          <FeatureDetailsImage
            src={image}
            alt={title}
            className='feature-details-image'
          />

          <FeatureDetailsDescription>
            <FeatureDetailsTitle>{title}</FeatureDetailsTitle>
            <FeatureDetailsBody>{description}</FeatureDetailsBody>
          </FeatureDetailsDescription>
        </>
      )}
    </FeatureDetailsWrapper>
  );
};

export default FeatureDetails;
