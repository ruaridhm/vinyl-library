import styled from 'styled-components';

export const DropdownContainer = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: auto;
`;

export const DropdownWrapper = styled.div`
  display: flex;
  min-height: 38px;
  flex-wrap: wrap;
`;

export const DropdownHeader = styled.div`
  background-color: ${({ theme }) => theme.white};
  border-color: ${({ theme }) => theme.backgroundLight};
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  padding: 0 1.2em;
`;

export const DropdownHeaderTitle = styled.div`
  margin: auto 0;
  display: flex;
`;
export const DropdownHeaderTitleBold = styled.div`
  font-weight: bold;
  margin-right: 0.25rem;
`;

export const DropdownHeaderAction = styled.div``;

export const DropdownList = styled.ul`
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  padding: 0;
  margin: 0;
  width: 100%;
  margin-top: 1em;
`;

export const DropdownListItem = styled.li`
  list-style-type: none;
  :first-of-type > button {
    border-top: 1px solid ${({ theme }) => theme.backgroundLight};
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  :last-of-type > button {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;
export const DropdownListItemButton = styled.button`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.white};
  font-size: 1rem;
  padding: 0.9em 1.2em 0.9em 1.2em;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.backgroundLight};
  width: 100%;
  text-align: left;
  border-left: 1px solid ${({ theme }) => theme.backgroundLight};
  border-right: 1px solid ${({ theme }) => theme.backgroundLight};
  &:hover,
  &:focus {
    cursor: pointer;
    font-weight: bold;
    background-color: ${({ theme }) => theme.backgroundLight};
  }
`;
