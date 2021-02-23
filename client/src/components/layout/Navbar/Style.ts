import styled from 'styled-components';

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.secondaryColor};
  padding-left: 1em;
  @media (max-width: 380px) {
    padding-left: 0;
  }
`;

export const NavLogo = styled.img`
  height: 1.2em;
  margin-right: 0.25em;
`;

export const NavLinkList = styled.ul`
  display: flex;
  list-style: none;
  font-weight: bold;
  color: ${({ theme }) => theme.backgroundLight};
  margin: 0;
  @media (max-width: 380px) {
    padding-left: 0;
  }
`;

export const NavLinkListRight = styled(NavLinkList)`
  @media (max-width: 981px) {
    display: none;
  }
`;

export const NavListItem = styled.li`
  margin: 1em;
  color: ${({ theme }) => theme.backgroundLight};
  display: flex;
  align-items: center;
  a {
    color: ${({ theme }) => theme.backgroundLight};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.lightColor};
    }
  }
`;

export const NavTitle = styled.h1`
  display: flex;
  align-items: center;
  margin: 0;
  white-space: nowrap;
  color: ${({ theme }) => theme.lightColor};
`;
