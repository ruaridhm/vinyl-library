import styled from 'styled-components';

export const FeatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FeatureTitle = styled.h3``;

export const FeatureIcon = styled.div`
  border: 1px solid ${({ theme }) => theme.grey};
  border-radius: 50%;
  width: 3em;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 5px 5px 15px 5px ${({ theme }) => theme.grey};
  box-shadow: 5px 5px 15px 5px ${({ theme }) => theme.grey};
  color: ${({ theme }) => theme.primaryColor};
`;

export const FeatureBody = styled.p`
  text-align: center;
`;

export const FeatureDetailsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5em;
`;

export const FeatureDetailsDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

export const FeatureDetailsTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.darkColor};
`;

export const FeatureDetailsBody = styled.p`
  text-align: center;
  width: 50%;
`;

export const FeatureDetailsImage = styled.img`
  border: 1px solid transparent;
  border-radius: 1rem;
`;
