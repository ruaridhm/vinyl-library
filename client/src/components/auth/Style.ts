import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AltAuthCTA = styled.span`
  display: flex;
  justify-content: center;
`;

export const AuthCTALink = styled(Link)`
  padding-left: 0.25rem;
  text-decoration: none;
  color: ${({ theme }) => theme.primaryColor};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
