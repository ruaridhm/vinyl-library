import React, { useState } from 'react';

import {
  DropdownContainer,
  DropdownWrapper,
  DropdownHeader,
  DrodownHeaderTitle,
  DropdownHeaderTitleBold,
  DropdownHeaderAction,
  DropdownListItem,
  DropdownListItemButton,
} from './Style';

interface DropdownProps {
  title: string;
  items: Array<object>;
  multiSelect: boolean;
  selection: Array<string>;
  setSelection: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  title,
  items,
  multiSelect = false,
  selection,
  setSelection,
}) => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  interface itemInterface {
    id: Number;
    title: string;
    value: string;
  }

  const handleOnClick = (item: itemInterface) => {
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

  const isItemInSelection = (item: itemInterface) => {
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
