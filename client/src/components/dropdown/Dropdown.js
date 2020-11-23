import React, { useState } from 'react';
import './dropdown.css';

function Dropdown({
  title,
  items,
  multiSelect = false,
  selection,
  setSelection,
}) {
  const [open, setOpen] = useState(false);
  //const [selection, setSelection] = useState([]);

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
    <div className='dropdown-container'>
      <div className='dropdown-wrapper'>
        <div
          tabIndex={0}
          className='dropdown-header'
          role='button'
          onKeyPress={() => toggle(!open)}
          onClick={() => toggle(!open)}
        >
          <div className='dropdown-header-title'>
            <p className='dropdown-header-title--bold'>
              {title} {selection.length > 0 ? selection[0].title : ''}
            </p>
          </div>
          <div className='dropdown-header-action'>
            <p>{open ? 'Close' : 'Open'}</p>
          </div>
        </div>
        {open && (
          <ul className='dropdown-list'>
            {items.map((item) => (
              <li className='dropdown-list-item' key={item.id}>
                <button type='button' onClick={() => handleOnClick(item)}>
                  <span>{item.title}</span>
                  <span>{isItemInSelection(item) && 'Selected'}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
