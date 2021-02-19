import React from 'react';
import styled from 'styled-components';

const FeatureDetailsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5em;
`;

const FeatureDetailsDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const FeatureDetailsTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.darkColor};
`;

const FeatureDetailsBody = styled.p`
  text-align: center;
  width: 50%;
`;

const FeatureDetailsImage = styled.img`
  border: 1px solid transparent;
  border-radius: 1rem;
`;

const FeatureDetails = ({ left, right, image, title, description }) => {
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
