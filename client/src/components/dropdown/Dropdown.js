import React, { useState } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: auto;
`;

const DropdownWrapper = styled.div`
  display: flex;
  min-height: 38px;
  flex-wrap: wrap;
`;

const DropdownHeader = styled.div`
  background-color: ${(props) => props.theme.white};
  border-color: ${(props) => props.theme.backgroundLight};
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

const DropdownHeaderTitle = styled.div``;
const DropdownHeaderTitleBold = styled.div`
  font-weight: bold;
`;

const DropdownHeaderAction = styled.div``;

const DropdownList = styled.ul`
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  padding: 0;
  margin: 0;
  width: 100%;
  margin-top: 1em;
`;

const DropdownListItem = styled.li`
  list-style-type: none;
  :first-of-type > button {
    border-top: 1px solid ${(props) => props.theme.backgroundLight};
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  :last-of-type > button {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

const DropdownListItemButton = styled.button`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.white};
  font-size: 1rem;
  padding: 0.9em 1.2em 0.9em 1.2em;
  border: 0;
  border-bottom: 1px solid ${(props) => props.theme.backgroundLight};
  width: 100%;
  text-align: left;
  border-left: 1px solid ${(props) => props.theme.backgroundLight};
  border-right: 1px solid ${(props) => props.theme.backgroundLight};
  &:hover,
  &:focus {
    cursor: pointer;
    font-weight: bold;
    background-color: ${(props) => props.theme.backgroundLight};
  }
`;
const Dropdown = ({
  title,
  items,
  multiSelect = false,
  selection,
  setSelection,
}) => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  const handleOnClick = (item) => {
    if (!selection.some((current) => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
        setOpen(false);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval]);
    }
  };

  const isItemInSelection = (item) => {
    if (selection.some((current) => current.id === item.id)) {
      return true;
    }
    return false;
  };

  return (
    <DropdownContainer>
      <DropdownWrapper>
        <DropdownHeader
          tabIndex={0}
          role='button'
          onKeyPress={() => toggle()}
          onClick={() => toggle()}
        >
          <DropdownHeaderTitle>
            <DropdownHeaderTitleBold>{title} </DropdownHeaderTitleBold>
            {selection.length > 0 ? selection[0].title : ''}
          </DropdownHeaderTitle>
          <DropdownHeaderAction>
            <p>{open ? 'Close' : 'Open'}</p>
          </DropdownHeaderAction>
        </DropdownHeader>
        {open && (
          <DropdownList>
            {items.map((item) => (
              <DropdownListItem key={item.id}>
                <DropdownListItemButton
                  type='button'
                  onClick={() => handleOnClick(item)}
                >
                  <span>{item.title}</span>
                  <span>{isItemInSelection(item) && 'Selected'}</span>
                </DropdownListItemButton>
              </DropdownListItem>
            ))}
          </DropdownList>
        )}
      </DropdownWrapper>
    </DropdownContainer>
  );
};
export default Dropdown;
