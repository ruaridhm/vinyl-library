import React from 'react';
import './modal.css';
import Button from '../button/Button';

const Modal = ({
  headerText,
  bodyHeaderText,
  bodyText,
  show,
  close,
  confirm,
}) => {
  return (
    <div
      className='modal-wrapper'
      style={{
        transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0',
      }}
    >
      <div className='modal-header'>
        <p>{headerText}</p>
        <span onClick={close} className='modal-close-btn'>
          x
        </span>
      </div>
      <div className='modal-content'>
        <div className='modal-body'>
          <h4>{bodyHeaderText}</h4>
          <p>{bodyText}</p>
        </div>
        <div className='modal-footer'>
          <Button
            onClick={close}
            buttonStyle='btn--primary--solid'
            type='button'
            buttonSize='btn--small'
          >
            Cancel
          </Button>
          <Button
            onClick={confirm}
            buttonStyle='btn--danger--solid'
            type='button'
            buttonSize='btn--small'
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
