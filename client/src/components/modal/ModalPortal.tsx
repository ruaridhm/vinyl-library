import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
const modalRoot = document.getElementById('modal');

const ModalPortal = ({ children }) => {
  const elRef = useRef(null);

  //if elRef has not been initialised, initialise it to this div. This div should survive past renders until the modal is destroyed.
  if (!elRef.current) {
    elRef.current = document.createElement('div');
  }

  useEffect(() => {
    //append to DOM
    modalRoot.appendChild(elRef.current);
    //cleanup. removes div from the dom
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default ModalPortal;
